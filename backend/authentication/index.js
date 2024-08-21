const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  { id: 1, name: "Vishnu", email: "1@example.com", password: "password123" },
  { id: 2, name: "Prasad", email: "2@example.com", password: "password123" },
];

function userExists(username, password) {
  return users.find(
    (user) => user.email === username && user.password === password
  );
}

app.get("/", (req, res) => {
  const token = req.headers.authorization;
  let username;

  try {
    const decoded = jwt.verify(token, "WellHelloThere");
    username = decoded.username;
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.send({ message: "Hello World!", user: username });
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  if (!userExists(username, password)) {
    return res.status(403).json({
      message: "Invalid username or password",
    });
  } else {
    const token = jwt.sign({ username }, "WellHelloThere", {
      expiresIn: "1h",
    });
    res.json({ token });
  }
});

app.listen(8000, (error) => {
  if (!error) {
    console.log("Server is running on port 8000");
  } else {
    console.log("Error starting server");
  }
});
