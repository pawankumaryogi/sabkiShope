const express = require("express");
const products = require("./data/prodcuts");
const app = express();

app.get("/", (req, res) => {
  res.send("hello this is pawan");
});
app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(5000, console.log("natureFreshServerisRunning"));
