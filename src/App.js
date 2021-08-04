import './App.css';
import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/components/home'
import Navbar from './components/navBar/navBar';


function App() {

  return(
    <Provider store={store}>
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        
      </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
  
  }
  
  
  export default App;
