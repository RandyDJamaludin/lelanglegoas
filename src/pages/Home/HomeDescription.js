import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

class HomeDescription extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="landing-lelang mb-3">
        <p className="title-section text-center">
          BALAI LELANG DENGAN E-AUCTION
        </p>
        <Grid>
          <Row>
            <Col md={12} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default HomeDescription;
