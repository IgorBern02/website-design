const express = require("express");
const auth = require("../middlewares/auth");
const Favorite = require("../models/Favorite");

const router = express.Router();

router.post("/:productId", auth, async (req, res) => {
  await Favorite.findOneAndUpdate(
    {
      user: req.userId,
      product: req.params.productId,
    },
    {
      user: req.userId,
      product: req.params.productId,
    },
    { upsert: true },
  );

  res.sendStatus(201);
});

router.get("/", auth, async (req, res) => {
  const favs = await Favorite.find({ user: req.userId }).populate("product");
  res.json(favs);
});

router.delete("/:productId", auth, async (req, res) => {
  await Favorite.findOneAndDelete({
    user: req.userId,
    product: req.params.productId,
  });

  res.sendStatus(204);
});

module.exports = router;
