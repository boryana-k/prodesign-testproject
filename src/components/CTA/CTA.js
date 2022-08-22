import React from 'react'

import arrow from '../../assets/arrow.png'
import './cta.css'

function CTA() {
  return (
    <div className='cta'>
      <div className="cta-container">
        <span>Enjoy one of the most popular variants of the card game of poker at our poker club</span>
        <img src={arrow} alt="" />
        <div className='cta-btn'>
          <span>Read more</span>
        </div>
      </div>
    </div>
  )
}

export default CTA