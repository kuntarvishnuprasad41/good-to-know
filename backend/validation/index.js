const express = require("express");
const app = express();
const port = 3000;

const { z } = require("zod");
const schema = require("./validators/task-validator");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "hello world" });
});

app.post("/", (req, res) => {
  const response = schema.safeParse(req.body);
  res.status(200).send(response);
});

app.listen(port, (error, req, res) => {
  if (!error) {
    console.log(`server is running on port ${port}`);
  }
});
