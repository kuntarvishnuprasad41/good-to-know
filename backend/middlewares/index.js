const express = require("express");
const app = express();
const validateBody = require("./validatiors/validateBody");

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Hello World" });
});

app.post("/", validateBody, (req, res) => {
  return res.status(200).send({ message: "Success", data: req.body });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on port ${PORT}`);
  }
});
