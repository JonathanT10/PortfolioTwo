import React, { Component } from 'react';
import '../components/css/home.css';
import Code from '../images/code.jpg'



class About extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="main">
                <h1>About</h1>
                <p>My name is Jonathan, I am a born and raised Texan, and US Army Veteran. I live just outside Dallas Texas, in a small town named Forney, with my wife and daughter. For the past seven years I have been working in Information Technology. I have had various roles from Telecommunications Engineer, Systems Engineer, and IT Coordinator. Some of these roles have provided the great opportunity of working with international teams, and I have benefited greatly from this experience. Complex problems are where I find, great enthusiasm and focus. In my free time I enjoy woodworking, cooking, and sports.</p>
                <img className="Code" src = {Code} height="380" width="100%" alt="Lines of code on a computer screen"></img>
            </div>
        )
    }
}

export default About;