import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { Tabs } from "antd";
import { BannerInfo } from "../Components/Partial";

//Icon Pembeli

import Image1 from "../../assets/image/Pembeli/icon1.png";
import Image2 from "../../assets/image/Pembeli/icon2.png";
import Image3 from "../../assets/image/Pembeli/icon3.png";
import Image4 from "../../assets/image/Pembeli/icon4.png";
import Image5 from "../../assets/image/Pembeli/icon5.png";
import Image6 from "../../assets/image/Pembeli/icon6.png";
import Image7 from "../../assets/image/Pembeli/icon7.png";


//Icon Penjual
import IconPenjual1 from "../../assets/image/Penjual/download.png";
import IconPenjual2 from "../../assets/image/Penjual/persetujuan.png";
import IconPenjual3 from "../../assets/image/Penjual/transfer.png";

const TabPane = Tabs.TabPane;

export class Index extends Component {
  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    return (
      <div>
        <div className="wrap-tatacara">
          <BannerInfo logo={Image3} title="TATA CARA LELANG" />
          <div className="header">
            <Grid className="desktop-tatacaraPage" style={{ paddingTop: "5%" }}>
              <Row>
                <Col xs={12} md={12}>
                  <div className="body-tatacara">
                    <Tabs
                      defaultActiveKey="1"
                      tabPosition={"left"}
                      style={{ height: "100%" }}
                    >
                      <TabPane tab="Peserta Lelang" key="1">
                        <Row>
                          <Col md={2}>
                            <Image
                              src={Image1}
                              alt="Logo"
                              style={{ width: "100%" }}
                            />
                          </Col>
                          <Col md={10}>
                            <div style={{ marginTop: "20px" }}>
                              <h4> Melihat Unit </h4>
                              <p>
                                Melihat unit/barang yang dilelang. sebelum
                                mengikuti lelang, calon peserta dapat melihat
                                barang/unit yang dilelang sewaktu Open house
                                berjalan pada jam kerja. biasanya open house
                                dilakukan 3 hari sebelum pelaksanaan lelang.
                              </p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={2}>
                            <Image
                              src={Image2}
                              alt="Logo"
                              style={{ width: "100%" }}
                            />
                          </Col>
                          <Col md={10}>
                            <div style={{ marginTop: "30px" }}>
                              <h4>
                                {" "}
                                Melihat unit/barang yang dilelang{" "}
                              </h4>
                              <p>
                                calon peserta lelang dapat juga melihat daftar
                                lelang yang dapat dilihat di website dan mobile
                                apps legoas.
                              </p>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={2}>
                            <Image
                              src={Image3}
                              alt="Logo"
                              style={{ width: "100%" }}
                            />
                          </Col>
                          <Col md={10}>
                            <div style={{ marginTop: "30px" }}>
                              <h4> Jika ada barang/unit yang diminati </h4>
                              <p>
                                calon peserta dapat mendaftar terlebih dahulu
                                sebagai peserta lelang dengan melakukan proses
                                pendaftaran di website dan mob apps legoas dan
                                membayar kewajiban atas paket keanggotaan yang
                                diingini.
                              </p>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={2}>
                            <Image
                              src={Image4}
                              alt="Logo"
                              style={{ width: "100%" }}
                            />
                          </Col>
                          <Col md={10}>
                            <div style={{ marginTop: "30px" }}>
                              <h4> Ketika sudah menjadi peserta lelang</h4>
                              <p>
                                maka peserta lelang dapat mengikuti lelang on
                                site dan online. secara onsite adalah peserta
                                lelang hadir dan datang ke tempat lelang dan
                                mengikuti lelang melalui smartphone/tablet yang
                                dimiliki atau meminjam dari Legoas. secara
                                online adalah peserta lelang dapat mengikuti
                                lelang tanpa harus datang ke tempat lelang.
                                peserta hanya perlu membuka mobile applikasi
                                atau website serta mengikuti lelang tersebut.
                              </p>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={2}>
                            <Image
                              src={Image5}
                              alt="Logo"
                              style={{ width: "100%" }}
                            />
                          </Col>
                          <Col md={10}>
                            <div style={{ marginTop: "30px" }}>
                              <h4> Peserta lelang hanya dapat membeli</h4>
                              <p>
                                jumlah unit sesuai dengan token yang dimiliki
                                (disesuaikan dengan paket yang dibeli
                              </p>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={2}>
                            <Image
                              src={Image6}
                              alt="Logo"
                              style={{ width: "100%" }}
                            />
                          </Col>
                          <Col md={10}>
                            <div style={{ marginTop: "30px" }}>
                              <h4>
                                Jika peserta lelang menang maka diwajibkan untuk
                              </h4>
                              <p>
                                membayar total transaksi tersebut maksimal 3
                                hari kerja dan jumlah serta bukti pembayaran
                                dapat dilakukan update melalui mobile apps
                              </p>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={2}>
                            <Image
                              src={Image7}
                              alt="Logo"
                              style={{ width: "100%" }}
                            />
                          </Col>
                          <Col md={10}>
                            <div style={{ marginTop: "30px" }}>
                              <h4>
                                jika peserta lelang tidak memenangkan
                                unit/barang yang diingini
                              </h4>
                              <p>
                                maka uang jaminan akan dikembalikan utuh
                                kerekening peserta lelang yang tercantum sewaktu
                                pendaftaran tanpa dikenakan biaya apapun.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </TabPane>

                      <TabPane tab="Penjual" key="2">
                        <div>
                          <Row>
                            <Col md={2}>
                              <Image
                                src={IconPenjual1}
                                alt="Logo"
                                style={{ width: "100%" }}
                              />
                            </Col>
                            <Col md={10}>
                              <div style={{ marginTop: "20px" }}>
                                <h4>Download Apps</h4>
                                <p>
                                  penjual barang/unit dapat mendownload mobile
                                  apps legoas penjual dapat melakukan
                                  pendaftaran sesuai dengan langkah-langkah yang
                                  sudah disiapkan di mobile apps.
                                </p>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              <Image
                                src={IconPenjual2}
                                alt="Logo"
                                style={{ width: "100%" }}
                              />
                            </Col>
                            <Col md={10}>
                              <div style={{ marginTop: "30px" }}>
                                <h4>penjual melakukan persetujuan</h4>
                                <p>
                                  atas term & condition yang berlaku bagi
                                  penjual termasuk fee yang dikenakan. ketika
                                  tim legoas sudah melakukan approval untuk
                                  kondisi unit dan surat-surat resmi, maka
                                  penjual dapat memilih waktu yang ditentukan
                                  serta harga dasar unit tersebut.
                                </p>
                              </div>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={2}>
                              <Image
                                src={IconPenjual3}
                                alt="Logo"
                                style={{ width: "100%" }}
                              />
                            </Col>
                            <Col md={10}>
                              <div style={{ marginTop: "30px" }}>
                                <h4> jika unit penjual terjual </h4>
                                <p>
                                  melalui lelang maka penjual akan ditransfer
                                  nilai unit/barang sesuai harga terbentuk max 5
                                  hari setelah hari lelang dan dikurangi biaya
                                  yang dikenakan serta di transfer ke rekening
                                  sesuai data sewaktu pendaftaran.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </TabPane>
                    </Tabs>
                  </div>
                </Col>
              </Row>
            </Grid>
            <Grid className="mobile-tatacaraPage">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Peserta Lelang" key="1">
                  <Row>
                    <Col xs={6} md={2}>
                      <Image
                        src={Image1}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col xs={6} md={10}>
                      <div style={{ marginTop: "20px" }}>
                        <h4> Melihat Unit </h4>
                        <p>
                          Melihat unit/barang yang dilelang. sebelum mengikuti
                          lelang, calon peserta dapat melihat barang/unit yang
                          dilelang sewaktu Open house berjalan pada jam kerja.
                          biasanya open house dilakukan 3 hari sebelum
                          pelaksanaan lelang.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={2}>
                      <Image
                        src={Image2}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col xs={6} md={10}>
                      <div style={{ marginTop: "30px" }}>
                        <h4> Untuk dapat melihat unit/barang yang dilelang </h4>
                        <p>
                          calon peserta lelang dapat juga melihat daftar lelang
                          yang dapat dilihat di website dan mobile apps legoas.
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6} md={2}>
                      <Image
                        src={Image2}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col xs={6} md={10}>
                      <div style={{ marginTop: "30px" }}>
                        <h4> Jika ada barang/unit yang diminati </h4>
                        <p>
                          calon peserta dapat mendaftar terlebih dahulu sebagai
                          peserta lelang dengan melakukan proses pendaftaran di
                          website dan mob apps legoas dan membayar kewajiban
                          atas paket keanggotaan yang diingini.
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6} md={2}>
                      <Image
                        src={Image2}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col xs={6} md={10}>
                      <div style={{ marginTop: "30px" }}>
                        <h4> Ketika sudah menjadi peserta lelang</h4>
                        <p>
                          maka peserta lelang dapat mengikuti lelang on site dan
                          online. secara onsite adalah peserta lelang hadir dan
                          datang ke tempat lelang dan mengikuti lelang melalui
                          smartphone/tablet yang dimiliki atau meminjam dari
                          Legoas. secara online adalah peserta lelang dapat
                          mengikuti lelang tanpa harus datang ke tempat lelang.
                          peserta hanya perlu membuka mobile applikasi atau
                          website serta mengikuti lelang tersebut.
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6} md={2}>
                      <Image
                        src={Image5}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col xs={6} md={10}>
                      <div style={{ marginTop: "30px" }}>
                        <h4> Peserta lelang hanya dapat membeli</h4>
                        <p>
                          jumlah unit sesuai dengan token yang dimiliki
                          (disesuaikan dengan paket yang dibeli
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6} md={2}>
                      <Image
                        src={Image6}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col xs={6} md={10}>
                      <div style={{ marginTop: "30px" }}>
                        <h4>
                          Jika peserta lelang menang maka diwajibkan untuk
                        </h4>
                        <p>
                          membayar total transaksi tersebut maksimal 3 hari
                          kerja dan jumlah serta bukti pembayaran dapat
                          dilakukan update melalui mobile apps
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6} md={2}>
                      <Image
                        src={Image2}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col xs={6} md={10}>
                      <div style={{ marginTop: "30px" }}>
                        <h4>
                          jika peserta lelang tidak memenangkan unit/barang yang
                          diingini
                        </h4>
                        <p>
                          maka uang jaminan akan dikembalikan utuh kerekening
                          peserta lelang yang tercantum sewaktu pendaftaran
                          tanpa dikenakan biaya apapun.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Penjual" key="2">
                  <Row>
                    <Col xs={6} md={2}>
                      <Image
                        src={Image1}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col xs={6} md={10}>
                      <div style={{ marginTop: "20px" }}>
                        <h4>Download Apps</h4>
                        <p>
                          penjual barang/unit dapat mendownload mobile apps
                          legoas penjual dapat melakukan pendaftaran sesuai
                          dengan langkah-langkah yang sudah disiapkan di mobile
                          apps.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={2}>
                      <Image
                        src={Image2}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col xs={6} md={10}>
                      <div style={{ marginTop: "30px" }}>
                        <h4>penjual melakukan persetujuan</h4>
                        <p>
                          atas term & condition yang berlaku bagi penjual
                          termasuk fee yang dikenakan. ketika tim legoas sudah
                          melakukan approval untuk kondisi unit dan surat-surat
                          resmi, maka penjual dapat memilih waktu yang
                          ditentukan serta harga dasar unit tersebut.
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6} md={2}>
                      <Image
                        src={Image2}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col xs={6} md={10}>
                      <div style={{ marginTop: "30px" }}>
                        <h4> jika unit penjual terjual </h4>
                        <p>
                          melalui lelang maka penjual akan ditransfer nilai
                          unit/barang sesuai harga terbentuk max 5 hari setelah
                          hari lelang dan dikurangi biaya yang dikenakan serta
                          di transfer ke rekening sesuai data sewaktu
                          pendaftaran.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
