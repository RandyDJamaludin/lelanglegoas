import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
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
        </div>
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <div className="wrap_tentang">
                <h4> Kenapa harus mengikuti lelang ? </h4>
                <p> Bagi peserta lelang ada kelebihan dimana biasanya harga yang diperoleh relatif lebih murah dibandingkan harga dipasaran. Dan dengan konsep lelang adalah barang/produk tersebut adalah ‘as is’ atau apa adanya, maka hal tersebut memberikan keleluasaan bagi peserta lelang untuk mencari dengan kondisi dan harga sesuai yang diingini. </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Index;
