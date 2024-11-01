import React from 'react'

function Home() {
    return(
        <section className="pt-12 pt-lg-24 pt-xl-32 position-relative overflow-hidden" >
  
  <img
    className="position-absolute top-0 start-0"
    src="/MUSCLE1.png"
    alt=""
    style={{height:"100vh",width:"100%"}}
  />
  <div className="position-relative container" style={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"end",paddingBottom:"85px"}}>
    
    <div className="mw-lg mw-md-2xl mx-auto mx-md-0 pb-md-24" >
     <a href='/Home' style={{textDecoration:"none",}}>
  <button className="button" data-text="Awesome">
  <span className="actual-text">&nbsp;Welcome&nbsp;to&nbsp;my&nbsp;website&nbsp;</span>   <span aria-hidden="true" className="hover-text">
   &nbsp;Welcome&nbsp;to&nbsp;my&nbsp;website&nbsp;
   </span>
 </button>
 </a>
    </div>
  </div>
  
</section>

    )
//   return (
//     <div style={{backgroundImage:"url(/MUSCLE1.png)" , width:"100%" , height:"85vh" , borderRadius:"10px"  , backgroundSize:"cover" , backgroundRepeat:"no-repeat",display:"flex" , justifyContent:"center" , alignItems:"end", paddingBottom:"100px"}}>
       
//        <button className="button" data-text="Awesome">
//   <span className="actual-text">&nbsp;Welcome&nbsp;to&nbsp;my&nbsp;website&nbsp;</span>
//   <span aria-hidden="true" className="hover-text">
//   &nbsp;Welcome&nbsp;to&nbsp;my&nbsp;website&nbsp;
//   </span>
// </button>

//     </div>
//   )
}

export default Home