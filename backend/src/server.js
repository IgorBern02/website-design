require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("./cloudinary");

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

// Banco em memória
let products = [];

console.log({
  cloud: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY,
  secretLength: process.env.CLOUDINARY_API_SECRET?.length,
});

// Criar produto com upload de imagem
app.post("/products", upload.single("image"), async (req, res) => {
  try {
    const { name, price, category } = req.body;

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!name || !price || !category) {
      return res.status(400).json({ message: "Campos obrigatórios faltando" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Imagem é obrigatória" });
    }

    const uploadResult = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
      { folder: "loja-roupas" },
    );

    console.log("UPLOAD RESULT:", uploadResult);

    const newProduct = {
      id: products.length + 1,
      name,
      price: Number(price),
      category: category.toLowerCase(),
      imageUrl: uploadResult.secure_url,
      imagePublicId: uploadResult.public_id,
    };

    products.push(newProduct);

    return res.status(201).json(newProduct);
  } catch (error) {
    console.error("CLOUDINARY ERROR:", error);
    return res.status(500).json({
      message: "Erro no upload",
      error: error.message,
    });
  }
});

// Listar produtos
app.get("/products", (req, res) => {
  res.json(products);
});

// Listar produtos com filtro por categoria
app.get("/products", (req, res) => {
  const { category } = req.query;

  if (category) {
    const filtered = products.filter(
      (p) => p.category === category.toLowerCase(),
    );
    return res.json(filtered);
  }

  res.json(products);
});

// Atualizar produto
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const productIndex = products.findIndex(
    (product) => product.id === Number(id),
  );
  if (productIndex === -1) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }
  products[productIndex] = {
    ...products[productIndex],
    name,
    price: Number(price),
  };
  res.json(products[productIndex]);
});

// Deletar produto
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const productIndex = products.findIndex((p) => p.id === Number(id));

    if (productIndex === -1) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    const product = products[productIndex];

    // Remove imagem do Cloudinary
    await cloudinary.uploader.destroy(product.imagePublicId);

    // Remove produto do "banco"
    products.splice(productIndex, 1);

    return res.json({ message: "Produto e imagem removidos com sucesso" });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao remover imagem",
      error: error.message,
    });
  }
});

// Remover apenas a imagem do produto
app.delete("/products/:id/image", async (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  await cloudinary.uploader.destroy(product.imagePublicId);

  product.imageUrl = null;
  product.imagePublicId = null;

  res.json({ message: "Imagem removida com sucesso" });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("🔥 API rodando em http://localhost:3000");
});
