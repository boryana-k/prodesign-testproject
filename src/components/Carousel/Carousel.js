import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import arrow from '../../assets/arrow.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../../assets/casino1.png'
import img2 from '../../assets/casino2.png'
import img3 from '../../assets/casino3.png'
import CasinoCard from '../casinocard/CasinoCard';

import './carousel.css'

const casino = [
  {
    image: img1,
    name: 'Roulette',
    title: 'Do you feel lucky?',
    text: 'The roulette table has 37 numbers: from 0 to 36. You must guess the winning number. \
    That is to say the box where the white ball will fall after spinning the wheel. \
    You can play by putting a chip on the number that you think will be released. \
    You can also bet on multiple numbers with a single chip.'
  },
  {
    image: img2,
    name: 'Texas Hold’em',
    title: '   ',
    text: 'Texas Hold’em is a Poker game in which each player receives two cards as their initial hand. \
     Each player will use their two hole cards along with the five community cards to form the best five-card Poker hand.'
  },
  {
    image: img3,
    name: 'Caribbean Stud Poker',
    title: '     ',
    text: 'Even if you’ve played poker all your life, as you walk through the tables you’ll find poker variations all over the floor you might never have heard of. \
    One you should find familiar, though, is Caribbean Stud Poker.'
  }
]

function Carousel() {
  return (

    <div className='carousel-wrapper'>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        pagination={{
          type: "progressbar",
        }}
        navigation={false}
        modules={[Pagination]}
        className="carousel"
      >
        {casino.map(({ image, name, title, text }) => {
          return (
            <SwiperSlide><CasinoCard image={image} name={name} title={title} text={text} /></SwiperSlide>
          )
        })}

        <SwiperSlide>
          <div className='carousel-btn-container'>
            <div className="carousel-btn">
              <span>Explore more of our gaming</span>
              <img src={arrow} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Carousel