const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/payer", async (req, res) => {

let montant = req.body.montant;

try {

let response = await fetch("https://app.paydunya.com/api/v1/checkout-invoice/create", {

method: "POST",

headers: {

"Content-Type": "application/json",

"PAYDUNYA-MASTER-KEY": "O3SWgWMR-32y7-6Kfg-7eFc-sXKbOrVCjHRi",
"PAYDUNYA-PRIVATE-KEY": "test_private_n5li0sOB70LWXPuckEhWmV091qq",
"PAYDUNYA-TOKEN": "yV4kJUrzU1uZe8DgdAdx"

},

body: JSON.stringify({

invoice: {

total_amount: montant,
description: "Commande nourriture"

}

})

});

let data = await response.json();
console.log("REPONSE PAYDUNYA :",data);
if(data && data.response && data.response.checkout_url){
  res.json({
    url: data.response.checkout_url
  });
} else {
  res.status(500).json({
    error: "Erreur PayDunya",
    details: data
  });
}

} catch (e) {

res.status(500).json({

error: e.message

});

}

});

app.listen(3000, () => console.log("Serveur PayDunya actif"));
