import React from 'react'
import "./home.css"
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import {FaTelegram} from "react-icons/fa"
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import Footer from "../../components/footer/Footer"


function Home() {
    return (
        <div className="home">
            <div className="home_content_wrap">
                <h4>Hi</h4>
                <h2>I'm kada jeremiah <span>tekenna</span></h2>
                <p><span>Full stack developer</span> (MERN stack)</p>
                <div className="icon_wrap">
                    <IoLogoWhatsapp className="icon" onClick={()=>alert(`whatsapp line: 08180322527 \nor \ncall 08052701647 `)} />
                    <a href="https://web.facebook.com/jerry.kada.50">
                        <AiFillFacebook className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/kada-jeremiah-tekenna-b1a582176/">
                        <AiFillLinkedin className="icon" />
                    </a>
                    <a href="https://web.telegram.org/k/">
                        <FaTelegram className="icon" />
                    </a>
                    <a href="#">
                        <AiFillTwitterSquare className="icon"/>
                    </a>
                </div>
                <div className="buttons">
                    <Link to="/contact">
                        <button>Hire Me</button>
                    </Link>
                    <Link to="/about">
                        <button id="btn">explore</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
