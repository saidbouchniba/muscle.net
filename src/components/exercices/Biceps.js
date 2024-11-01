import React from 'react'
import Header from '../Header'

function Biceps() {
  return (
    <div style={{}}>
    <Header/>
    <div className="taxonomy-featured" style={{background:"#A9A9A9",height:"100vh",borderRadius:"2rem"}}>
<h2 style={{fontFamily:"fantasy",textAlign:"center",color:"#005599",paddingTop:"100px"}}>Best Biceps Exercises</h2>
<div className="featured-taxonomy-content" >
<div className="grid-x grid-margin-x grid-margin-y" style={{display:"flex",justifyContent:"center",gap:"20px",alignItems:"center",marginTop:"100px"}}>
  <div className="cell small-12 bp600-4">
    <a href="">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/Bi88U34pdE4?si=jdE0t5AIGpS89_9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     
    </a>
    <a href="https://youtu.be/Bi88U34pdE4?si=26YtP9MdzmRP3HMr" style={{textAlign:'center',textDecoration:"none"}}>
      <h5>Dumbbell Incline Curl </h5>
    </a>
    <p />
  
  </div>
  <div className="cell small-12 bp600-4">
    <a href="">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/gOhkD6nfgzk?si=0RJcW31Kwd9b-MLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        
    </a>
    <a href="https://youtu.be/gOhkD6nfgzk?si=ulDfNEIyFW01-piJ" style={{textAlign:'center',textDecoration:"none"}}>
      <h5>Preacher Curl</h5>
    </a>
    <p />
    
  </div>
  <div className="cell small-12 bp600-4">
    <a href="">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/6TvoNTQ7_Hc?si=YoUujBN0N6QjEqtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </a>
    <a href="https://youtu.be/6TvoNTQ7_Hc?si=e0Ti-mkpzSWzmhaw" style={{textAlign:'center',textDecoration:"none"}}>
      <h5 >Forearms</h5>
    </a>
    <p />
   
  </div>
</div>
</div>
</div>
    

</div>
  )
}

export default Biceps