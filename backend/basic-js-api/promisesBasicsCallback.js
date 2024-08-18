const fs = require("fs");

function readTestFile(cb) {
  fs.readFile("test.txt", "utf8", (err, data) => {
    cb(data);
  });
}

function onDone(data) {
  console.log("3");
  console.log(data);
}

console.log("1");

readTestFile(onDone);

console.log("2");
