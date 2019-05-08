import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import linejpg from '../../assets/image/line.png';
import { Link } from 'react-router-dom';
import Logo1 from '../../assets/image/home/aset-01.png';
import Logo2 from '../../assets/image/home/aset-02.png';
import Logo3 from '../../assets/image/home/aset-03.png';
import Logo4 from '../../assets/image/home/aset-04.png';

class HomeDescription extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="info-content" style={{ paddingTop: "3%", paddingBottom: "1%" }}>
        <div className="body-header text-center">
          <h4 className="base-color w900">BALAI LELANG DENGAN E-AUCTION</h4>
          <h2 className="text-center w900" style={{ color: '#FFBB00', fontWeight: 'bold' }}>PERTAMA DI INDONESIA</h2>
          <img src={linejpg} alt="" />
        </div>
        <Grid>
          <Row>
            <Col md={4} className="text-center">
              <Link to="/cari-mobil">
                <img width={150} height={150} src={Logo1} />
                <div className="base-color w700">Cari Mobil/Motor</div>
              </Link>
            </Col>
            <Col md={4} className="text-center">
              <Link to="/jadwal">
                <img width={150} height={150} src={Logo2} />
                <div className="base-color w700">Jadwal Lelang Terdekat</div>
              </Link>
            </Col>
            <Col md={4} className="text-center">
              <Link to="/produk">
                <img width={150} height={150} src={Logo3} />
                <div className="base-color w700">Produk</div>
              </Link>
            </Col>
            {/* <Col md={3} className="text-center">
              <img width={150} height={150} src={Logo4} />
              <div className="base-color w700">Testimonial</div>
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default HomeDescription;
