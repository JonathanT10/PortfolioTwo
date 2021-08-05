import React, { Component } from 'react';
import '../components/css/home.css'
import Dwig from '../images/DoWhatIsGreat.jpg'


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="behind">
                <div className="main">
                    <h1>Freelance Developer</h1>
                    <h2>Jonathan Terrell</h2>
                    <p>My name is Jonathan, I am a born and raised Texan, and US Army Veteran. I live just outside Dallas Texas, in a small town named Forney, with my wife and daughter. For the past seven years I have been working in Information Technology. I have had various roles from Telecommunications Engineer, Systems Engineer, and IT Coordinator. Some of these roles have provided the great opportunity of working with international teams, and I have benefited greatly from this experience. Complex problems are where I find, great enthusiasm and focus. In my free time I enjoy woodworking, cooking, and sports.</p>
                </div>
                <img className="Dwig" src = {Dwig} height="350" width="40%" alt="The American Flag"></img>
            </div>
        )
    }
}

export default Home;