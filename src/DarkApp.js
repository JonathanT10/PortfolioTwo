import './App.css';
import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navBar/navBar';
import DarkFooter from './components/footer/darkfooter';
import DarkHome from './components/darkHome'


function DarkApp() {

  return(
 
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/dark" component={DarkHome} />
      </Switch>
      <DarkFooter />
      </BrowserRouter>
    </div>

  );
  
  }
  
  
  export default DarkApp;