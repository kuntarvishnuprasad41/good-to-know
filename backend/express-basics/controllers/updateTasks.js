const filterTasks = require("../utils/filter");
const fs = require("fs");

const updateTasks = (data) => {
  //   console.log(data);

  const { tasksToFilter } = filterTasks(data?.id);

  const updatedTasks = [...tasksToFilter, data];

  fs.writeFileSync("./db/tasks.json", JSON.stringify({ tasks: updatedTasks }));
};

module.exports = updateTasks;
