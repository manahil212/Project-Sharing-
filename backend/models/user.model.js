// Database ka structure (Schema) banta hai.k data kis format mai banaiga
// yaha user ka data save hoga
// yaha signup wala hai
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,//text hoga
        required:true//name  required ni hoa tu save ni hoga
    },
    email:{
        type:String,
        required:true,
        unique:true//koi dusra user merai walai email sai signup ni kerskata
    },
    password:{
        type:String,
        required:true
    }
});

const User = mongoose.model("User", userSchema);

export default User;