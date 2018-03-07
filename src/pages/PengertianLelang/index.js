import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { BannerInfo } from "../Components/Partial";
import LogoImage from "../../assets/image/infolelang/pengertian.png";
import IconFigure from "../../assets/image/Pembeli/figure.png";
import IconFigureWomen from "../../assets/image/Pembeli/figurewoman.png";

export class Index extends Component {
  render() {
    return (
      <div className="wrap-pengertianLelangPage">
        <BannerInfo logo={LogoImage} title="PENGERTIAN LELANG" />

        <Grid style={{ paddingTop: "3%" }}>
        <div style={{marginBottom:20, textAlign:'center'}}>
          <h3> Apa itu Lelang </h3>
        </div>
          <Row>
            <Col md={2}>
            <Image
              src={IconFigure}
              alt="Logo"
              style={{ width: "100%" }}
            />
            </Col>
            <Col md={10}>
              <div style={{padding:10}}>
                <div id="comment_bubble">
                  <p>
                    Lelang adalah proses membeli dan menjual barang atau jasa dengan
                    cara menawarkan kepada penawar, menawarkan tawaran harga lebih
                    tinggi. dan kemudian menjual barang kepada penawar harga
                    tertingi Lelang di indonesia masih tergolong proses yang tidak
                    familiah. 
                  </p>
                </div>
              </div>
              
            </Col>
          </Row>

          <Row>
            <Col md={10}>
              <div style={{padding:10}}>
                <div id="comment_bubbleWomen">
                  <p>
                    produk yang biasa dilakukan lelang adalah kendaraan,
                    properti, dan komoditi. pada dasarnya semua barang dapat
                    dilakukan lelang. ketika ada kebutuhan atas penjualan dengan
                    cepat. atau harga tertingi, atau penjualan dalam skala banyak,
                    maka penjualan melalui lelang adalah cara yang paling tepat
                  </p>
                </div>
              </div>
            </Col>
            <Col md={2}>
            <Image
              src={IconFigureWomen}
              alt="Logo"
              style={{ width: "100%" }}
            />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Index;
