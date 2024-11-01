const express=require("express")
const cors=require("cors")
const connectDB = require("./config/config")
const router = require("./router/supplements")

const app=express()
const port=5000
connectDB()
app.use(express.json())
app.use(cors())
app.use("/",router)
app.listen(port,()=>{
  console.log("sever is runing")  
})



