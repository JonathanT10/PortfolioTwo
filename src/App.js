import './App.css';
import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/components/home'
import Navbar from './components/navBar/navBar';
import Projects from './components/projects';
import Footer from './components/footer/footer';
import About from './components/about';


function App() {

  return(
    <Provider store={store}>
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
    </Provider>
  );
  
  }
  
  
  export default App;
