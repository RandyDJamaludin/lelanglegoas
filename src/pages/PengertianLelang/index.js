import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"
import { BannerInfo } from '../Components/Banner'

export class Index extends Component {
  render() {
    return (
      <div className="wrap-pengertianLelangPage">
        <BannerInfo title='Pengertian Lelang'/>

        <Grid style={{ paddingTop: "5%" }}>
          <Row>
            <Col md={2} />
            <Col md={8}>
              <p className="text-center">
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
            </Col>
            <Col md={2} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Index;
