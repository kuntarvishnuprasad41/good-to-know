const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
const mongoose = require("mongoose");
const addUser = require("./controllers/auth/addUser");
const login = require("./controllers/auth/login");

mongoose.connect(
  "mongodb+srv://kuvi:DtvNHNs7bwHXiagR@cluster0.9fyix.mongodb.net/"
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Hello World" });
});

const PORT = 4000;

app.post("/signup", addUser);

app.post("/signin", login);

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is running on port " + PORT);
  } else {
    console.log("Something went wrong1");
  }
});
