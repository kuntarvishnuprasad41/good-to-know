import express, { Request, Response } from "express";
import cors from "cors";

import connection from "./db/connection";
import client from "./db/connection";
import responseCodes from "./enums/statuscodes";
import { getAllUsers } from "./db/getAllUsers";
import { addUser } from "./db/addUser";
import { User } from "./types/types";

const app = express();

const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  const result = await getAllUsers();

  res.status(responseCodes.OK).send(result);
});

app.post("/", async (req: Request, res: Response) => {
  console.log(req.body);

  const { username, email, password } = req.body;

  const newUser: User = { username, email, password };

  try {
    const result = await addUser(newUser);
    res.status(responseCodes.CREATED).send(result);
  } catch (error: any) {
    res.status(responseCodes.CONFLICT).send({ error: error.message });
  }
});

try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error("Failed to start server:", error);
}
