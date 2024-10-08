const express = require("express");
const app = express();

const toDoRoute = require("./todo/todo");

const PORT = 3000;
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello world" });
});

app.use("/todo", toDoRoute);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on port ${PORT}`);
  } else {
    console.log({ message: "Something went wrong", error });
  }
});
