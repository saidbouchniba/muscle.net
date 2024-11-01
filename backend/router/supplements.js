const express=require("express")
const { getsupplements } = require("../controller/supplementcontroller")
const { contactme } = require("../controller/Email")
const router=express.Router()
router.get("/all",getsupplements)
router.post("/mail",contactme)
module.exports=router