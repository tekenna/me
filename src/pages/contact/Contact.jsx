import React from 'react'
import "./contact.css"
import { IoLogoWhatsapp } from "react-icons/io";
import {FaTelegram} from "react-icons/fa"
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

function Contact() {
    return (
        <div className="contact">
            <div className="contact_body">
                <div className="contact_wrapper">
                    <div className="contact_text_box">
                        <h3>Contact <span>Me</span></h3>
                        <p>I am open to freelancing roles, contract jobs, remote jobs, and full time roles in any company and project that would require my skillset.
                        Got an idea?! hit me up so we can build something awesome.</p>
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
                            <a href="https://twitter.com/Tekenna1?s=08">
                                <AiFillTwitterSquare className="icon"/>
                            </a>
                        </div>
                    </div>
                    <div className="text_fields">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <textarea type="text" placeholder="Message" />
                        <button type="submit">Send</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
