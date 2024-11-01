import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Landingpage() {
  return (
    <div>
        <Header/>
        <section className="overflow-hidden"style={{background:"linear-gradient(30deg,black,white)",borderRadius:"15px"}}>
  <div
    className="position-relative bg-secondary-dark"
    style={{ backgroundImage: 'url("")' }}
  >
    
    
    <div className="container">
      <div className="pt-28 pb-28 position-relative">
        <div className="row g-16">
          <div className="col-12 col-md-4">
            <div className="mw-md-lg">
             
              <h1
                className="mb-6  text-black"
                style={{ letterSpacing: "-1px",fontFamily:"fantasy",marginTop:"30%" }}
              >
              WELCOME TO MUSCLE NET
              </h1>
              <p className="mb-8 fs-15 fw-medium text-secondary-light"style={{fontSize:"1.2rem"}}>
              We provide the tools you need to build the body you want. All Free.
              </p>
              <div className="row g-4">
                <div className="col-12 col-md-auto">
                  <a
                    className="btn btn-lg btn-success w-100 text-success-light shadow"
                    href="/Learn"
                  >
                    Learn More
                  </a>
                </div>
                <div className="col-12 col-md-auto">
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="row justify-content-center">
              <div className="position-relative col-auto">
                <img
                  className="position-absolute top-0 start-0 mt-n12 ms-n12"
                  style={{ zIndex: 1 }}
                  src="https://shuffle.dev/flex-assets/elements/circle-orange.svg"
                  alt=""
                />
                <img
                  className="position-absolute bottom-0 end-0 me-n5 mb-n5"
                  style={{ zIndex: 1 }}
                  src="https://shuffle.dev/flex-assets/elements/dots-blue.svg"
                  alt=""
                />
                <img
                  className="position-relative img-fluid"
                  style={{borderRadius:"10px",width:"2000px",}}
                  src="https://st2.depositphotos.com/1031166/11663/i/450/depositphotos_116637092-Male-bodybuilder-fitness-model.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</section>
<Footer/>
    </div>
  )
}

export default Landingpage