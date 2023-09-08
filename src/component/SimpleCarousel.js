import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./SimpleCarousel.css"
import ImageOne from "../image/homeOne.jpg"
import ImageTwo from "../image/homeTwo.jpg"
import ImageThree from "../image/homeThree.jpg"

function SimpleCarousel() {
  return (
    <Carousel autoPlay={true} interval={2000} infiniteLoop={true} 
    showArrows={false} showStatus={false} showThumbs={false}>    
        <div >
            <img src={ImageOne} alt="Image 1" />
        </div>
        <div >
            <img src={ImageTwo} alt="Image 2" />
        </div>
        <div >
            <img src={ImageThree}alt="Image 3" />
        </div>
    </Carousel>
  )
}

export default SimpleCarousel
