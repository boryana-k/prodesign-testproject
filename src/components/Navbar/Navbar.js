import React from 'react'

import logo from '../../assets/Logo.png'
import { IoSearchSharp } from 'react-icons/io5'
import { BsChevronCompactDown } from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import './navbar.css'
function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>

            <div className='links'>
                <ul>
                    <li><a href="">About us</a></li>
                    <li><a href="">Tour</a></li>
                    <li><a href="">Casino</a></li>
                    <li><a href="">Poker Club</a></li>
                    <li><a href="">Dinning</a></li>
                    <li><a href="">Hotel &amp; spa</a></li>
                    <li><a href="">Events &amp; promo</a></li>
                    <li><a href="">Privileges</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            </div>

            <div className='lang-search'>
                    <div className='lang-menu'>
                        <div className='dropbtn'>EN </div>
                        <div className='icon'><BsChevronCompactDown /></div>
                    </div>
                <div className='search-icon'>
                    <IoSearchSharp />
                </div>
            </div>

            <div className="menu-icon">
                <GiHamburgerMenu size={25} />
            </div>
        </div>
    )
}

export default Navbar