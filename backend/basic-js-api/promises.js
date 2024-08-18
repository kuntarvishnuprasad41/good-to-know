const fs = require("fs");

function readTestFile() {
  return new Promise(function (resolve) {
    fs.readFile("test.txt", "utf8", function (err, data) {
      resolve(data);
    });
  });
}

const onDone = (data) => {
  console.log(data);
};

readTestFile()
  .then(onDone)
  .catch((err) => {
    console.log("err");
  });
