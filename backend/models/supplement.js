const mongoose=require("mongoose")

const supplementSchema=new mongoose.Schema({
title:String,

description:String,

Image:String,
},{
    timestamps:true
})
module.exports=mongoose.model("products",supplementSchema)