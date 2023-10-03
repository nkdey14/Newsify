// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  // name = "Nitin";
  render() {
    return (
      <div>
        {/* Hello my first class based component {this.name} */}
        <Navbar />
        <News />
      </div>
    );
  }
}
