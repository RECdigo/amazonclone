import React from 'react'
import "./Home.css"
import Product from "./Product.js"
import photoOne from "../image/productOne_chair.jpg"
import photoTwo from "../image/productTwo_whatch.jpg"
import photoThree from "../image/productThree_tshirt.jpg"
import photoFour from "../image/productFour_book.jpg"
import photoFive from "../image/productFive_gress.jpg"
import photoSix from "../image/productSix_TV.jpg"
import SimpleCarousel from './SimpleCarousel';


function Home() {
  return (
    <div className='home'>       
        <div className="home_container">      
            <SimpleCarousel />
        </div>
        <div className="home_row">
            <Product 
                id="1"
                title="Amazon Basics Padded Office Desk Chair with Armrests, 
                Adjustable Height/Tilt, 360-Degree Swivel, 275 Pound Capacity, 
                24 x 24.2 x 34.8 Inches, Whiteaaaaaaa" 
                price={67.99}
                image={photoOne}
                rating={4}            
            />

            <Product                 
                id="2"
                title="Invicta Men's 22340 22341 22343 22344 22346 Pro Diver Analog Display 
                Quartz Black Watch" 
                price={30.34}
                image={photoTwo}
                rating={5}            
            />
            

        </div>

        <div className="home_row">            
             <Product                 
                id="3"
                title="32 DEGREEES Men's Cool Classic Crew T-Shirt 
                | Anti-Odor | 4-Way Stretch | Moisture Wicking" 
                price={18.88}
                image={photoThree}
                rating={3}            
            />

             <Product                 
                id="4"
                title="No Plan B: A Jack Reacher Novel Kindle Edition" 
                price={5.55}
                image={photoFour}
                rating={2}            
            />

             <Product                 
                id="5"
                title="Greenworks 40V Brushless 3 Gallon Cordless Wet/Dry Shop Vacuum with Hose,
                 Crevice Tool, Floor Nozzle, 4.0Ah Battery and Charger Included" 
                price={212.89}
                image={photoFive}
                rating={1}            
            />
        </div>

        <div className="home_row">            
            <Product                 
                id="6"
                title="ATYME 32-inch Class 60Hz 720p HD LED TV Flat Screen 1*USB 
                3* HDMI 1*VGA ARC Dual Channel 8W Speakers Monitor Television 320GM5HD" 
                price={116.99}
                image={photoSix}
                rating={5}            
            />               
        </div>
    </div>
  )
}

export default Home
