import React, {useState} from 'react'
import "./nav.css"
import { Link } from "react-router-dom";
import {FiMenu} from "react-icons/fi"

function Nav() {
  const [toggle, setToggle] = useState(false)
    return (
        <div className="nav">
            <h1>tek<span>Official</span> </h1>
            <div>
            <FiMenu className="menu" onClick={()=>setToggle(!toggle)} />
            <ul className={toggle? "list": "ul"}>
              <li><Link className="link" to="/">home</Link></li>
              <li><Link className="link" to="/about">about me</Link></li>
              <li><Link className="link" to="/projects">Projects</Link></li>
              <li><Link className="link" to="/contact">Contact</Link></li>
            </ul>
            </div>
       </div>
    )
}

export default Nav
