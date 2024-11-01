import React from 'react'
import Header from '../Header'

function Abs() {
  return (
    <div style={{}}>
        <Header/>
        <div className="taxonomy-featured" style={{background:"#A9A9A9",height:"100vh",borderRadius:"2rem"}}>
  <h2 style={{fontFamily:"fantasy",textAlign:"center",color:"#005599",paddingTop:"100px"}}>Best Ab Exercises</h2>
  <div className="featured-taxonomy-content" >
    <div className="grid-x grid-margin-x grid-margin-y" style={{display:"flex",justifyContent:"center",gap:"20px",alignItems:"center",marginTop:"100px"}}>
      <div className="cell small-12 bp600-4">
        <a href="">
        
          <iframe width="400" height="300" src="https://www.youtube.com/embed/Q-HRZLba_20?si=kIIV1S-ftzgpIOef" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </a>
        <a href="https://youtu.be/Q-HRZLba_20?si=0H9awp7QzyrTCcZB" style={{textAlign:'center',textDecoration:"none"}}>
          <h5>Hanging Leg Raise</h5>
        </a>
        <p />
      
      </div>
      <div className="cell small-12 bp600-4">
        <a href="">
        <iframe width="400" height="300" src="https://www.youtube.com/embed/5A2dYeUM9lQ?si=rhj8M3-Hx0Wtk5ip" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
        </a>
        <a href="https://youtu.be/5A2dYeUM9lQ?si=xOZ3OW7Umh6OIJHM" style={{textAlign:'center',textDecoration:"none"}}>
          <h5>Plank</h5>
        </a>
        <p />
        
      </div>
      <div className="cell small-12 bp600-4">
        <a href="">
        <iframe width="400" height="300" src="https://www.youtube.com/embed/VwLXMuL_30Q?si=7d-e-Kol68-6x-5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </a>
        <a href="https://youtu.be/VwLXMuL_30Q?si=1YjIkoyj_a_DolL8" style={{textAlign:'center',textDecoration:"none"}}>
          <h5 >Obliques</h5>
        </a>
        <p />
       
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Abs