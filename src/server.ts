import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3333;

app.get("/", (request: Request, response: Response) => response.json("hello"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
