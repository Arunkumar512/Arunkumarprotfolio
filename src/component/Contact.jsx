import React from 'react'
import {IoLogoGithub} from 'react-icons/io';
import {AiFillLinkedin} from 'react-icons/ai';
import "../component/Contact.css";

function Contact() {
  return (
    <section id="Contact">
    <div className="main" id='mainbox'>
    <div className="main_box">
    <div className="main_box1">
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Message'/>
        <input id = 'button' type="button" value="Contactus" />
      </div>
    <div className="icon">
    <a href="/">
        <IoLogoGithub/>
      </a>
        <a href="/">
        <AiFillLinkedin/>
      </a>
    </div>

    </div>
    </div>

    </section>
  )
}

export default Contact