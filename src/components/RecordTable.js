import React, { Component } from "react";
import Axios from "axios";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./styles.css";

class RecordTable extends Component {
  state = {
    statewise: [],
  };

  componentDidMount() {
    Axios.get("https://api.covid19india.org/data.json")
      .then((res) => {
        console.log(res);
        this.setState({ statewise: res.data.statewise });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  render() {
    const data = this.state.statewise;
    let total = { ...data[0] };
    console.log(total.active);
    data.shift();
    const TableRow = data.map((data, key) => {
      return (
        <tr key={key}>
          <td> {data.lastupdatedtime} </td>
          <td> {data.state} </td>
          <td> {data.confirmed} </td>
          <td> {data.active} </td>
          <td> {data.recovered} </td>
          <td> {data.deaths} </td>
        </tr>
      );
    });
    return (
      <div className="cont">
        <Container fluid>
          <Row>
            <Col xs={{ span: "10", offset: "1" }}>
              <div className="heading">STATEWISE DATA</div>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>DATE &amp; TIME</th>
                    <th>STATE</th>
                    <th>CONFIRMED</th>
                    <th>ACTIVE</th>
                    <th>RECOVERED</th>
                    <th>DEATHS</th>
                  </tr>
                </thead>
                <tbody>{TableRow}</tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RecordTable;
