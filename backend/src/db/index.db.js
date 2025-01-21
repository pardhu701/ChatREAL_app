import mongoose from 'mongoose';

const connectDB= async ()=>{
   // const url='mongodb+srv://pardhaGS:pardhu701@mongo.z0jgi.mongodb.net/Project'
    try {
       const connectionInstance=  await mongoose.connect(process.env.url);
        console.log("Database connected successfully ");
        console.log(connectionInstance.connection.host);
    } catch (error) {
        console.log("Database connection failed");
        process.exit(1);
    }
}

export default connectDB;