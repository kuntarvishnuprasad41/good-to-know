const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "hello world" });
});

app.listen(port, (error, req, res) => {
  if (!error) {
    console.log(`server is running on port ${port}`);
  }
});
