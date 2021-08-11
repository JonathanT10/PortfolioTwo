import React from 'react';
import '../css/home.css'
import LI from '../footer/LI-In-Bug.jpg'

const Footer = () => {
    return(
        <div className="foot">
            <a href="https://www.linkedin.com/in/jonathan-terrell">
         <img className="Linked" src = {LI} height="35" width="40" alt="Linked In Logo"></img>
         </a> 
        </div>
    )
}

export default Footer;