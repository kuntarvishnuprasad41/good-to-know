const { default: mongoose } = require("mongoose");

const User = mongoose.model("Users", {
  username: String,
  password: String,
});

module.exports = User;
