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
                  Lelang adalah proses membeli dan menjual barang atau jasa dengan cara menawarkan kepada penawar, peserta lelang memberikan penawaran harga lebih tinggi, dan kemudian barang terjual kepada penawar harga tertinggi. 
                  <br/><br/>
                  Sejarah lelang di Indonesia dimulai oleh East India Company yang menyelenggarakan lelang untuk teh (1750) dah masih bertahan sampai sekarang di London. Ada juga lelang tembakau Indonesia yang masih bertahan di Bremen, Jerman. Sehingga dunia lelang sebenarnya tidak terlalu asing di Indonesia. Hanya saja keterbatasan pelaksanaan lelang saja yang membuat proses lelang di Indonesia tidak terlalu dikenal.
                  <br/><br/>
                  Saat ini lelang di Indonesia digunakan sebagai alternatif penjualan kendaraan, property, dan komoditi. Pada dasarnya semua barang dapat dilakukan lelang. Ketika ada kebutuhan atas penjualan dengan cepat  dan harga tertinggi dan atau penjualan dalam skala banyak, maka penjualan melalui lelang adalah cara yang paling tepat. 
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
                  Pelaksanaan lelang yang dilakukan biasanya saat ini adalah dengan menghadiri/datang ke tempat lelang, melakukan proses administrasi yang rumit, dan mengikuti pelaksanaan lelang di lokasi dengan konsep mengacungkan tangan/NPL (nomor peserta lelang) untuk menunjukkan keikutsertaannya. 
                  <br/><br/>
                  Legoas mengadakan lelang dengan berbasis digital membuat pelaksanaan lelang tidak dibatasi jarak dan waktu. Peserta lelang dapat melihat unit, mendaftar, dan mengikuti lelang melalui website dan atau mobile apps milik Legoas. Peserta dapat mengikuti lelang dimanapun dan tanpa mengganggu aktifitas utamanya untuk mendapatkan produk/barang sesuai keinginannya. Dengan system online ini pula lah, peserta tidak perlu diburu oleh waktu untuk hadir ke tempat lelang. 
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
