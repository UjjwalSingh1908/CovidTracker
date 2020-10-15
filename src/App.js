import React, { Component } from "react";
import Axios from "axios";

class App extends Component {
  componentDidMount() {
    Axios.get("https://api.covid19india.org/data.json")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  render() {
    return <div>CovidTracker</div>;
  }
}

export default App;
