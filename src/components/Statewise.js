import React, { Component } from "react";
import RecordTable from "./RecordTable";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import corona from "../assets/coronavirus.svg";
import "./styles.css";

class Statewise extends Component {
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
        <RecordTable />
        <Navbar bg="dark" variant="dark">
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

export default Statewise;
