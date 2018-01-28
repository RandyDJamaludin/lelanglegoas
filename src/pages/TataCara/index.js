import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Tabs, Collapse } from "antd";
import { BannerInfo } from "../Components/Banner";
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

export class Index extends Component {
  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    function callback(key) {
      console.log(key);
    }
    return (
      <div>
        <div className="wrap-tatacara">
          <BannerInfo title="Tata Cara Lelang" />
          <div className="header">
            <Grid className="desktop-tatacaraPage" style={{paddingTop:'5%'}}>
              <Row>
                <Col xs={12} md={12}>
                  <div className="body-tatacara">
                    <Tabs
                      defaultActiveKey="1"
                      tabPosition={"left"}
                      style={{ height: "100%" }}
                    >
                      <TabPane tab="Peserta Lelang" key="1">
                        <div>
                          <Collapse
                            defaultActiveKey={["1"]}
                            onChange={callback}
                          >
                            <Panel header="Membeli barang " key="1">
                              <p>
                                <span> 1) </span> Melihat unit/barang yang
                                dilelang. sebelum mengikuti lelang, calon
                                peserta dapat melihat barang/unit yang dilelang
                                sewaktu Open house berjalan pada jam kerja.
                                biasanya open house dilakukan 3 hari sebelum
                                pelaksanaan lelang.
                              </p>
                              <p>
                                <span> 2) </span> Untuk dapat melihat
                                unit/barang yagn dilelang, calon peserta lelang
                                dapat juga melihat daftar lelang yang dapat
                                dilihat di website dan mobile apps legoas. .
                              </p>
                              <p>
                                <span> 3) </span> Jika ada barang/unit yang
                                diminati, calon peserta dapat mendaftar terlebih
                                dahulu sebagai peserta lelang dengan melakukan
                                proses pendaftaran di website dan mob apps
                                legoas dan membayar kewajiban atas paket
                                keanggotaan yang diingini.{" "}
                              </p>
                              <p>
                                <span> 4) </span> Ketika sudah menjadi peserta
                                lelang, maka peserta lelang dapat mengikuti
                                lelang on site dan online. secara onsite adalah
                                peserta lelang hadir dan datang ke tempat lelang
                                dan mengikuti lelang melalui smartphone/tablet
                                yang dimiliki atau meminjam dari Legoas. secara
                                online adalah peserta lelang dapat mengikuti
                                lelang tanpa harus datang ke tempat lelang.
                                peserta hanya perlu membuka mobile applikasi
                                atau website serta mengikuti lelang tersebut.{" "}
                              </p>
                              <p>
                                <span> 5) </span> Peserta lelang hanya dapat
                                membeli jumlah unit sesuai dengan token yang
                                dimiliki (disesuaikan dengan paket yang dibeli).{" "}
                              </p>
                              <p>
                                <span> 6) </span> Jika peserta lelang menang
                                maka diwajibkan untuk membayar total transaksi
                                tersebut maksimal 3 hari kerja dan jumlah serta
                                bukti pembayaran dapat dilakukan update melalui
                                mobile apps.{" "}
                              </p>
                              <p>
                                <span> 7) </span> jika peserta lelang tidak
                                memenangkan unit/barang yang diingini, maka uang
                                jaminan akan dikembalikan utuh kerekening
                                peserta lelang yang tercantum sewaktu
                                pendaftaran tanpa dikenakan biaya apapun.{" "}
                              </p>
                            </Panel>
                          </Collapse>
                        </div>
                      </TabPane>
                      <TabPane tab="Penjual" key="2">
                        <div>
                          <Collapse
                            defaultActiveKey={["1"]}
                            onChange={callback}
                          >
                            <Panel header="Membeli barang " key="1">
                              <p>
                                <span> 1) </span> penjual barang/unit dapat
                                mendownload mobile apps legoas.{" "}
                              </p>
                              <p>
                                <span> 2) </span> penjual dapat melakukan
                                pendaftaran sesuai dengan langkah-langkah yang
                                sudah disiapkan di mobile apps.{" "}
                              </p>
                              <p>
                                <span> 3) </span> penjual melakukan persetujuan
                                atas term & condition yang berlaku bagi penjual
                                termasuk fee yang dikenakan.{" "}
                              </p>
                              <p>
                                <span> 4) </span> ketika tim legoas sudah
                                melakukan approval untuk kondisi unit dan
                                surat-surat resmi, maka penjual dapat memilih
                                waktu yang ditentukan serta harga dasar unit
                                tersebut.{" "}
                              </p>
                              <p>
                                <span> 5) </span> jika unit penjual terjual
                                melalui lelang maka penjual akan ditransfer
                                nilai unit/barang sesuai harga terbentuk max 5
                                hari setelah hari lelang dan dikurangi biaya
                                yang dikenakan serta di transfer ke rekening
                                sesuai data sewaktu pendaftaran.{" "}
                              </p>
                            </Panel>
                          </Collapse>
                        </div>
                      </TabPane>
                    </Tabs>
                  </div>
                </Col>
              </Row>
            </Grid>

            <Grid className="mobile-tatacaraPage">
              <Row>
                <Col xs={12} md={12}>
                  <div className="body-tatacara">
                    <Tabs
                      defaultActiveKey="1"
                      tabPosition={"top"}
                      style={{ height: "100%" }}
                    >
                      <TabPane tab="Peserta Lelang" key="1">
                        <div>
                          <Collapse
                            defaultActiveKey={["1"]}
                            onChange={callback}
                          >
                            <Panel header="Membeli barang " key="1">
                              <p>
                                <span> 1) </span> Melihat unit/barang yang
                                dilelang. sebelum mengikuti lelang, calon
                                peserta dapat melihat barang/unit yang dilelang
                                sewaktu Open house berjalan pada jam kerja.
                                biasanya open house dilakukan 3 hari sebelum
                                pelaksanaan lelang.
                              </p>
                              <p>
                                <span> 2) </span> Untuk dapat melihat
                                unit/barang yagn dilelang, calon peserta lelang
                                dapat juga melihat daftar lelang yang dapat
                                dilihat di website dan mobile apps legoas. .
                              </p>
                              <p>
                                <span> 3) </span> Jika ada barang/unit yang
                                diminati, calon peserta dapat mendaftar terlebih
                                dahulu sebagai peserta lelang dengan melakukan
                                proses pendaftaran di website dan mob apps
                                legoas dan membayar kewajiban atas paket
                                keanggotaan yang diingini.{" "}
                              </p>
                              <p>
                                <span> 4) </span> Ketika sudah menjadi peserta
                                lelang, maka peserta lelang dapat mengikuti
                                lelang on site dan online. secara onsite adalah
                                peserta lelang hadir dan datang ke tempat lelang
                                dan mengikuti lelang melalui smartphone/tablet
                                yang dimiliki atau meminjam dari Legoas. secara
                                online adalah peserta lelang dapat mengikuti
                                lelang tanpa harus datang ke tempat lelang.
                                peserta hanya perlu membuka mobile applikasi
                                atau website serta mengikuti lelang tersebut.{" "}
                              </p>
                              <p>
                                <span> 5) </span> Peserta lelang hanya dapat
                                membeli jumlah unit sesuai dengan token yang
                                dimiliki (disesuaikan dengan paket yang dibeli).{" "}
                              </p>
                              <p>
                                <span> 6) </span> Jika peserta lelang menang
                                maka diwajibkan untuk membayar total transaksi
                                tersebut maksimal 3 hari kerja dan jumlah serta
                                bukti pembayaran dapat dilakukan update melalui
                                mobile apps.{" "}
                              </p>
                              <p>
                                <span> 7) </span> jika peserta lelang tidak
                                memenangkan unit/barang yang diingini, maka uang
                                jaminan akan dikembalikan utuh kerekening
                                peserta lelang yang tercantum sewaktu
                                pendaftaran tanpa dikenakan biaya apapun.{" "}
                              </p>
                            </Panel>
                          </Collapse>
                        </div>
                      </TabPane>
                      <TabPane tab="Penjual" key="2">
                        <div>
                          <Collapse
                            defaultActiveKey={["1"]}
                            onChange={callback}
                          >
                            <Panel header="Membeli barang " key="1">
                              <p>
                                <span> 1) </span> penjual barang/unit dapat
                                mendownload mobile apps legoas.{" "}
                              </p>
                              <p>
                                <span> 2) </span> penjual dapat melakukan
                                pendaftaran sesuai dengan langkah-langkah yang
                                sudah disiapkan di mobile apps.{" "}
                              </p>
                              <p>
                                <span> 3) </span> penjual melakukan persetujuan
                                atas term & condition yang berlaku bagi penjual
                                termasuk fee yang dikenakan.{" "}
                              </p>
                              <p>
                                <span> 4) </span> ketika tim legoas sudah
                                melakukan approval untuk kondisi unit dan
                                surat-surat resmi, maka penjual dapat memilih
                                waktu yang ditentukan serta harga dasar unit
                                tersebut.{" "}
                              </p>
                              <p>
                                <span> 5) </span> jika unit penjual terjual
                                melalui lelang maka penjual akan ditransfer
                                nilai unit/barang sesuai harga terbentuk max 5
                                hari setelah hari lelang dan dikurangi biaya
                                yang dikenakan serta di transfer ke rekening
                                sesuai data sewaktu pendaftaran.{" "}
                              </p>
                            </Panel>
                          </Collapse>
                        </div>
                      </TabPane>
                    </Tabs>
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
