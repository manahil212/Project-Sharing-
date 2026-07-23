import express from "express";
import { submitProject } from "../controllers/project.controller.js";
import project from "../models/project.model.js"


const router = express.Router();
//get route yaha ayega

router.get("/", async (req, res) => {
  try {
    const projects = await project.find();

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});
// 500 internal server error
// 200 (ok) request successfull hai

// Submit Project API
router.post("/submit", submitProject);

export default router;