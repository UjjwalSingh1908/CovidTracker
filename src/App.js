import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={LandingPage} />
      </BrowserRouter>
    );
  }
}

export default App;
