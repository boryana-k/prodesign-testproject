import React from 'react'
import Carousel from '../Carousel/Carousel'
import CasinoCard from '../casinocard/CasinoCard'

import './casino.css'

import img1 from '../../assets/casino1.png'
function Casino() {
  return (
    <div className='casino'>
      
      <div className="casino-container">
        <div className='details'>
          <h1>Casino</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Casino