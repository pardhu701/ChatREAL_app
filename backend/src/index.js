import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routers/auth.route.js'
import messageRoutes from './routers/message.route.js'
import connectDB from './db/index.db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {app,server,io} from './lib/socket.js'
import bodyParser from 'body-parser';


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
    origin: 'http://34.228.80.120:3001',  // replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // <-- allow cookies/auth headers
}));

// Handle preflight requests
app.options('*', cors({
    origin: 'http://34.228.80.120:3001',
    credentials: true
}));


//app routing middleware

app.use(bodyParser.json({ limit: '1mb' }));
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.get("/", (req, res) => {
  res.send("Hello Worldjjj!");
});

//connecting db
connectDB().then(() => {
    server.listen(process.env.PORT || 5001, () => {
        console.log('Server is running on port 5001')

    })
}).catch((err) => {
    console.log(err)
})
