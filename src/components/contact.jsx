import React, { Component } from 'react';
import '../components/css/home.css'
import Comp from '../images/comp.jpg'



class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="conb">
                        
                <div className="main">
                {/* <img className="concomp" src = {Comp} width="100" alt="Computer half open"></img> */}
                    <h1>Contact</h1>
            
                    <form>
                        <div className="Contact">
                        <div>
                            <input className="conname" placeholder="Name"></input>
                        </div>
                        <div>
                        <input className="conin" placeholder="EmailAddress"></input>
                        </div>
                        <div>
                            <textarea className="condes" placeholder="Your Message"></textarea>
                        </div>
                        <div>
                            <button className="conbut">Submit</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;