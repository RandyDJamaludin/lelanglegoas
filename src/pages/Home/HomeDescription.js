import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/image/home/aset-01.png";
import Logo2 from "../../assets/image/home/aset-02.png";
import Logo3 from "../../assets/image/home/aset-03.png";
import Logo4 from "../../assets/image/home/aset-04.png";

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
        <h2
          className="text-center m-t-10"
          style={{ color: "#FFBB00", fontWeight: "bold" }}
        >
          PERTAMA DI INDONESIA
        </h2>
        <Grid>
          <Row>
            <Col md={3} className="text-center">
              <Link to="/cari-mobil">
                <img width={150} height={150} src={Logo1} />
                <div className="base-color w700">Cari Mobil/Motor</div>
              </Link>
            </Col>
            <Col md={3} className="text-center">
              <img width={150} height={150} src={Logo2} />
              <div className="base-color w700">Jadwal Lelang Terdekat</div>
            </Col>
            <Col md={3} className="text-center">
              <img width={150} height={150} src={Logo3} />
              <div className="base-color w700">Produk</div>
            </Col>
            <Col md={3} className="text-center">
              <img width={150} height={150} src={Logo4} />
              <div className="base-color w700">Testimonial</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default HomeDescription;
