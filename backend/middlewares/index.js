const express = require("express");
const app = express();
const validateBody = require("./validatiors/validateBody");
const postOp = require("./controllers/postOp");
const helloWorld = require("./controllers/helloWorld");
const authCheck = require("./validatiors/authCheck");

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//global middlewares
app.use(authCheck);

app.get("/", helloWorld);

// app.post("/", validateBody, (req, res) => {
//   return res.status(200).send({ message: "Success", data: req.body });
// });

//this ^ can also be written as
app.post("/", validateBody, postOp);

//Global Catches
app.use((err, req, res, next) => {
  res.status(500).send({ message: "something went wrong" });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on port ${PORT}`);
  }
});
