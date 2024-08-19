const toDoRoute = require("express").Router();
const { getTasks } = require("../controllers/getTasks");
const { insertData } = require("../controllers/addTasks");
const updateTasks = require("../controllers/updateTasks");
const deleteTask = require("../controllers/daleteTask");

toDoRoute.get("/", (req, res) => {
  res.status(200).send({ message: "success", tasks: getTasks() });
});

toDoRoute.post("/", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).send({ message: "Task is required" });
  }
  const newTask = { id: Date.now(), ...task, status: "pending" };

  insertData(newTask);
  res.status(201).send({ message: "Task created", task: newTask });
});

toDoRoute.put("/", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).send({ message: "Task is required" });
  }

  updateTasks(task);
  res.status(200).send(task);
});

toDoRoute.delete("/", (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send({ message: "Id is required" });
  }
  deleteTask(id);
  res.status(200).send("success");
});

module.exports = toDoRoute;
