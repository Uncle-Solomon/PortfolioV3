import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const PORT: number = 8080;

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Portfolio Backend");
});

app.listen(PORT, () => {
  console.log(`Server has started at http://localhost:${PORT}`);
});
