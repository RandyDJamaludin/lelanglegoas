import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import MdLocationOn from "react-icons/lib/md/location-on";

class Index extends Component {

  render() {
    return (
      <div className="page-lokasi" style={{ paddingBottom: "3%" }}>
        <div>
          <div className="location-lelang">
            <Grid>
              <div className="body-header">
                <p>
                  <MdLocationOn id="date" /> LOKASI LELANG
                </p>
                <hr />
              </div>
              <Row>
                <Col xs={12} md={12}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.446550562986!2d106.73474321456337!3d-6.204675895508321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b09ce89d986319!2sPt.+Digital+Sarana+Legoas!5e0!3m2!1sid!2sid!4v1547192351344" title="map" style={{marginLeft:"10%", width:"80%", height:600}} frameborder="0" allowfullscreen></iframe>
                  <div className="wrap-location">
                    <p className="sub-location">PT Digital Sarana Legoas</p>
                  </div>
                  <div className="body-location">
                    <p>Jl. Meruya Selatan N0. 12 RT 08 RW 04 Kel. Meruya Utara</p>
                    <p>Kec. Kembangan Jakarta Barat 11620</p>
                    <p>Indonesia</p>
                    <p>cs@legoas.co.id </p>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
