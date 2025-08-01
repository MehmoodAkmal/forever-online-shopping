import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnection } from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import prepareV1Routes from './apiV1Version/v1/index.js';
const app = express();
dotenv.config();
dbConnection();
connectCloudinary();

const port = process.env.PORT || 8000

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5174', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
}));


prepareV1Routes(app);

app.get('/' , async(req , res)=>{
    res.send('Welcome to backend')
})

app.listen(port , ()=>console.log(`✅ App is listning on port ${port}`));