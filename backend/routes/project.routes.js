import express from "express";
import { submitProject } from "../controllers/project.controller.js";

const router = express.Router();

// Submit Project API
router.post("/submit", submitProject);

export default router;