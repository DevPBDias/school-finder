import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDatabase from "./src/data/connectionMongoDB.js";

const app= express();

connectDatabase();
app.use(cors());
app.use(express.json());

export default app;