//fs functions

const fs = require("fs");

fs.readFile("test.txt", "utf-8", function (err, data) {
  console.log(data);
});

for (let i = 0; i < 1000; i++) {
  fs.writeFile("test.txt", i.toString() + "\n", function (err) {});
}

console.log("Hey there");
