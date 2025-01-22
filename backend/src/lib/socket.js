import {Server} from "socket.io";
import http,{ createServer } from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173']
    }
})
export function getReceivers(userId){
     
    return userSocketMap[userId];
}
const userSocketMap={};


io.on('connection', (socket) => {
    console.log('a user connected',socket.id);
    console.log('user connected',socket.handshake.query.userId);
    const userId = socket.handshake.query.userId;

    console.log('userId',userId);
    if(userId){
        userSocketMap[userId]=socket.id;
       

    }
    io.emit('welcome',Object.keys(userSocketMap));
})

io.on('disconnect', () => {
    console.log('user disconnected',socket.id);
    delete userSocketMap[userId.id];
    io.emit('welcome',Object.keys(userSocketMap));
})

export {io,server,app};