import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { router } from "./routes";

// initialize our express app
const app: Express = express();
const PORT = 8001;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port numner ${PORT}`);
});
