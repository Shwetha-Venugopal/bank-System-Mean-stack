const mongoose = require('mongoose')
const bankRouter =require('./service/bankService')
const cors=require('cors')
const express=require('express')
const app=express()

app.use(express.json())
app.use(cors({origin:'http://localhost:4200'}))
app.use('/api',bankRouter)

mongoose.connect("mongodb://localhost:27017/Bank", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to MongoDB!");
  }).catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); 
  });

app.listen(9000,()=>{
    console.log('server started')
})