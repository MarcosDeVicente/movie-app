const express = require("express");

const app = express();

const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.post("/", (req, res) => {
  const { user, pass } = req.body;
  console.log(user, pass);
  res.status(200).json({ message: "OK desde POST" });
});

app.put("/", (req, res) => {
  const { user, pass } = req.body;
  console.log(user, pass);
  res.status(200).json({ message: "OK desde PUT" });
});

app.listen(port, () => {
  console.log("Servidor iniciado");
});
