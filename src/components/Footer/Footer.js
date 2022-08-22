import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="cols">
                    <div className='column'>
                        <ul className='footer-links'>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Our Privileges</a></li>
                            <li><a href="">Events &amp;	Promo</a></li>
                        </ul>
                    </div>
                    <div className='column'>
                        <ul className='footer-links'>
                            <li><a href="">Cookie Policy</a></li>
                            <li><a href="">Loyalty Program</a></li>
                            <li><a href="">Responsible Gaming</a></li>
                            <li><a href="">PMR Casino Privilege Club</a></li>
                            <li><a href="">Privacy Policy​</a></li>
                        </ul>
                    </div>
                    <div className='column'>
                        <ul className="footer-links">
                        <h1>Restaurants</h1>
                            <li><p>888 Taste Show Asian Cuisine</p></li>
                            <li><p>San Remo Mediterranean Cuisine</p></li>
                            <li><p>Black &amp; White Sport Bar and Piano Lounge</p></li>
                        </ul>

                    </div>
                    <div className='column'>
                        <ul className='footer-links'>
                            <h1>Contact us</h1>
                            <li><a href="">+359 2 443 0 333</a></li>
                            <li><a className='email' href="">reservations@pmrcasino.com <br /> concierge@pmrcasino.com</a></li>
                            <li><a className='location' href="">Show location</a></li>
                        </ul>
                    </div>
                </div>

                <span>Development by Prodesign.bgProdesign.wien</span>
            </div>
        </div>
    )
}

export default Footer