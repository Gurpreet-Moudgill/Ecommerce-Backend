const asyncHandler = require("express-async-handler");
const Login = require("../models/loginModels");
const mongodb = require("mongodb");

const getDetails = asyncHandler(async (req, res) => {
  const details = await Login.find();
  res.status(200).json({ details });
});

const createDetail = asyncHandler(async (req, res) => {
  const { Fname, Lname, email, password } = req.body;
  if (!Fname || !Lname || !email || !password) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const detail = await Login.create({
    Fname,
    Lname,
    email,
    password,
  });
  res.status(200).json({ detail });
});

const updateDetail = asyncHandler(async (req, res) => {
  const updateDetails = await Login.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ updateDetails });
});

const getDetail = asyncHandler(async (req, res) => {
  const detail = await Login.findById(req.params.id);
  if (!detail) {
    res.status(404);
    throw new Error("Not Found");
  }
  res.status(200).json({ detail });
});

const deleteDetail = asyncHandler(async (req, res) => {
  const detail = await Login.findById(req.params.id);
  if (!detail) {
    res.status(404);
    throw new Error("Not Found");
  }
  await Product.findByIdAndDelete(req.params.id);
});

const findDetail = asyncHandler(async (req, res) => {
  // const { email, password } = req.body;
  const detail = await Login.findOne({
    $and: [{ email: req.query.email }, { password: req.query.password }],
  });
  // res.status(200).json({ detail });
  if (detail) {
    res.json({token:detail.id ,success: true, message: "Login successful!", detail });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid username or password!" });
  }
});

module.exports = {
  createDetail,
  getDetail,
  getDetails,
  deleteDetail,
  updateDetail,
  findDetail,
};
