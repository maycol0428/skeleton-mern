import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import path from "path";
import "express-async-errors";
import { error } from "./middleware/error/error";
import errorCapture from "./middleware/error/errorCapture";

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middlewares for errors
app.use(errorCapture);

const server = createServer(app);
export default server;
