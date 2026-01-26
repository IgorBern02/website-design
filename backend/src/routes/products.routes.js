const express = require("express");
const multer = require("multer");
const cloudinary = require("../cloudinary");
const Product = require("../models/Product");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// CREATE
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, price, category, description, sizes } = req.body;

    if (!name || !price || !category || !description || !sizes) {
      return res.status(400).json({ message: "Campos obrigatórios faltando" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Imagem obrigatória" });
    }

    const uploadResult = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
      { folder: "aurastore" },
    );

    const parsedSizes = Array.isArray(sizes)
      ? sizes
      : sizes.split(",").map((s) => s.trim());

    const product = await Product.create({
      name,
      price: Number(price),
      category: category.toLowerCase(),
      imageUrl: uploadResult.secure_url,
      imagePublicId: uploadResult.public_id,
      description,
      sizes: parsedSizes,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar produto" });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const { category, page = 1, limit = 10 } = req.query;

    const query = category ? { category: category.toLowerCase() } : {};

    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar produtos" });
  }
});

// UPDATE
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    // Se enviou nova imagem
    if (req.file) {
      await cloudinary.uploader.destroy(product.imagePublicId);

      const uploadResult = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
        { folder: "loja-roupas" },
      );

      product.imageUrl = uploadResult.secure_url;
      product.imagePublicId = uploadResult.public_id;
    }

    // Atualiza campos corretamente
    product.name = req.body.name ?? product.name;
    product.price = req.body.price ? Number(req.body.price) : product.price;
    product.category = req.body.category
      ? req.body.category.toLowerCase()
      : product.category;
    product.description = req.body.description ?? product.description;

    // TRATAMENTO CORRETO DO SIZES
    if (req.body.sizes) {
      product.sizes = req.body.sizes.split(",").map((s) => s.trim());
    }

    await product.save();

    res.json(product);
  } catch (error) {
    console.error(error); // MUITO IMPORTANTE PRA VER O ERRO REAL
    res.status(500).json({ message: "Erro ao atualizar produto" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    await cloudinary.uploader.destroy(product.imagePublicId);

    await Product.findByIdAndDelete(req.params.id);

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar produto" });
  }
});

module.exports = router;
