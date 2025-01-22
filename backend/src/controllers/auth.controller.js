import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js";
import { generateToken } from "../utils/token.js";
import { ApiRes } from "../utils/ApiRes.js";
import bcrypt from "bcryptjs";
import cloudinary from "../utils/cloudinary.js";
import { Client, Storage } from 'appwrite';
import fs from 'fs';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite server endpoint
  .setProject('678c1c0d0039d94075ca'); // Replace with your Appwrite project ID

  const storage = new Storage(client);
const signup = asyncHandler(
    async (req, res) => {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            throw new ApiError('please provide all fields', 401);
        }
        if (password.length < 6) {
            throw new ApiError('password must be atleast 6 characters', 400);
        }
//         const existedUser = User.findOne({
//             $or: [{email}]
//         }
            
// )
//         console.log(existedUser);
//         if (!existedUser) {
//             throw new ApiError('email already exists', 409);
//         }

        const newUser = await User.create({
        fullName, email, password
        })
        if(newUser){
          const kk= generateToken(newUser._id,res);
          console.log(kk);
          await newUser.save();
        }
        const createdUser=await User.findById(newUser._id).select('-password');
        if(!createdUser){
            throw new ApiError('user not found',404);
        }
        // return res.status(201).json(new ApiRes(
        //     'success',
        //      'user created successfully',
        //   createdUser
        // ))
        return res.status(200).json(createdUser);

    }

)
///singup completed



const login = asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        const user =await User.findOne({email})
        if(!user){
            throw new ApiError('user not found',404);
        }
        const isPassCorrect=await bcrypt.compare(password,user.password);
        if(!isPassCorrect){
            throw new ApiError('invalid password',401);}

        const token = generateToken(user._id,res);
        const createdUser=await User.findById(user._id).select('-password');
        if(!createdUser){
            throw new ApiError('user not found',404);

        }
        // return res.status(200).json(new ApiRes(
        //     'success',
        //      'user logged in successfully',
        //   createdUser
        // ))
        return res.status(200).json(createdUser);
    }
)

const logout = (req, res) => {
    res.cookie("jwt","",{maxAge:0});

    return res.status(200).json(new ApiRes(
        'success',
         'user logged out successfully',
      null
    ))};


    


    export const updateProfile = async (req, res) => {
        try {
          const { profilePic } = req.body;
          const userId = req.user._id;
        
          if (!profilePic) {
            return res.status(400).json({ message: "Profile pic is required" });
          }
          
        
          const uploadResponse = await cloudinary.uploader?.upload(profilePic);
          console.log(uploadResponse);
          const updatedUser = await User.findByIdAndUpdate(
            userId,
            { profilePic: "uu.jpg" },
            { new: true }
          );
      
          res.status(200).json(updatedUser);
        } catch (error) {
          console.log("error in update profile:", error);
          res.status(500).json({ message: "Internal server error" });
        }
      };


const checkauth=(req,res)=>{
    try{
      res.status(200).json(req.user)
        // res.status(200).json(new ApiRes(
        //     'success',
        //      'user authenticated',
        //   req.user
        // ))


    } catch(error){
        throw new ApiError('user not authenticated',401);
    }
}


export { signup, login, logout ,checkauth };

