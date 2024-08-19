const fs = require("fs");
const filterTasks = require("../utils/filter");
const path = require("path");
const deleteTask = (id) => {
  const { tasksToFilter } = filterTasks(id);

  fs.writeFileSync(
    path.join(__dirname, "../db/tasks.json"),
    JSON.stringify({ tasks: tasksToFilter })
  );
};

module.exports = deleteTask;
