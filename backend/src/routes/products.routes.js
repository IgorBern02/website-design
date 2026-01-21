const express = require("express");
const multer = require("multer");
const cloudinary = require("../cloudinary");
const Product = require("../models/Product");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// CREATE
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, price, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Imagem obrigatória" });
    }

    const uploadResult = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
      { folder: "loja-roupas" },
    );

    const product = await Product.create({
      name,
      price: Number(price),
      category: category.toLowerCase(),
      imageUrl: uploadResult.secure_url,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
