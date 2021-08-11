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
                    <h1>Jonathan Terrell</h1>
                    <h2>Freelance Developer</h2>
                    <p className="opener">I am passionate about creating things, and programing gives you the ability to create some amazing things. The challenge of getting an idea out of your head and into reality is demanding, but when you crack those difficult issues that arise, it is exhilarating.</p>
                </div>
                <img className="Dwig" src = {Dwig} height="340" width="40%" alt="The American Flag"></img>
            </div>
        )
    }
}

export default Home;