import React, { Component } from 'react';
import Navbar from './navBar/navBar';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                {Navbar}
                <h1>Freelance Developer</h1>
                <h2>Jonathan Terrell</h2>
            </div>
        )
    }
}

export default Home;