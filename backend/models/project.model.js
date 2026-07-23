import mongoose from "mongoose";
// yaha project wala hai
// Project submit karne ke liye.
const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String
    }
});

const project = mongoose.model("Project", projectSchema);

export default project;

