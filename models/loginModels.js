const mongoose = require('mongoose')

const Schema = mongoose.Schema({
  Fname: {
    type: String,
    required: [true, "Name is required"],
  },
  Lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Login = mongoose.model("Login", Schema);

module.exports = Login;