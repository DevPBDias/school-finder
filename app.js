import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDatabase from "./src/data/connectionMongoDB.js";
import schoolRoute from "./src/routes/school.route.js";

const app= express();

connectDatabase();
app.use(cors());
app.use(express.json());
app.use("/school", schoolRoute);

export default app;