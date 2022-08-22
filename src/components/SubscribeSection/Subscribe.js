import React from 'react'
import line from '../../assets/line1.png'
import Footer from '../Footer/Footer'
import './subscribe.css'

function Subscribe() {
    return (
        <div className='subscribe'>
            <div className='separator'></div>

            <div className="subscribe-container">
                <h1>Stay up to date</h1>
                <p>To receive our monthly newsletter please add your email address below</p>

                <div className='input'>
                    <input type="email" name="" id="" placeholder='subject' />

                    <div className='subscribe-btn'>
                        <span>Subscribe</span>
                        <img src={line} alt="" />
                    </div>
                </div>

                <div className='subs-checkbox'>
                <input type="checkbox" />
                    <span>I’m happy for the Palms Merkur Royale Casino to send me news and inspiration.</span>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Subscribe