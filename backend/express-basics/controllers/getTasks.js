const taskData = require("../db/tasks.json").tasks;

function getTasks() {
  return taskData;
}

module.exports = { getTasks };
