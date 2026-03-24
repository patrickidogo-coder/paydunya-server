const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/payer", (req, res) => {
   res.json({
      masterKey: "O3SWgWMR-32y7-6Kfg-7eFc-sXKbOrVCjHRi",
      privateKey: "test_private_n5li0sOB70LWXPuckEhWmV091qq",
      publicKey: "test_public_LMrF05p8PN53QZX63SZFBgNDdJt",
      token: "yV4kJUrzU1uZe8DgdAdx"
   });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Serveur lancé sur " + PORT));
