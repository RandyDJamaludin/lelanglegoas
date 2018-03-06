import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { BannerInfo } from "../Components/Partial";
import LogoImage from "../../assets/image/infolelang/pengertian.png";
import IconFigure from "../../assets/image/Pembeli/figure.png";

export class Index extends Component {
  render() {
    return (
      <div className="wrap-pengertianLelangPage">
        <BannerInfo logo={LogoImage} title="PENGERTIAN LELANG" />

        <Grid style={{ paddingTop: "5%" }}>
          <Row>
            <Col md={2}>
            <Image
              src={IconFigure}
              alt="Logo"
              style={{ width: "100%" }}
            />
            </Col>
            <Col md={10}>
              <div style={{border:'1px solid #ccc', padding:10}}>
                <h3> Apa itu lelang ? </h3>
                <p>
                  Lelang adalah proses membeli dan menjual barang atau jasa dengan
                  cara menawarkan kepada penawar, menawarkan tawaran harga lebih
                  tinggi. dan kemudian menjual barang kepada penawar harga
                  tertingi, Lelang di indonesia masih tergolong proses yang tidak
                  familiah. produk yang biasa dilakukan lelang adalah kendaraan,
                  properti, dan komoditi. pada dasarnya semua barang dapat
                  dilakukan lelang. ketika ada kebutuhan atas penjualan dengan
                  cepat. atau harga tertingi, atau penjualan dalam skala banyak,
                  maka penjualan melalui lelang adalah cara yang paling tepat
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Index;
