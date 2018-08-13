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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6263097029314!2d106.9802200539126!3d-6.196873185633912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b937f68c20d%3A0xda5b15b4bf92449c!2skantor+pt.Digital+sarana+legoas!5e0!3m2!1sen!2sid!4v1531283557410" title="map" style={{marginLeft:"10%", width:"80%", height:600}} frameborder="0" allowfullscreen></iframe>
                  <div className="wrap-location">
                    <p className="sub-location">PT Digital Sarana Legoas</p>
                  </div>
                  <div className="body-location">
                    <p>Jl. Raya Kaliabang no. 45</p>
                    <p>Medan Satria, Bekasi 17132</p>
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
