const fs = require("fs");
const path = require("path");

const tasks = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../db/tasks.json"), "utf-8")
);

const filterTasks = (id) => {
  console.log("id", id);

  const filteredTasks = tasks.tasks.filter((task) => task.id != id);
  console.log("filterTasks", filteredTasks);
  return {
    tasksToFilter: filteredTasks,
  };
};

module.exports = filterTasks;
