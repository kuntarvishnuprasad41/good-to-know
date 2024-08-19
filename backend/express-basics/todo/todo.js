const toDoRoute = require("express").Router();

toDoRoute.get("/", (req, res) => {
  res.status(200).send("Hello World todo");
});

module.exports = toDoRoute;
