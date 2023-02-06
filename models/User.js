const mongoose = require("mongoose");

const User = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phoneNumber: {
    type: number,
    require: true,
    unique: true,
  },
});

module.exports= mongoose.model("user", User)
