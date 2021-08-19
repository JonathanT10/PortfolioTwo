import React, { Component } from 'react';
import '../components/css/home.css';
import Herc from '../images/Hercules2.jpg';
import Clone from '../images/CloneTube.jpg';
import Mytrail from '../images/MyTrail2.jpg';
import TFM from '../images/TFM.jpg';



class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="main">
                <h1>Projects</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">
                                <img className="projectpic" src = {TFM} height="250" width="440" alt="Screenshot from my The Founding Marketplace project."></img>
                                <div className="card-body">
                                     <h4>The Founding Marketplace</h4>
                                     <p className="projectp">The Founding Marketplace is an e-commerce application, that puts a priority on where products are made. There are Patrons that will log on to by products, and Merchants who can log on to sale products. There are several highlighted statuses available for Merchants, such as Made in America and Veteran owned business. There is also a button in each product description where Patrons can pull up a google map showing exactly where the product was made.</p>
                                     <a href="https://github.com/JonathanT10/theFoundingMarketplacefront" target="blank" className="btn">Go to Repository</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <img className="projectpic" width="400" height="200" src = {Mytrail} alt="Screenshot from my My Trail project."></img>
                                <div className="card-body">
                                     <h4>My Trail</h4>
                                     <p className="projectp">My Trail is a social media application, where users can share different trails and hikes that they have been on. Users have profiles where they can post about their hikes, location, and rate it. You can upload images for you profile and create an about me section. There is also a friends list on your profile, where you can view all your friends. This project was a partnership with <a href="https://github.com/Justin-Adams1" target="blank" >Justin Adams.</a></p>
                                     <a href="https://github.com/JonathanT10/My_Trail_Backend" target="blank" className="btn">Go to Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">
                                <img className="projectpic" src = {Clone} width="500" alt="Screenshot from my CloneTube project."></img>
                                <div className="card-body">
                                     <h4>Clone Tube</h4>
                                     <p className="projectp">CloneTube is as its name would infer a YouTube clone project. In the search bar at the top, you can search for any video you would like to watch. This uses the YouTube API to play YouTube videos based on your search. It will also display 5 similar videos on the right. You can post a comment and like, dislike, or reply to comments. This project was a partnership with <a href="https://github.com/Osc-53215" target="blank">Oscar Colon.</a></p>
                                     <a href="https://github.com/JonathanT10/clonetube_frontend" target="blank" className="btn">Go to Repository</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <img className="projectpic" src = {Herc} alt="Screenshot from my Hercules project."></img>
                                <div className="card-body">
                                     <h4>RPG Hercules Quest</h4>
                                     <p className="projectp">Hercules Quest is a game with three quests. You choose your path, and every choice leads to a new consequence. You battle three monsters with different attacks, and can choose the heros attack.</p>
                                     <a href="https://github.com/JonathanT10/RPG-Hercules-Quest" target="blank" className="btn">Go to Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;