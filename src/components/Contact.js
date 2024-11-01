import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { toast } from 'react-toastify'

function Contact() {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [message,setmessage]=useState("")
    const sendemail =async (e)=>{
e.preventDefault()
try {
    const res = await axios.post ("https://muscle-net.onrender.com/mail",{name,email,message})
    if (res.status==200) {
        toast.success("email received")
    }
    else{
        toast.error("failed to send email")
    }
} catch (error) {
    console.log(error);
    
}
    }
  return (
    <div>
        <Header/>
        <section style={{height:"100vh"}} className="position-relative py-36 bg-black overflow-hidden">
  <img
    className="position-absolute start-0 bottom-0"
    src="https://shuffle.dev/gradia-assets/elements/contact/radial2.svg"
    alt=""
  />
  <div className="position-relative container" style={{ zIndex: 50 }}>
    <div className="row g-16">
      <div style={{paddingTop:"5%"}} className="col-12 col-md-6">
        <div className="mw-md-sm">
          <h2 className="fs-10 fw-semibold text-white mb-7">Contact Me</h2>
        
          <div className="mb-10">
           
            <p className="text-white mb-0"><i class="fa-solid fa-envelope"></i> saidbouchniba8@gmail.com</p>
            <p className="text-white mb-0"><i class="fa-solid fa-phone"></i> +216 90 736 727</p>
          </div>
          <div>
            <a   href="https://www.facebook.com/said.bouchniba.9?locale=fr_FR">
            <h3 className="fs-16 fw-medium text-white ">           <i  style={{fontSize:"2rem",color:"white",marginTop:"20px"}} class="fa-brands fa-facebook"></i>
            </h3>
            </a>
            <a  href="https://www.instagram.com/said2k03/">
            <p className="text-secondary-light mb-0">           <i style={{fontSize:"2rem",color:"white",marginTop:"20px"}} class="fa-brands fa-instagram"></i>
            </p></a>
            <a   href="https://www.tiktok.com/@saidbouchniba?lang=fr">
            <p className="text-secondary-light mb-0">           <i  style={{fontSize:"2rem",color:"white",marginTop:"20px"}} class="fa-brands fa-tiktok"></i>
            </p>
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="mw-md-md ms-auto">
          <div className="p-8 bg-secondary rounded-3">
            <form style={{margin:"5%",padding:"2%"}} className="mw-md-xl mx-auto">
              <div className="form-group mb-5">
                <input onChange={(e)=>setname(e.target.value)}
                  className="bg-transparent text-dark px-5 py-4 w-100 border border-dark-light"
                  id="contactsInput5-1"
                  style={{ borderRadius: 3 }}
                  type="text"
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group mb-5">
                <input onChange={(e)=>setemail(e.target.value)}
                  className="bg-transparent text-dark px-5 py-4 w-100 border border-dark-light"
                  id="contactsInput5-2"
                  style={{ borderRadius: 3 }}
                  type="email"
                  placeholder="Your email address"
                />
              </div>
              <div className="form-group mb-5">
                <textarea onChange={(e)=>setmessage(e.target.value)}
                  className="form-control text-dark bg-transparent"
                  id="contactsInput5-3"
                  rows={3}
                  placeholder="Write message"
                  style={{ height: 155 }}
                  defaultValue={""}
                />
              </div>
              <button onClick={sendemail}
                className="btn btn-light-light fs-20 px-11 py-2 text-uppercase mb-6 border-0"
                type="submit"
                style={{
                    width:"60%",
                    marginLeft:"20%",
                  letterSpacing: 1,
                  background:
                    "linear-gradient(98.24deg, #6CD5F7 0%, #FEE2CE 35.94%, #B0A9DF 69.27%, #5B6AF0 100%)"
                }}
              >
                Send message
              </button>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<style>
                {` 
                    ::placeholder { 
                        color:#D2B48C ; 
                    }`
                }
            </style>
    </div>
  )
}

export default Contact