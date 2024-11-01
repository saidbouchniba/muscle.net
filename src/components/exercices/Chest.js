import React from 'react'
import Header from '../Header'

function Chest() {
  return (
    <div style={{}}>
    <Header/>
    <div className="taxonomy-featured" style={{background:"#A9A9A9",height:"100vh",borderRadius:"2rem"}}>
<h2 style={{fontFamily:"fantasy",textAlign:"center",color:"#005599",paddingTop:"100px"}}>Best Chest Exercises</h2>
<div className="featured-taxonomy-content" >
<div className="grid-x grid-margin-x grid-margin-y" style={{display:"flex",justifyContent:"center",gap:"20px",alignItems:"center",marginTop:"100px"}}>
  <div className="cell small-12 bp600-4">
    <a href="">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/adema3KOErM?si=k2BCVxeQAGzEGYbC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </a>
    <a href="https://youtu.be/adema3KOErM?si=OLYwJUvJhtjeaysP" style={{textAlign:'center',textDecoration:"none"}}>
      <h5>Bench Press</h5>
    </a>
    <p />
  
  </div>
  <div className="cell small-12 bp600-4">
    <a href="">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/TAfR_IAv7JQ?si=P1_zqQbNuK7DHem7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    </a>
    <a href="https://youtu.be/TAfR_IAv7JQ?si=GBprTL9nH0fwXsPG" style={{textAlign:'center',textDecoration:"none"}}>
      <h5>Dumbbell Incline</h5>
    </a>
    <p />
    
  </div>
  <div className="cell small-12 bp600-4">
    <a href="">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/npypaJpkbUs?si=YtzaLebNQaVStKPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    </a>
    <a href="https://youtu.be/npypaJpkbUs?si=RxMtcrRoN-FpVj-4" style={{textAlign:'center',textDecoration:"none"}}>
      <h5 >Dips</h5>
    </a>
    <p />
   
  </div>
</div>
</div>
</div>
    

</div>
  )
}

export default Chest