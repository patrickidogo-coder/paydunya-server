const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

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
},

store: {
name: "Délice-resto"
},

actions: {

cancel_url: "https://idogopatrick55-sys.github.io/annulation.html",

return_url: "https://idogopatrick55-sys.github.io/success.html",

callback_url: "https://paydunya-server-gpg1.onrender.com/callback"

}

})

});

let data = await response.json();

console.log("REPONSE PAYDUNYA COMPLETE :", data);

if(data.response && data.response.checkout_url){

res.json({

url:data.response.checkout_url

});

}else{

res.json({

url:null,
error:data

});

}
  app.get("/callback",(req,res)=>{

console.log("Paiement confirmé");

res.send("OK");

});

}

}catch(e){

res.status(500).json({

error:e.message

});

}

});

app.listen(PORT, ()=>console.log("Serveur PayDunya actif"));
