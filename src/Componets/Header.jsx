import React, { useState } from 'react'
import './Header.css'
import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";
import { GiDetour } from "react-icons/gi";
import { GrContact } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";

export default function Header() {
    const [Show, setShow] = useState(false);
    const handleclick = () => {
        setShow(true);

    }
    const handleX = () => {
        setShow(false);
    }
    return (
        <div className='Header' >
            <div className="logo">
                <img src="data:image/jpeg;base64,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" alt="" />
            </div>

            <div >
                <li className="nav">
                    <ul><a href="#">
                        <i><IoIosHome /></i>
                        Home</a></ul>

                    <ul> <a href="#con">
                        <i><GrContact /></i>
                        Contact</a></ul>

                    <ul><a href="#tor">
                        <i><GiDetour /></i>
                        Tours</a></ul>

                </li>

            </div>
            <div className="links">
                <span>Follow Us : </span>
                <a href="https://www.facebook.com/ali.abomohand1?mibextid=ZbWKwL" id='i1' ><FaFacebook /></a>
                <a id="i2" href="https://www.instagram.com/ali.abomohanad1?igsh=dzFpMWZrY2d5YXY1" target="_blank"><SlSocialInstagram /></a>
                <a id='i3' href="https://wa.me/+962797279940"><FaWhatsapp /></a>
            </div>
            <div className="modle">
                <button onClick={handleclick}><RiMenuLine /></button>
                {Show && (
                    <div className="show">
                        <div >
                            <div className="icon">
                                <button onClick={handleX}>
                                    <TiDeleteOutline />

                                </button>
                            </div>
                            <li className="nav-modle">
                                <ul><a href="#home">Home</a></ul>

                                <ul> <a href="#con">Contact</a></ul>

                                <ul><a href="#tor">Tours</a></ul>

                            </li>
                            <div className="m-links">
                                
                                <a href="https://www.facebook.com/ali.abomohand1?mibextid=ZbWKwL" id='i1' ><FaFacebook /></a>
                                <a id="i2" href="https://www.instagram.com/ali.abomohanad1?igsh=dzFpMWZrY2d5YXY1" target="_blank"><SlSocialInstagram /></a>
                                <a id='i3' href="https://wa.me/+962797279940"><FaWhatsapp /></a>
                            </div>
                        </div>

                    </div>
                )}
            </div>


        </div>
    )
}
