const products=require("../models/supplement")
exports.getsupplements=async(req,res)=>{
    try {
        const supplements=await products.find()
        res.status(200).send({
            Msg:"this is the list of supplements in the storage",
            supplements
        })
    } catch (error) {
        res.status(500).send({
            Msg:"falied to get the list",
            error
        })
    }
}