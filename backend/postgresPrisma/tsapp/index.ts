import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

const PORT = 8000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Success"); 
});

try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error("Failed to start server:", error);
}
