import React, { useEffect } from 'react'

import arrow from '../../assets/arrow.png'
import './cta.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
function CTA() {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  return (
    <div className='cta'>
      <div className="cta-container">
        <span data-aos="fade-up">Enjoy one of the most popular variants of the card game of poker at our poker club</span>
        <img src={arrow} alt="" data-aos="fade-up"/>
        <div className='cta-btn'>
          <span>Read more</span>
        </div>
      </div>
    </div>
  )
}

export default CTA