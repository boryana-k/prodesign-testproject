import React from 'react'
import image from '../../assets/palms.png'
import line from '../../assets/line1.png'
import './about.css'
function About() {
  return (
    <div className='about'>
        <div className='title-container'>
          <img src={image} alt="" />
            <span>About</span>
        </div>
        <div className='about-container'>
            <h1>Elegance, class and diversity of entertainment in the heart of the capital</h1>
            <p>Offering elegance, class and exciting experience with the highest level of service, 
                Palms Merkur Royalе is the newest and the most exclusive gaming facility in the Bulgarian capital Sofia. 
                Situated in the Millennium Center which is among the tallest and mo</p>

            <div className='about-btn'>
              <span>explore</span>
              <img src={line} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About