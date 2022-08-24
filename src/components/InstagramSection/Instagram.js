import React, { useEffect } from 'react'
import './instagram.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const photos = [
  {
    alt: 'photo',
    photo: img1
  }, {
    alt: 'photo',
    photo: img2
  }, {
    alt: 'photo',
    photo: img3
  },
  {
    alt: 'photo',
    photo: img4
  }, {
    alt: 'photo',
    photo: img5
  }, {
    alt: 'photo',
    photo: img6
  },
  {
    alt: 'photo',
    photo: img7
  },
  {
    alt: 'photo',
    photo: img8
  }

]
function Instagram() {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  return (
    <div className='instagram'>
      <div className="instagram-watermark" data-aos="fade-up">
        <h1>Instagram</h1>
        <p>Share your experience</p>
      </div>
      <div className="instagram-container">
        <div className="photos-container">
          {photos.map(({ alt, photo }) => {
            return (
              <img src={photo} alt={alt} />
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Instagram