import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { BannerAbout } from "../Components/Partial";
import Icon1 from "../../assets/image/icon/icon0.png";
import Icon2 from "../../assets/image/icon/icon12.png";
import Icon3 from "../../assets/image/icon/icon5.png";
import Icon4 from "../../assets/image/icon/icon3.png";
import Icon5 from "../../assets/image/icon/icon1.png";
import Icon6 from "../../assets/image/icon/icon4.png";
import Icon7 from "../../assets/image/icon/icon7.png";
import Icon8 from "../../assets/image/icon/icon2.png";
import Icon9 from "../../assets/image/icon/icon10.png";
import Icon10 from "../../assets/image/icon/icon8.png";
import Icon11 from "../../assets/image/icon/icon9.png";

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
                  <li>Lahan penyimpanan asset sebesar 2 hektar.</li>
                  <li>25 titik indoor dan outdoor CCTV.</li>
                  <li>Penjagaan keamanan 24/7</li>
                  <li>Aula lelang.</li>
                  <li>Kantin.</li>
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

            <Row style={{ paddingTop: 40 }}>
              <Col md={12}>
                <h3> Proses </h3>
                <p>
                  Setiap proses dilakukan menggunakan system khusus melalui
                  mobile apps sehingga kontrol dan monitoring berjalan dgn baik.
                  System kami dirancang untuk memberikan kemudahan dalam proses
                  dan juga kontrol monitoring yang baik sehingga hasilnya
                  dipastikan yang terbaik. hasil dan report dapat diakses secara
                  langsung oleh pemilik asset .
                </p>
                <hr />
              </Col>
              <Col md={6}>
                <Row style={{ paddingTop: 30 }}>
                  <Col xs={3} md={2}>
                    <Image src={Icon1} width="100%" />
                  </Col>

                  <Col xs={9} md={10}>
                    <div style={{ paddingTop: 20 }}>
                      <p> Penerimaan Kendaraan </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} md={2}>
                    <Image src={Icon2} width="100%" />
                  </Col>

                  <Col xs={9} md={10}>
                    <div style={{ paddingTop: 20 }}>
                      <p>
                        {" "}
                        Pembuatan ID kendaraan untuk pemantauan setiap proses di
                        warehouse LEGOAS{" "}
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={3} md={2}>
                    <Image src={Icon3} width="100%" />
                  </Col>

                  <Col xs={9} md={10}>
                    <div style={{ paddingTop: 20 }}>
                      <p> Persiapan Kendaraan </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={3} md={2}>
                    <Image src={Icon4} width="100%" />
                  </Col>

                  <Col xs={9} md={10}>
                    <div style={{ paddingTop: 20 }}>
                      <p>Foto</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={3} md={2}>
                    <Image src={Icon5} width="100%" />
                  </Col>

                  <Col xs={9} md={10}>
                    <div style={{ paddingTop: 20 }}>
                      <p>INSYS</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={3} md={2}>
                    <Image src={Icon6} width="100%" />
                  </Col>

                  <Col xs={9} md={10}>
                    <div style={{ paddingTop: 20 }}>
                      <p>Penetapan Hasil</p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row style={{ paddingTop: 30 }}>
                  <Col xs={3} md={2}>
                    <Image src={Icon7} width="100%" />
                  </Col>

                  <Col xs={9} md={10}>
                    <div style={{ paddingTop: 20 }}>
                      <p> Pengajuan harga & persetujuan </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3} md={2}>
                    <Image src={Icon8} width="100%" />
                  </Col>

                  <Col xs={9} md={10}>
                    <div style={{ paddingTop: 20 }}>
                      <p>List lelang</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={3} md={2}>
                    <Image src={Icon9} width="100%" />
                  </Col>

                  <Col xs={9} md={10}>
                    <div style={{ paddingTop: 20 }}>
                      <p>
                        {" "}
                        Pemilik barang dapat memantau secara realtime dari hasil
                        valuasi hingga report lelang
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={3} md={2}>
                    <Image src={Icon10} width="100%" />
                  </Col>

                  <Col xs={9} md={10}>
                    <div style={{ paddingTop: 20 }}>
                      <p>Pelaksanaan Lelang Menggunakan System Online LEGOAS</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={3} md={2}>
                    <Image src={Icon11} width="100%" />
                  </Col>

                  <Col xs={9} md={10}>
                    <div style={{ paddingTop: 20 }}>
                      <p>
                        Peserta Mengikutin Lelang Melalui Mobile Apps dan
                        Website
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Index;
