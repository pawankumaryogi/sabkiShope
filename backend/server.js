import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data/prodcuts.js";
import colors from "colors";

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("hello this is pawan");
});
app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.rainbow
      .bold
  )
);
