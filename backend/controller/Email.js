const nodemailer=require("nodemailer")
exports.contactme=async(req,res)=>{
    const {email,message,name}= req.body
    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"saidbouchniba8@gmail.com",
            pass:"eqdz acwe drvb jsqs"
        }
    
    })
    var mailOptions = {
        from: 'saidbouchniba8@gmail.com',
        to: "saidbouchniba8@gmail.com", 
        subject: "Email from clients" ,
        html:`
        <h6>name:${name}</h6>
        <h6>email:${email}</h6>
        <p>${message}</p>
        
        `
    
        
      };
     await transporter.sendMail(mailOptions,(error)=>{
        if (error) throw error 
        else {
            res.status(200).send({msg:"Email received"})
        }
    
      })
}