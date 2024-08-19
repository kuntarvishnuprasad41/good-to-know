const task = require("../db/tasks.json").tasks;
const fs = require("fs");

const insertData = (data) => {
  //   tasks.push(data);

  let newTask = [...task, data];

  fs.writeFileSync("./db/tasks.json", JSON.stringify({ tasks: newTask }));
};

module.exports = { insertData };
