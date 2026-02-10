const express = require("express");
const auth = require("../middlewares/auth");
const CartItem = require("../models/CartItem");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { productId, quantity } = req.body;

  await CartItem.create({
    user: req.userId,
    product: productId,
    quantity,
  });

  res.sendStatus(201);
});

router.get("/", auth, async (req, res) => {
  const cart = await CartItem.find({ user: req.userId }).populate("product");
  res.json(cart);
});

module.exports = router;
