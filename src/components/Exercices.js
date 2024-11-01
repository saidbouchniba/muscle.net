import React from 'react'
import Header from './Header'

function Exercices() {
  return (
    <div>
        <Header/>
        <h2 class="taxonomy-heading" style={{textAlign:"center",fontFamily:"fantasy",color:"#005599",margin:"2% 0"}}>Excercises by Muscle Group</h2>
        <div className="grid-x grid-margin-x grid-margin-y small-up-2 bp600-up-3 medium-up-4" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",textAlign:"center"}}>
  
  <div className="cell">
    <a href="/exercises/abs">
      <img
        data-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abs_0.jpg"
        className=" lazyloaded"
        width={400}
        height={250}
        alt="Ab Exercises"
        title="Ab Exercises"
        src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abs_0.jpg"
      />
    </a>
    <a href="/exercises/abs">
      <div className="category-name">Abs</div>
    </a>
  </div>
  
  <div className="cell">
    <a href="/exercises/biceps">
      <img
        data-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/biceps_0.jpg"
        className=" lazyloaded"
        width={400}
        height={250}
        alt="Bicep Exercises"
        title="Bicep Exercises"
        src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/biceps_0.jpg"
      />
    </a>
    <a href="/exercises/biceps">
      <div className="category-name">Biceps</div>
    </a>
  </div>
 
  <div className="cell">
    <a href="/exercises/chest">
      <img
        data-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/chest_0.jpg"
        className=" lazyloaded"
        width={400}
        height={250}
        alt="Chest Exercises"
        title="Chest Exercises"
        src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/chest_0.jpg"
      />
    </a>
    <a href="/exercises/chest">
      <div className="category-name">Chest</div>
    </a>
  </div>
  <div className="cell">
  <a href="/exercises/back">
    <img
      data-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/upperback.jpg"
      className=" ls-is-cached lazyloaded"
      width={400}
      height={250}
      alt="Upper Back Exercises"
      title="Upper Back Exercises"
      src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/upperback.jpg"
    />
  </a>
  <a href="/exercises/middle-back">
    <div className="category-name">Back</div>
  </a>
</div>

  
  
 
  

  
  
  
 
 
  <div className="cell">
    <a href="/exercises/legs">
      <img
        data-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/quads_1.jpg"
        className=" lazyloaded"
        width={400}
        height={250}
        alt="Quad Exercises"
        title="Quad Exercises"
        src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/quads_1.jpg"
      />
    </a>
    <a href="/exercises/quads">
      <div className="category-name">Legs</div>
    </a>
  </div>
  <div className="cell">
    <a href="/exercises/shoulders">
      <img
        data-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/shoulders_0.jpg"
        className=" lazyloaded"
        width={400}
        height={250}
        alt="Shoulder Exercises"
        title="Shoulder Exercises"
        src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/shoulders_0.jpg"
      />
    </a>
    <a href="/exercises/shoulders">
      <div className="category-name">Shoulders</div>
    </a>
  </div>
 
  <div className="cell">
    <a href="/exercises/triceps">
      <img
        data-src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/triceps_0.jpg"
        className=" lazyloaded"
        width={400}
        height={250}
        alt="Triceps Exercises"
        title="Triceps Exercises"
        src="https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/triceps_0.jpg"
      />
    </a>
    <a href="/exercises/triceps">
      <div className="category-name">Triceps</div>
    </a>
  </div>
</div>

    </div>
  )
}

export default Exercices