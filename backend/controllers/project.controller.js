// Yahan saari logic likhte hain
// controller ka kam yeh hota hai  wh descision leta hai k request anai pr kia kerna hai
import Project from "../models/project.model.js";

export const submitProject = async (req, res) => {
  try {
    const { title, description, url } = req.body;

    const newProject = new Project({
      title,
      description,
      url,
    });

    await newProject.save();

    res.status(201).json({
      success: true,
      message: "Project submitted successfully",
      data: newProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};