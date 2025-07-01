import React from 'react'
import "./Main.css"
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineTour } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { MdTravelExplore } from "react-icons/md";

export default function Main() {
    return (
        <div className='Main'>
            <div className='title'><h1>Some Puctuers of Jordan</h1></div>
            <div className="img">

                <img src="https://c4.wallpaperflare.com/wallpaper/960/291/688/dead-sea-israel-nature-trees-hd-wallpaper-preview.jpg" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFXDqB6z2PuEdHMDZVYgP70F7OCGU88WneQ&s" alt="" />
                <img src="https://cdn.britannica.com/22/153522-050-2FF48BAC/Al-Dayr-Petra-Jordan.jpg" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7D4APMMxn6m675SSj5gGNEL3o8OQCi4UgQ&s" alt="" />
                <img src="https://images.newscientist.com/wp-content/uploads/2023/01/26181405/jerash-credit-jordan-tourism-board-scaled.jpg?crop=3%3A2%2Csmart" alt="" />
                <img src="https://mc-5126cf56-570a-4992-b7aa-ea41-afd-ep-buemfvb4e0c8e9a7.a03.azurefd.net/-/media/OTHERS/RJ/Discover-Jordan/New-Holy-Travels-Card-500.jpg?h=500&w=500&rev=ed883a4c35cd4e16a912f42c81343fa1&hash=50E5628AE8AD66C621FA86E0B8F7A38B" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4o63wbGXLhQPOm71nFwscKaP_JdCndtxfw&s" alt="" />
                <img src="https://cdn.britannica.com/55/189755-050-73328263/Qasr-al-Bint-Temple-of-Dusares-Petra-facade.jpg" alt="" />
                <img src="https://lp-cms-production.imgix.net/2022-04/Jordan%20Amman%20%C2%A9%20lrosebrugh%20GettyImages-1148727438.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75" alt="" />
            </div>

            <div className="ser">
                <div className='title'>
                    <span>What I will do For You</span>
                    <h1>Service</h1>

                </div>
                <div className="contaner">
                    <div className="card">

                        <div className="icon">
                            <span>
                                <FaCarAlt />
                            </span>
                            <div className="title">
                                <h3>Airport Pick-Up & Drop-Off</h3>
                            </div>
                        </div>
                        <div className="info">
                            <p>I’m a van driver and a freelance tour guide in Jordan.</p>
                        </div>
                    </div>
                    <div className="card">

                        <div className="icon">
                            <span>
                                <MdOutlineTour />
                            </span>
                            <div className="title">
                                <h3>Private Jordan Tours</h3>
                            </div>
                        </div>
                        <div className="info">
                            <p>Explore Jordan’s famous landmarks with private, custom tours."
                                “I’ll take you to Petra, Wadi Rum, Dead Sea, Jerash, and more!</p>
                        </div>
                    </div>
                    <div className="card">

                        <div className="icon">
                            <span>
                               <FaHotel />
                            </span>
                            <div className="title">
                                <h3>Hotel to Hotel Transfers</h3>
                            </div>
                        </div>
                        <div className="info">
                            <p>Need a ride between cities or hotels? I’ll get you there comfortably.</p>
                        </div>
                    </div>
                    <div className="card">

                        <div className="icon">
                            <span>
                                <MdTravelExplore />

                            </span>
                            <div className="title">
                                <h3>Local Experience & Travel Help</h3>
                            </div>
                        </div>
                        <div className="info">
                            <p>🍽️ "Want to try local food, visit hidden gems,
                                or need help translating?
                                I’m here to make your trip smooth and unforgettable."</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
