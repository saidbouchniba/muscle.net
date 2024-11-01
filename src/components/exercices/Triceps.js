import React from 'react'
import Header from '../Header'

function Triceps() {
  return (
    <div style={{}}>
    <Header/>
    <div className="taxonomy-featured" style={{background:"#A9A9A9",height:"100vh",borderRadius:"2rem"}}>
<h2 style={{fontFamily:"fantasy",textAlign:"center",color:"#005599",paddingTop:"100px"}}>Best Triceps Exercises</h2>
<div className="featured-taxonomy-content" >
<div className="grid-x grid-margin-x grid-margin-y" style={{display:"flex",justifyContent:"center",gap:"20px",alignItems:"center",marginTop:"100px"}}>
  <div className="cell small-12 bp600-4">
    <a href="">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/4Aejstcsxds?si=oyPW_1OVyMmTz1bD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </a>
    <a href="https://youtu.be/4Aejstcsxds?si=JtrXpo6-3Ap2eyaM" style={{textAlign:'center',textDecoration:"none"}}>
      <h5>Triceps Pushdown</h5>
    </a>
    <p />
  
  </div>
  <div className="cell small-12 bp600-4">
    <a href="">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/aut2Vhqf5-A?si=2d9avdRJUYIxxLTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    </a>
    <a href="https://youtu.be/aut2Vhqf5-A?si=tslNM1PO660dVs8X" style={{textAlign:'center',textDecoration:"none"}}>
      <h5>Standing Triceps Extension</h5>
    </a>
    <p />
    
  </div>
  
</div>
</div>
</div>
    

</div>
  )
}

export default Triceps