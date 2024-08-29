import React from 'react'
import './Home.css'

export default function Home() {

  return (
    <div>
      <div id='Home'>
      <div className="hero">
            <div className="content">
              
            <h1 className='text-img rt'>Bringing Ideas To Our Reality</h1>
                <p className='text-imgs'>"Step into the Future: Where Virtual Reality Transforms Dreams into Reality"<br></br>Experience the next generation of immersion with our cutting-edge VR technology.
                 <br></br>At IDA, we are pioneering the future of virtual reality, <br></br>breaking the boundaries between the digital and physical worlds.<br></br> Our state-of-the-art VR solutions empower you to explore, create, and connect like never before.</p> 
                <button className='glowing-btn'>EXPLORE</button>
            </div>
            <div className="spark-container">
                 {/* <img src="src/assets/1 (7).png" alt="Spark" height="500px" className="spark spark1" /> */}
                {/* <img src="src/assets/1 (3).png" alt="Spark" className="spark spark2" /> */} 
            </div>
            <div className="rotating-images">
                 <img src="src/assets/1 (8).png"height="500px" alt="Rotating" className="rotating rotating1" /> 
                <img src="src/assets/7.png" height="550px"alt="Rotating" className="rotating rotating2" />
            </div>
        </div>
  
 
      </div>
    </div>
  )
}
