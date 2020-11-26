import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Statewise from "./components/Statewise";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={LandingPage} />
        <Route path="/statewise" exact component={Statewise} />
      </BrowserRouter>
    );
  }
}

export default App;
