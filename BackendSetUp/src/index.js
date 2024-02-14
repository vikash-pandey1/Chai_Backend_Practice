// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import { app } from './app.js';
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})
app.get('/ram',(req,res)=>{
    res.send("working...")
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8081, () => {
            console.log(`server listening on ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(
            'mongo db connection failed:!!!', err
        );
    })



    
// another way to connect db

/*
import express from "express"
const app = express()

(async()=>{
    try{
        await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
        app.on("errror",(error)=>{
            console.log("error:",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port
            ${process.env.PORT}`);
        })
    }catch(err){
        console.error("error:",err);
        throw err;
    }
})()
*/