import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Menu from './menu/Menu';

class App extends Component{
  render(){
    return(
        <div className="container">
            <Menu></Menu>
        </div>
    );
  }
}

export default hot(module)(App);