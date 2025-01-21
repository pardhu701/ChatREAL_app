import jwt from 'jsonwebtoken'

export const generateToken = (userId,res) => {
   const token=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'7d'}) 
    const cook=res.cookie("jwt",token,{httpOnly:true,secure:process.env.NODE_ENV!=='development',maxAge:1000*60*60*24*7})
    
    return token;
}