// Yahan saari logic likhte hain
// Isme
// Signup
// Login
// ki coding hogi.
import bcrypt from "bcryptjs"
import User from "../models/user.model.js";

// Signup

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt);
    // Create new user
    const newUser = await User.create({
      fullName,
      email,
      password:hashedPassword,
    });

    res.status(201).json({
      message: "Signup successful",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //database mai email dhondo
    const user = await User.findOne({ email });
    //agar user ni milai tu user not found daidena
    if(!user){
      return res.status(404).json({message:"User not found"})
    }
//bcrypt.compare plain password ko data base walai password sai match keraiga agar sahi hoa tu true
   const isPasswordCorrect = await bcrypt.compare(password, user.password)

  //  agar password galat ho tu error bhhej dai
if(!isPasswordCorrect) {
  return res.status(401).json({message:"invalid password"})
}
 
// agar yahab tk code agya is ka mtlb password sahi hai
    res.status(200).json({
      message: "Login successful",
      user:{email : user.email,
        password : user.password
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};