import express, { urlencoded, json } from "express";
import { router } from "./routes/index.js";
import { config } from "dotenv";
import cors from "cors";

config();

import "./config/sequelize.js";

export const server = express();

server.use(urlencoded({ extended: true, limit: "50mb" }));
server.use(json({ limit: "50mb" }));
server.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);
server.use("/", router);
