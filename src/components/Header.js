import React from 'react'
import logo from '../assets/Logo.png'
function Header() {
  return (
    <section>
    <div className="py-8 px-9">
      <div className="row align-items-center">
        <div className="col-12 col-lg-auto mb-4 mb-lg-0 me-auto">
         <div style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
          <a href='/Home' style={{display:"flex",justifyContent:"start",alignItems:"center",textDecoration:"none",fontFamily:"unset"}}>
            <img style={{width:"200px"}} src={logo}/>
            </a>
         </div>
        </div>
        <div className="col-12 col-lg-auto">
         
          <a
            className="btn btn-sm me-3 bg-white text-primary d-inline-flex align-items-center small"
            href="/exercises"
          >
            <span className="d-inline-block text-primary me-2"style={{fontSize:"2rem"}}>
            <i class="fa-solid fa-dumbbell"></i>
            </span>
            <span>Exercices</span>
          </a>
          <a
            className="btn btn-sm text-primary d-inline-flex align-items-center small"
            href="/Diet"
          >
            <span className="d-inline-block me-2 text-primary-light"style={{fontSize:"2rem"}}>
            <i class="fa-solid fa-plate-wheat"></i>
            </span>
            <span>Diet Plans</span>
          </a>
          <a
            className="btn btn-sm text-primary d-inline-flex align-items-center small"
            href="/supplement"
          >
            <span className="d-inline-block me-2 text-primary-light"style={{fontSize:"2rem"}}>
            <i class="fa-solid fa-bottle-water"></i>
            </span>
            <span>Supplement</span>
          </a>
          <a
            className="btn btn-sm me-3 bg-white text-primary d-inline-flex align-items-center small"
            href="/calculator"
          >
            <span className="d-inline-block text-primary me-2 "style={{fontSize:"2rem"}} >
            <i class="fa-solid fa-calculator"></i>
            </span>
            <span>Calorie Calculator</span>
          </a>
          <a
            className="btn btn-sm me-3 bg-white text-primary d-inline-flex align-items-center small"
            href="/Contact"
          >
            <span className="d-inline-block text-primary me-2 "style={{fontSize:"2rem"}} >
            <i class="fa-solid fa-user"></i>
            </span>
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Header