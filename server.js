const express = require("express");
const app = express();

app.use(express.json());

app.post("/payer", (req, res) => {

res.json({

masterKey: "**************************",
privateKey: "**************************",  
publicKey: "**************************",
token: "**************************",

invoice: {
total_amount: req.body.montant,
description: "Commande nourriture"
}

});

});

app.listen(3000, () => console.log("Serveur lancé"));
