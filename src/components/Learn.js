import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Learn() {
    return (
        <div>
            <Header />
            <div className="grid-x" style={{display:"flex",padding:"0 10%",marginBottom:"50px"}}>
                <div className="cell small-12 bp740-6 bp740-order-2 text-cell">
                    <h2 style={{fontFamily:"fantasy"}} className="block-heading">Exercise Video Library</h2>
                    <div style={{width:"70%",marginBottom:"30px"}} className="category-description">
                        Our comprehensive videos and instructions show you how to perform 
                        exercises using correct technique for the best results.
                    </div>
                   
                    <a href="/exercises">
                        <button className="btn btn-primary">View Exercises</button>
                    </a>
                </div>
                <div className="cell small-12 bp740-6 bp740-order-1">
                    <img style={{width:"70%",borderRadius:"1rem"}}
                        className=" lazyloaded"
                        data-src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/learn-more/exercises.jpg"
                        alt="Exercises"
                        src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/learn-more/exercises.jpg"
                    />
                </div>
            </div>
            <div className="grid-x" style={{display:"flex",padding:"0 10%",marginBottom:"50px",flexDirection:"row-reverse"}}>
                <div className="cell small-12 bp740-6 bp740-order-2 text-cell">
                    <h2 style={{fontFamily:"fantasy"}} className="block-heading">Tools & Calculators</h2>
                    <div style={{width:"70%",marginBottom:"30px"}} className="category-description">
                    We have created a suite of tools and calculators that help you plan nutrition, measure your strength, and track your progress.
                    </div>
                   
                    <a href="/exercises">
                        <button className="btn btn-primary">View Tools</button>
                    </a>
                </div>
                <div className="cell small-12 bp740-6 bp740-order-1">
                    <img style={{width:"70%",borderRadius:"1rem"}}
                        className=" lazyloaded"
                        data-src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/learn-more/tools.jpg"
                        alt="Exercises"
                        src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/learn-more/tools.jpg"
                    />
                </div>
            </div>
            <div className="grid-x" style={{display:"flex",padding:"0 10%",marginBottom:"50px",justifyContent:"revert"}}>
                <div className="cell small-12 bp740-6 bp740-order-2 text-cell">
                    <h2 style={{fontFamily:"fantasy"}} className="block-heading">Nutrition Guides & Healthy Recipes</h2>
                    <div style={{width:"70%",marginBottom:"30px"}} className="category-description">
                    We understand the importance of nutrition. Learn how to create your own diet plan and cook healthy delicious food that supports your goals.
                    </div>
                   
                    <a href="/exercises">
                        <button className="btn btn-primary">View Diet Plans</button>
                    </a>
                </div>
                <div className="cell small-12 bp740-6 bp740-order-1">
                    <img style={{width:"70%",borderRadius:"1rem"}}
                        className=" lazyloaded"
                        data-src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/learn-more/nutrition.jpg"
                        alt="Exercises"
                        src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/learn-more/nutrition.jpg"
                    />
                </div>
            </div>
            <div className="grid-x" style={{display:"flex",padding:"0 10%",marginBottom:"50px",flexDirection:"row-reverse"}}>
                <div className="cell small-12 bp740-6 bp740-order-2 text-cell">
                    <h2 style={{fontFamily:"fantasy"}} className="block-heading">Muscle & Strength</h2>
                    <div style={{width:"70%",marginBottom:"30px"}} className="category-description">
                    Save on thousands of supplements to support your fitness goals, nutritional and dietary goals
                    </div>
                   
                    <a href="/exercises">
                        <button className="btn btn-primary">View supplements</button>
                    </a>
                </div>
                <div className="cell small-12 bp740-6 bp740-order-1">
                    <img style={{width:"70%",borderRadius:"1rem"}}
                        className=" lazyloaded"
                        data-src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/learn-more/store.jpg"
                        alt="Exercises"
                        src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/learn-more/store.jpg"
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Learn