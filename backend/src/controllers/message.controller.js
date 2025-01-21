
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { Message } from "../models/message.model.js";
import { getReceivers } from "../lib/socket.js";
 

const getUsersForSidebar= asyncHandler(async (req, res) => {
   
        
    const loggedInUserId = req.user.id;
    
    const filterUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');
    console.log(filterUsers)
    res.status(200).json(filterUsers)
 } )


const getMessages= async (req, res) => {
    try {
        const {id:userTOChatId} = req.params;
        const myid=req.user.id;
        const messages = await Message.find({
            $or: [
                { senderId: myid, receiverId: userTOChatId },
                { senderId: userTOChatId, receiverId: myid}
            ]
      
        })
         
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const sendMessage= async (req, res) => {
    try {
        const { text,image } = req.body;
        console.log(text)
        const senderId = req.user.id;
        const {id:receiverId} = req.params;

        let imageUrl;
        if (image) {
            const uploadResult = await cloudinary.uploader.upload(image)
            imageUrl=uploadResponse.secure_url
        }
        const newMessage = new Message({ senderId, receiverId,text:text,image:imageUrl });
        const receiverSocketId=getReceivers(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit('newMessage',newMessage);
        }
        await newMessage.save();
        res.status(200).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




export {getUsersForSidebar,getMessages,sendMessage}