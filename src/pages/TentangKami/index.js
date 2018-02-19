import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { BannerAbout } from "../Components/Partial";

export class Index extends Component {
  render() {
    return (
      <div className="wrap-tentangKamiPage">
        <BannerAbout />
        <div
          className="wrap-struktur"
          style={{ paddingTop: 20, paddingBottom: 20 }}
        >
          <Grid>
            <Row>
              <Col md={8}>
                <h3> Infrastructure </h3>
                <hr />
                <p>
                  LEGOAS mempersiapkan infrastruktur dengan memperhitungkan
                  keamanan asset yang disimpan dan memberikan fasilitas bagi
                  kepuasan pelanggan.
                </p>
                <div style={{ paddingTop: 20 }}>
                  <li>lahan penyimpanan asset sebesar 2 hektar.</li>
                  <li>25 titik indoor dan outdoor CCTV.</li>
                  <li>penjagaan keamanan 24/7</li>
                  <li>aula lelang.</li>
                  <li>kantin.</li>
                  <li>kiosK.</li>
                </div>
              </Col>
              <Col md={4}>
                <Image
                  src="https://cutenippon.files.wordpress.com/2012/04/road_3.jpg"
                  width="100%"
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Index;
