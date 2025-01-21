import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
       minlength: [6, "Password must be at least 6 characters long"],

    },
    profilePic: {
        type: String,
        default: "",
    }
}, { timestamps: true });

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordMatch = async function (password) {
    return await bcrypt.compareSync(password, this.password)
}


export const User=mongoose.model("User", userSchema);