// is file mai mongodb connect hoga
import dns from "node:dns";
 import dotenv  from "dotenv";
import mongoose from "mongoose";
import chalk from "chalk"



dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log(chalk.green.bold("MongoDB Connected Successfully"));
  } catch (error) {
    console.log("Database Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;