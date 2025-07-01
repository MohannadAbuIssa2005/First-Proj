import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

import './Hero.css';
function Hero() {
    return (
        <div className='Hero' id='home'>

            <div className='right-side'>
                <div className="text">
                    <h1>
                        Lets Plane Your Tour
                    </h1>
                    <h4>Choose Your Favourite Destination . </h4>

                    <button>
                        <a href="#tor">Touring Plan<FaArrowCircleRight id='w1' /></a>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Hero