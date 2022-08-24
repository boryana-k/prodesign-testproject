import React, { useEffect } from 'react'
import image from '../../assets/palms.png'
import line from '../../assets/line1.png'
import './about.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
function About() {

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  return (
    <div className='about'>
        <div className='title-container'>
          <img src={image} alt="" />
            <span data-aos="fade-up">About</span>
        </div>
        <div className='about-container' data-aos="fade-up">
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