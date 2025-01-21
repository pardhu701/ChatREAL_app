import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routers/auth.route.js'
import messageRoutes from './routers/message.route.js'
import connectDB from './db/index.db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {app,server,io} from './lib/socket.js'


//setting up the envirememt

dotenv.config({
    path: './.env'
});

//to extract json data from the body
app.use(express.json());

//which allow to parser the cookie
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

//app routing middleware
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

//connecting db
connectDB().then(() => {
    server.listen(process.env.PORT || 5001, () => {
        console.log('Server is running on port 5001')

    })
}).catch((err) => {
    console.log(err)
})
