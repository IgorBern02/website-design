const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    imagePublicId: { type: String, required: true },
    description: { type: String, required: true },
    sizes: {
      type: [String],
      required: true,
    },
    reviews: [
      {
        user: { type: String },
        rating: { type: Number, required: true },
        comment: { type: String },
      },
    ],
    averageRating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", ProductSchema);
