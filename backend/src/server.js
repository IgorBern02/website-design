const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// "Banco de dados" em memória
let products = [
  {
    id: 1,
    name: "Camiseta Oversized Preta",
    price: 79.9,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 2,
    name: "Camiseta Branca Básica",
    price: 59.9,
    imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
  },
];

// Rota raiz
app.get("/", (req, res) => {
  res.send("API da Loja de Roupas 🚀");
});

// Listar produtos
app.get("/products", (req, res) => {
  res.json(products);
});

// Buscar produto por ID
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  res.json(product);
});

// Criar produto
app.post("/products", (req, res) => {
  const { name, price, imageUrl } = req.body;

  if (!name || !price || !imageUrl) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    imageUrl,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.listen(3000, () => {
  console.log("🔥 API rodando em http://localhost:3000");
});
