import './App.css';
import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return(
    <Provider store={store}>
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        
      </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
  
  }
  
  
  export default App;
