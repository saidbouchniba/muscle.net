import React from 'react'

function Footer() {
  return (
    <div>
        <section className="py-12 pt-lg-24" style={{background:"#8B0000",height:"100px", borderRadius:"1rem"}}>
  <div className="container position-relative">
    <div className="d-none d-lg-block position-absolute top-50 start-50 translate-middle">
      
    </div>
    <div className="row justify-content-between">
      <div className="col-auto">
        <a className="d-inline-block" href="#">
          <img
            src="/Logo.png"
            alt=""
            style={{width:"100px"}}
          />
        </a>
      </div>
      <div className="col-auto">
        <div className="d-flex">
          <a
            className="btn me-3 btn-outline-secondary-dark p-1 border-0 rounded"
            href="https://www.facebook.com/said.bouchniba.9?locale=fr_FR"
          >
           <i  style={{fontSize:"2rem",color:"white",marginTop:"20px"}} class="fa-brands fa-facebook"></i>
          </a>
          <a
            className="btn me-3 btn-outline-secondary-dark p-1 border-0 rounded"
            href="https://www.tiktok.com/@saidbouchniba?lang=fr"
          >
           <i  style={{fontSize:"2rem",color:"white",marginTop:"20px"}} class="fa-brands fa-tiktok"></i>
          </a>
          <a
            className="btn btn-outline-secondary-dark p-1 border-0 rounded"
            href="https://www.instagram.com/said2k03/"
          >
           <i style={{fontSize:"2rem",color:"white",marginTop:"20px"}} class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="d-lg-none mt-12">
        <div className="d-flex flex-wrap align-items-center justify-content-center mb-n6">
          <a className="btn p-0 me-6 mb-6 btn-link text-white" href="#">
            Platform
          </a>
          <a className="btn p-0 me-6 mb-6 btn-link text-white" href="#">
            Features
          </a>
          <a className="btn p-0 me-6 mb-6 btn-link text-white" href="#">
            How it works
          </a>
          <a className="btn p-0 me-6 mb-6 btn-link text-white" href="#">
            Resources
          </a>
          <a className="btn p-0 mb-6 btn-link text-white" href="#">
            FAQs
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-12 pt-12 border-top border-secondary-light border-opacity-10">
    <div className="container">
      <p className="text-white small text-center mb-0">
         © Copyright 2024 All rights reserved by Said Bouchniba.
      </p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Footer