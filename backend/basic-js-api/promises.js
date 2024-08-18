const fs = require("fs");

function readTestFile(cb) {
  fs.readFile("test.txt", "utf8", (err, data) => {
    cb(data);
  });
}

function onDone(data) {
  console.log(data);
}
