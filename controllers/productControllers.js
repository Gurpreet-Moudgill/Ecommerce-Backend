const asyncHandler = require("express-async-handler");
const Product = require("../models/productModels");
const mongodb = require("mongodb");

const home  = asyncHandler(async(req, res)=>{
  res.json("Hello")
})

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
});

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description, category, imageUrl, stock } = req.body;
  if (!name || !price || !description || !category || !imageUrl || !stock) {
    res.status(400);
    throw new Error("Please fill all fields");
  }
  const product = await Product.create({
    name,
    price,
    description,
    category,
    imageUrl,
    stock,
  });
  res.status(200).json({ product });
});

const updateProduct = asyncHandler(async (req, res) => {
  const update = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ update });
});

const updateManyProduct = asyncHandler(async (req, res) => {
  const update = await Product.updateMany(
    { price: 1200 },
    { $set: { stock: "popularity" } }
  );
  res.status(200).json({ update });
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Not Found");
  }
  res.status(200).json({ product });
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Not Found");
  }
  await Product.findByIdAndDelete(req.params.id);
});

const getProductsfind = asyncHandler(async (req, res) => {
  const products = await Product.find().sort({
    price: -1,
  });
  res.status(200).json({ products });
});
const findprice = asyncHandler(async (req, res) => {
  const products = await Product.find().sort({ price: 1 });
  res.status(200).json({ products });
});

const finddata = asyncHandler(async (req, res) => {
  const products = await Product.find({
    $and: [
      { price: { $gt: req.query.price } },
      { price: { $lt: req.query.value2 } },
    ],
  }).sort({ price: 1 });
  res.status(200).json({ products });
});

const findnew = asyncHandler(async (req, res) => {
  const products = await Product.find({ stock: req.query.stock }).sort({
    price: 1,
  });
  res.status(200).json({ products });
});

module.exports = {
  findnew,
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getProductsfind,
  findprice,
  finddata,
  updateManyProduct,
  home
};
