import React from 'react'
import eventimg from '../../assets/eventimg.png'
import './eventcard.css'

function EventCard({ image, title, type, place, time }) {
    return (
        <div className="events-card">
            <div className="card-img">
                <img src={image} alt=""/>
            </div>
            <div className="event-details">
                <h1>{title}</h1>
                <h2>{type}</h2>
                <p>Place / {place}</p>
                <hr></hr>
                <p>Time / {time}</p>
            </div>
        </div>
    )
}

export default EventCard