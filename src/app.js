import express, { urlencoded, json } from "express";
import { router } from "./routes/index.js";
import { config } from "dotenv";

config();

import "./config/sequelize.js";

export const server = express();

server.use(urlencoded({ extended: true, limit: "50mb" }));
server.use(json({ limit: "50mb" }));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use("/", router);
