const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
res.send("Serveur PayDunya actif");
});

app.post("/payer", (req, res) => {

res.json({

masterKey: "O3SWgWMR-32y7-6Kfg-7eFc-sXKbOrVCjHRi",

privateKey: "test_private_n5li0sOB70LWXPuckEhWmV091qq",

publicKey: "test_public_LMrF05p8PN53QZX63SZFBgNDdJt",

token: "yV4kJUrzU1uZe8DgdAdx"

});

});

app.listen(3000, () => console.log("Serveur lancé"));
