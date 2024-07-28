import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import appRouter from "../routes/indexRoute";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use('/',appRouter)
export default app
