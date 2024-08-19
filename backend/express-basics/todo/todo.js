const toDoRoute = require("express").Router();

toDoRoute.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World todo" });
});

module.exports = toDoRoute;
