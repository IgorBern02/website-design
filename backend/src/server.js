require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/products.routes");
app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("🔥 API rodando em http://localhost:3000");
});
