import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import todoRouter from "./routes/todos";

const app = express();

app.use(json());

app.use("/todos", todoRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message);
  res.status(500).json({ message: err.message });
});

app.listen(8070, () => {
  console.log("port is listening on", 8070);
});
