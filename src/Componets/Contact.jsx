import React from 'react'
import "./Contact.css"
import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelopeOpenText } from "react-icons/fa";
import Lottie from "lottie-react";
import email from '/New folder/toures/src/assets/Animation_1751122075533.json'
import arrow from '/New folder/toures/src/assets/Animation _1751123504493.json'

export default function Contact() {
    const [state, handleSubmit] = useForm("xkgbkkqn");
    if (state.succeeded) {

    }
    return (
        <div className='Contact' id='con'>
            <div className="title">
                <h1>Contact Us</h1>
            </div>

            <div className="left-sec">
                <form action="" className="form" onSubmit={handleSubmit}>

                    <div className="email">
                        <label id='email' htmlFor="inout">
                            <i> <MdEmail /></i> Email
                        </label>
                        <input placeholder='. . . .' type="email" name="email" id="email" required />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className="massge">
                        <label id='name' htmlFor="input">
                            <i><FaEnvelopeOpenText /></i>
                            Message </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder='Name & Information'
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div className="select">
                        <label for="plane">Choose a Plan:</label>
                        <select id="plane" name="palne">
                            <option value="Dead sea">Dead Sea</option>
                            <option value="Aqaba">Aqaba</option>
                            <option value="Gold Rectanguler">Jarash</option>
                            <option value="desert-castles">Desert Castles</option>
                            <option value="azraq-castle">Azraq Castle</option>
                            <option value="harraneh-castle">Harraneh Castle</option>
                            <option value="qasr-amra">Qasr Amra</option>
                            <option value="karak-castle">Karak Castle</option>
                            <option value="shobak-castle">Shobak Castle</option>
                            <option value="wadi-mujib">Climbing Wadi Mujib</option>
                            <option value="dead-sea">Visit the Dead Sea</option>
                            <option value="baptism-site">Visit the Baptism Site</option>
                            <option value="madaba">Madaba</option>
                            <option value="nebo">Nebo</option>
                            <option value="dead-sea-panorama">Dead Sea Panorama</option>
                            <option value="wadi-bani-hammad">Wadi Bani Hammad</option>
                            <option value="wadi-numayra">Wadi Numayra</option>
                            <option value="mari-elias">Mari Elias</option>
                            <option value="ajloun-forests">Ajloun Forests</option>
                        </select>

                        <label for="plan">Payment Method:</label>
                        <select id="Method" name="Method">
                            <option value="Cash">Cash on Aravia</option>
                            <option value="Visa">Visa on arival</option>
                            <option value="Western Union">Western Union</option>
                        </select>
                    </div>
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>

                    {state.succeeded && (
                        <p> <Lottie style={{ width: "60px", height: "60px" }} animationData={arrow}></Lottie> Your Message Was Sended </p>
                    )}
                </form>
            </div>




            <div className="right-sec">
                <div className="ainmation">
                    <p >
                        <Lottie style={{ width: "400px", height: "400px", marginLeft: "40px" }} animationData={email} />
                    </p>

                </div>
            </div>
        </div>
    )
}
