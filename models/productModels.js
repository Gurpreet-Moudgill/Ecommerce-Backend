const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  }
});

const Product = mongoose.model("Product", Schema);

module.exports = Product;
