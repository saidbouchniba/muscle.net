import React from 'react'
import Header from '../Header'

function Back() {
  return (
    <div style={{}}>
    <Header/>
    <div className="taxonomy-featured" style={{background:"#A9A9A9",height:"100vh",borderRadius:"2rem"}}>
<h2 style={{fontFamily:"fantasy",textAlign:"center",color:"#005599",paddingTop:"100px"}}>Best Back Exercises</h2>
<div className="featured-taxonomy-content" >
<div className="grid-x grid-margin-x grid-margin-y" style={{display:"flex",justifyContent:"center",gap:"20px",alignItems:"center",marginTop:"100px"}}>
  <div className="cell small-12 bp600-4">
    <a href="">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/GoUQI6JnyxE?si=PCohEkTz6xDVATOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </a>
    <a href="https://youtu.be/GoUQI6JnyxE?si=y3iSWMu7lBOJPH0p" style={{textAlign:'center',textDecoration:"none"}}>
      <h5>Lat Pulldown</h5>
    </a>
    <p />
  
  </div>
  <div className="cell small-12 bp600-4">
    <a href="">

    <iframe width="400" height="300" src="https://www.youtube.com/embed/CCSmFYPCTmo?si=Q3RqZ9kZhlQyLQLe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </a>
    <a href="https://youtu.be/CCSmFYPCTmo?si=BRqGtNofiM6DHhj6" style={{textAlign:'center',textDecoration:"none"}}>
      <h5>Row</h5>
    </a>
    <p />
    
  </div>
  <div className="cell small-12 bp600-4">
    <a href="">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/a6rTo9rgZh4?si=oe44D-K5h9dJRHSz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </a>
    <a href="https://youtu.be/a6rTo9rgZh4?si=hChvEfEhDKOv3fr9" style={{textAlign:'center',textDecoration:"none"}}>
      <h5 > Dumbbell One Arm Row</h5>
    </a>
    <p />
   
  </div>
</div>
</div>
</div>
    

</div>
  )
}

export default Back