import React, { useEffect, useState } from 'react'
import "./Aboutus.css"
import { FaFlag } from "react-icons/fa";
import { TbRating14Plus } from "react-icons/tb";
import { SiOpenstreetmap } from "react-icons/si";
import { GiStarsStack } from "react-icons/gi";
import ali from "/New folder/toures/src/ali.jpg"

export default function Aboutus() {



    return (
        
        <div className='Aboutus'>
          
            <div className="title">
                <h1>About Us</h1>
            </div>

            <div className="conteaner">
                <div className="card">
                    <div className="icon">
                        <i><FaFlag id='i2' /></i>
                    </div>
                    <div className="title">
                        <h4>What is Your Name</h4>
                    </div>
                    <div className="info">
                        <p>I’m Mohammad — a professional van
                            driver and freelance tour guide
                            based in the heart of Jordan. With</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <i>
                            <TbRating14Plus />
                        </i>
                    </div>
                    <div className="title">
                        <h4>Experience</h4>
                    </div>
                    <div className="info">
                        <p>With 14 years of experience on the
                            road and a deep love for my country,
                            I help travelers discover the true beauty
                            of Jordan in comfort and safety.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <i>
                            <SiOpenstreetmap />
                        </i>
                    </div>
                    <div className="title">
                        <h4>Tours in Jordan</h4>
                    </div>
                    <div className="info">
                        <p>
                            Whether you're visiting ancient
                            Petra, exploring the desert of Wadi
                            Rum, floating in the Dead Sea, or walking
                            through the Roman ruins of Jerash — I’m
                            here to make your journey unforgettable.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <i>
                            <GiStarsStack />
                        </i>
                    </div>
                    <div className="title">
                        <h4>What makes me special?</h4>
                    </div>
                    <div className="info">
                        <p>With me, you're not just a passenger — you're a guest and a friend. Let’s explore Jordan together!</p>
                    </div>
                </div>
                <div className="card">

                    <div className='img'>
                        <img src={ali} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
