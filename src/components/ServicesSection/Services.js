import React, { useEffect } from 'react'
import restaurantsimg from '../../assets/restaurant.png'
import arrow from '../../assets/arrow.png'
import rooms from '../../assets/rooms.png'
import spa from '../../assets/spa.png'
import './services.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Services() {
    useEffect(() => {
        Aos.init({duration: 1000})
      }, [])
    return (
        <div className='services'>
            <div className='services-watermark' data-aos="fade-up">
                <h1>Much more</h1>
                <p>And even more than a casino</p>
            </div>
            <div className="services-container">
                
                <div className="left" data-aos="fade-up">
                    <div className="left-img">
                        <img src={restaurantsimg} alt="" />
                    </div>
                    <div className="left-details">
                        <div className="left-title">
                            <h1>restaurants</h1>
                        </div>
                        <div className="left-more">
                            <p id='more'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                            <img src={arrow} alt="" />
                        </div>
                        <div className='cta-btn'>
                            <span>Read more</span>
                        </div>
                    </div>
                </div>

                <div className="right" data-aos="fade-up">
                    <div className="right-img">
                        <img src={rooms} alt="" />
                    </div>
                    <div className="right-details">
                        <div className="right-title">
                            <h1>rooms and suites</h1>
                        </div>
                        <div className="right-more">
                            <p id='more'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                            <img src={arrow} alt="" />
                        </div>
                        <div className='cta-btn'>
                            <span>Read more</span>
                        </div>
                    </div>
                </div>

                <div className="left" data-aos="fade-up">
                    <div className="left-img">
                        <img src={spa} alt="" />
                    </div>
                    <div className="left-details">
                        <div className="left-title">
                            <h1>Spa Fascilities</h1>
                        </div>
                        <div className="left-more">
                            <p id='more'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                            <img src={arrow} alt="" />
                        </div>
                        <div className='cta-btn'>
                            <span>Read more</span>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Services