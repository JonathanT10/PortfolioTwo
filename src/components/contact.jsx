import React, { Component } from 'react';
import '../components/css/home.css'
import Comp from '../images/comp.jpg'
import emailjs from 'emailjs-com';







class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

     sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm('service_7067fwp', 'template_zoahy35', event.target, 'user_0IbLaQEfdi13QvEkXsKdo')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        event.target.reset()
        
    }

    render() {
        return(
            <div className="conb">
                     
                <div className="main">
                {/* <img className="concomp" src = {Comp} width="100" alt="Computer half open"></img> */}
                    <h1>Contact</h1>
                    <form onSubmit={this.sendEmail}>
                        <div className="Contact">
                        <div>
                            <input type="text" className="conname" placeholder="Name" name="user_name"></input>
                        </div>
                        <div>
                        <input type="email" className="conin" placeholder="EmailAddress" name="user_email"></input>
                        </div>
                        <div>
                            <textarea className="condes" placeholder="Your Message" name="message" ></textarea>
                        </div>
                        <div>
                            <input type="submit" className="conbut" value="Send"/>
                  
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;