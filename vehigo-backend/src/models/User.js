const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_number: { type: String },
  address: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
