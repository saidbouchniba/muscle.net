import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

function Supplement() {
const [products,setproducts]= useState([])
const getproducts= async () => {
    try {
      const res=await axios.get ("http://localhost:5000/all")  
      setproducts(res.data.supplements)
    } catch (error) {
    console.log(error);
        
    }
    
}
useEffect(()=>{
    getproducts()
},[])
console.log(products);








    return (
        <div>
            <Header />
            <section className="py-12 pt-md-16 pb-md-20 bg-dark" style={{borderRadius:"1.5rem"}}>
                <div className="container">
                    <div className="mw-lg mx-auto mw-lg-none" style={{paddingTop:"50px"}}>


                        <div className="row align-items-start">
                            {products.map(el=>
                            <div className="col-12 col-lg-4 px-lg-8 mb-12 mb-lg-0">
                                <a className="d-block" href="#" style={{ textDecoration: "none" }}>
                                    <img
                                        className="d-block mb-6 img-fluid"
                                        src={el.image}
                                        alt=""
                                        style={{ objectFit: "cover", width: "300px", borderRadius: "1.5rem", height: "300px" }}
                                    />
                                    <div className="mw-xs">
                                        <h6
                                            className="d-inline-block bg-primary mb-3 bg-gradient fw-bold"
                                            style={{
                                                color: "transparent",
                                                WebkitBackgroundClip: "text",
                                                backgroundClip: "text",
                                                textAlign: "center",
                                                marginTop: "10px"
                                            }}
                                        >
                                            {el.title}
                                        </h6>
                                        <p className="text-white">
                                                {el.description}
                                        </p>
                                    </div>
                                </a>
                            </div>
                           )}
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Supplement