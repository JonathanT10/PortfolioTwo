import React from 'react';
import '../css/home.css'
import LI from '../footer/LI-In-Bug.jpg'
import Git from '../footer/GitHub-Mark-64px.jpg'

const Footer = () => {
    return(
        <div className="foot">
            <a href="https://www.linkedin.com/in/jonathan-terrell">
         <img className="Linked" src = {LI} height="30" width="35" alt="Linked In Logo"></img>
         </a> 
         <a href="https://github.com/JonathanT10">
         <img className="Git" src = {Git} height="30" width="35" alt="GitHub Logo"></img>
         </a> 
        </div>
    )
}

export default Footer;