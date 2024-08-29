import React from 'react'
import './About.css'


export default function About() {
  const handleMouseMove = (e) => {
    const content = document.querySelector('.content-right');
    const { clientX: x, clientY: y } = e;
    content.style.transform = `translate(${(x / window.innerWidth - 0.5) * 20}px, ${(y / window.innerHeight - 0.5) * 20}px)`;
};

  return (
    <div className="second-hero " onMouseMove={handleMouseMove}>
    <div className="image-left">
        <img src="src/assets/1 (6).png" alt="Left" className="hover-zoom" />
    </div>
    <div className="content-right">
        <img src="src/assets/1 (2).png" alt="Right" className="background-image" />
        <div className="text-content">
            <h2>IDA - AR, VR and MR Company in India</h2>
            <p>We IDA - Industrial Design and Animation is a creative and Innovative Digital Retransformation organisation with Focus the stream on both Web 3.0 and Industry 4.0 solutions.<br></br>
             We Transform and elevate your Insustry and Business With Immersive Technical solution with extensiveand wide range of Imagination that becomes Possible.<br></br>
             We @IDA Transform your needs and reinvent the Your business for upcoming digital future. We create and design based on your needs with technologies like AR ( Augmented Reality ), VR( Virtual Reality ), MR( Mixed Reality ) and XR( eXtended Reality ). To reshape the entire future.
             Join Us into the Immersive Future</p>
             <button className='but'>LEARN MORE</button>
        </div>
    </div>
</div>
  )
}
