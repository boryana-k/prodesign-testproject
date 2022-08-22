import React from 'react'
import EventCard from './../eventcard/EventCard'
import event1 from '../../assets/event1.png'
import event2 from '../../assets/event2.png'
import event3 from '../../assets/event3.png'
import line from '../../assets/line.png'
import './events.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

const events = [
    {
        image: event1,
        title: 'MUSIC LIVE SHOW @ Black & White Piano Lounge',
        type: 'MUSIC LIVE SHOW',
        place: 'Black & White Piano Lounge',
        time: '22:30'
    }, {
        image: event2,
        title: 'MUSIC LIVE SHOW @ Black & White Piano Lounge',
        type: 'MUSIC LIVE SHOW',
        place: 'Black & White Piano Lounge',
        time: '22:30'
    },
    {
        image: event3,
        title: 'MUSIC LIVE SHOW @ Black & White Piano Lounge',
        type: 'MUSIC LIVE SHOW',
        place: 'Black & White Piano Lounge',
        time: '22:30'
    }
]

function Events() {
    return (
        <div className='events'>
            <div className='events-container'>
                <div className='events-watermark'>
                    <h1>EVENTS</h1>
                    <p>Upcoming Events</p>
                </div>

                <div className="cards-container">
                    {events.map(({ image, title, type, place, time }) => {
                        return (
                            <EventCard image={image} title={title} type={type} place={place} time={time} />
                        )
                    })}
                </div>

                <div className="swiper-cards">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={-150}
                        pagination={{
                            type: "progressbar",
                        }}
                        navigation={false}
                        modules={[Pagination]}
                        className="carousel"
                    >
                        {events.map(({ image, title, type, place, time }) => {
                            return (
                                <SwiperSlide><EventCard image={image} title={title} type={type} place={place} time={time} /></SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>

            <div className="btn-container">
                <div className='hero-btn'>
                    <span>more events</span>
                    <img src={line} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Events