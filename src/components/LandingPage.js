import React, { Component } from "react";
import Axios from "axios";
import { Navbar, Nav, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Notifications,
  Hotel,
  Beenhere,
  SentimentVeryDissatisfied,
} from "@material-ui/icons";
import corona from "../assets/coronavirus.svg";
import "./styles.css";

class LandingPage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    Axios.get("https://api.covid19india.org/data.json")
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data.statewise[0] }, () => {
          console.log(this.state.data);
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark" sticky="top" className="shadow">
          <Navbar.Brand as={Link} to="/">
            <img src={corona} className="icon" />
            <span className="covid">COVID </span>{" "}
            <span className="tracker">TRACKER</span>
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Nav className="link" as={Link} to="/statewise">
            <button className="button">Statewise Data</button>
          </Nav>
        </Navbar>
        <div className="LandingPage">
          <div className="Heading">COVID-19 INDIA</div>
          <div className="cardholder">
            <Card className="totalCases">
              <Card.Body className="outline">
                <Card.Title className="title">
                  <Notifications />
                  Confirmed Cases
                </Card.Title>
                <Card.Text style={{ color: "#fff" }}>
                  {this.state.data.confirmed}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="activeCases">
              <Card.Body className="outline">
                <Card.Title className="title">
                  {" "}
                  <Hotel /> Active Cases
                </Card.Title>
                <Card.Text style={{ color: "#fff" }}>
                  {this.state.data.active}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="recovered">
              <Card.Body className="outline">
                <Card.Title className="title">
                  <Beenhere /> Recovered Cases{" "}
                </Card.Title>
                <Card.Text style={{ color: "#fff" }}>
                  {this.state.data.recovered}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="deaths">
              <Card.Body className="outline">
                <Card.Title className="title">
                  {" "}
                  <SentimentVeryDissatisfied /> Total Deaths
                </Card.Title>
                <Card.Text style={{ color: "#fff" }}>
                  {this.state.data.confirmed}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <Navbar bg="dark" variant="dark" sticky="bottom">
          <div
            style={{
              textAlign: "center",
              color: "#fff",
              width: "100%",
              padding: "0.6rem",
            }}
          >
            {" "}
            &copy; Created By Ujjwal Singh &amp; Supriya Verma
          </div>{" "}
        </Navbar>
      </React.Fragment>
    );
  }
}

export default LandingPage;
