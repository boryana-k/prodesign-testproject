import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { BsChevronCompactDown } from 'react-icons/bs'
import Navbar from '../Navbar/Navbar'
import image from '../../assets/eventimg.png'
import line from '../../assets/line.png'
import bgimg from '../../assets/video.png'
import './hero.css'

import { useState } from 'react';

function Hero() {

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (
        <div className='hero'>
            <Navbar />
            <div className='bg-layer'>
                <img src={bgimg} alt="" className="bg-img" />

                <div className="container">
                    <div className="text-content">
                        <h1>The best full-service casino at the Balkans</h1>
                        <p>Unique experience and ultimate gaming technologies</p>

                    </div>

                    <div className='hero-btn'>
                        <span>Read more</span>
                        <img src={line} alt="" />
                    </div>
                </div>

                <div className="widget">
                    <button onClick={handleClick} className='events-btn'><span>Events</span></button>
                    {isShown && (
                        <div className='event-card'>
                            <div className='up'>
                                <div className='event-date'>
                                    <p>06</p>
                                    <p>jun</p>
                                </div>
                                <div><img src={image} alt="" /></div>
                            </div>
                            <div className='mid'>
                                <p>MUSIC LIVE SHOW @ Black &amp; White Piano Lounge</p>
                            </div>
                            <div className="down">
                                <p>Teppanyaki Night</p>
                            </div>
                        </div>

                    )}

                </div>

                <div className='pagination'>
                    <div className='tab'>
                        <h1>01.</h1>
                        <p>Who we are</p>
                    </div>

                    <div className='tab'>
                        <h1>02.</h1>
                        <p>Lorem Ipsum</p>
                    </div>

                    <div className='tab'>
                        <h1>03.</h1>
                        <p>Simply dummy text</p>
                    </div>
                </div>

                <div className="pagination-2">
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>

            </div>

        </div>
    )
}

export default Hero