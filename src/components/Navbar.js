import React from 'react'

import logo from '../assets/Logo.png'
import { BsChevronCompactDown } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
    return (
        <div className='absolute w-full z-[1] flex justify-between pl-2 pr-2 items-center border-b-[1px] border-secondary-color'>
            <div>
                <img src={logo} alt="" className='w-[100px]' />
            </div>

            <div className=''>
                <ul className='hidden lg:flex gap-4 text-main-color'>
                    <li><a href="" className='font-font-poppins uppercase text-[12px] xl:text-[14px]'>About us</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[12px] xl:text-[14px]'>Tour</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[12px] xl:text-[14px]'>Casino</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[12px] xl:text-[14px]'>Poker Club</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[12px] xl:text-[14px]'>Dinning</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[12px] xl:text-[14px]'>Hotel &amp; spa</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[12px] xl:text-[14px]'>Events &amp; promo</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[12px] xl:text-[14px]'>Privileges</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[12px] xl:text-[14px]'>Careers</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[12px] xl:text-[14px]'>Contact us</a></li>
                </ul>
            </div>

            <div className='flex gap-3'>
                <div className='lang-menu flex text-main-color'>
                    <div className='dropbtn'>EN </div>
                    <div className='icon'><BsChevronCompactDown /></div>
                </div>

                <div className="text-main-color lg:hidden">
                    <GiHamburgerMenu size={25} className='text-main-color' />
                </div>

            </div>


        </div>
    )
}

export default Navbar