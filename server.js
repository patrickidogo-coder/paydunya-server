const express = require("express");
const app = express();

app.use(express.json());

app.post("/payer", (req, res) => {

res.json({

masterKey: "TA_CLE_PRINCIPALE",
privateKey: "TA_CLE_PRIVEE_TEST",
publicKey: "TA_CLE_PUBLIQUE_TEST",
token: "TON_TOKEN_TEST",

invoice: {
total_amount: req.body.montant,
description: "Commande nourriture"
}

});

});

app.listen(3000, () => console.log("Serveur lancé"));
