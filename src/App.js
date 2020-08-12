import React, {Component}from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Components/Login";
import DashBoard from "./Components/MisEstadisticas";
import Error from "./Components/Error";


class App extends Component{
  render(){
      return(
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/MisEstadisticas" component={DashBoard}/>
              <Route component={Error}/>
            </Switch>
          </Router>
        </Provider>
      )
    }
  }

export default App;
