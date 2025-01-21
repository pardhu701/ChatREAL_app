import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler.js';
import {User} from '../models/user.model.js';

const protectRoute = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt
 

    if(!token){
        return res.status(401).json({ message: "Unauthorized -  no no No Token Provided" });
    }
   const decoded =  jwt.verify(token,process.env.JWT_SECRET); 
 
   if(!decoded){
    return res.status(401).json({ message: "Unauthorized - Invalid Token" });
   }
   const user=await User.findById(decoded.userId).select(" -password");
  
   if(!user){
    return res.status(404).json({ message: "User not found" });
}
   req.user=user;
   next();
})

export  default protectRoute;