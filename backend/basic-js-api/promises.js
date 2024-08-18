const { rejects } = require("assert");
const fs = require("fs");

function readTestFile() {
  return new Promise(function (resolve, reject) {
    fs.readFile("test.txt", "utf8", function (err, data) {
      //   resolve(data);
      if (err) {
        reject();
      }
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
