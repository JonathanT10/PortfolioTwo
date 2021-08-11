import React, { Component } from 'react';
import '../components/css/home.css';



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
                                <img></img>
                                <div className="card-body">
                                     <h4>The Founding Marketplace</h4>
                                     <p>The Founding Marketplace is an e-commerce application, that puts a priority on where products are made. Patrons register and log in, where you are taken to the main product page. Here you can scroll through all the products offered, and see a picture, who made it and where, see a map pinning the location, and add the product to your cart. Patrons can also leave comments/reviews of products.  In the nav menu at the top left of the screen you can logout or go to your cart. In your cartthere is a checkout button that moves products to your past purchases list, which you can view by clicking on Order History.On the home screen users also have the option to go to the Merchant Log in screen where they can register and log in as a Merchant. Merchants are then directed to the Merchant task screen where they can view Merchant Profile, Add Product, submit a request for Highlighted status, and edit their About section. The Merchant profile will have the Merchant's information, and list all that Merchant's products. There is an upload image button for each product where they can upload an image of their product. The Add Product button takes you to the Add Product page, where you can add a product name, description, address made, and price. The Submit Request for Highlighted status button takes you to the Request Highlighted status page where you can submit a request. There is also a input box where the Merchantcan edit their about section.There is also an admin login that can only be accessed with the URL. When logged in with the admin credentials, the admin can see a list of requests that have been submitted by merchants. The amin can approve or deny these requests.</p>
                                     <a href="https://github.com/JonathanT10/theFoundingMarketplacefront" target="blank" className="btn">Go to Repository</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <img></img>
                                <div className="card-body">
                                     <h4>My Trail</h4>
                                     <p>Description of project</p>
                                     <a href="https://github.com/JonathanT10/theFoundingMarketplacefront" target="blank" className="btn">Go to Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">
                                <img></img>
                                <div className="card-body">
                                     <h4>Clone Tube</h4>
                                     <p>Description of project</p>
                                     <a href="https://github.com/JonathanT10/theFoundingMarketplacefront" target="blank" className="btn">Go to Repository</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <img></img>
                                <div className="card-body">
                                     <h4>RPG Hercules Quest</h4>
                                     <p>Description of project</p>
                                     <a href="https://github.com/JonathanT10/theFoundingMarketplacefront" target="blank" className="btn">Go to Repository</a>
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