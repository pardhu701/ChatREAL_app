import {Schema} from 'mongoose'
import mongoose from 'mongoose'

const messageSchema = new Schema({
    senderId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    ,receiverId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    ,text:{
        type: String,
        required: true
    },
    image:{
        type: String, 
    }

},{
    timestamps: true
})


export const Message= mongoose.model('Message', messageSchema)