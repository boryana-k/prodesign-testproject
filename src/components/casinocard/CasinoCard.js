import React from 'react'
import './casinocard.css'
function CasinoCard({image, name, title, text}) {
  return (
    <div className="casino-card">
            <div className="card-img">
                <img src={image} alt=""/>
            </div>
            <div className="casino-details">
                <h1>{name}</h1>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
  )
}

export default CasinoCard