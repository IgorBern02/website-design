require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 TODAS AS ROTAS DENTRO DE /api
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/favorites", require("./routes/favorites"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/auth", require("./routes/auth"));

app.listen(5000, () => {
  console.log("🔥 API rodando em http://localhost:5000/api");
});
