import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import path from "path";
import "express-async-errors";
import { error } from "./middleware/error/error";
import errorCapture from "./middleware/error/errorCapture";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import mongoose from "mongoose";
dotenv.config();
const app = express();

// database
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("connect db"))
//   .catch((err) => console.log(err.message));
// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
// routes
// ***********
// frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middlewares for errors
app.use(errorCapture);

const server = createServer(app);
export default server;
