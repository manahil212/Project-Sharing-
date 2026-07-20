// require("dotenv").config()
import  dotenv  from "dotenv";
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/project.routes.js";

dotenv.config();//dotenv configure kare takai .env file read hoskai
const app = express();

connectDB()//database connect karai

app.use(cors());

app.use(express.json());

app.use("/api/auth",authRoutes);

app.use("/api/projects",projectRoutes);

app.listen(5000,()=>{
    console.log("Server Running");
});
