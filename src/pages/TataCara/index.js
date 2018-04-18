import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { Tabs, Table } from "antd";
import { BannerInfo } from "../Components/Partial";

//Icon Pembeli

import Image1 from "../../assets/image/Pembeli/icon1.png";
import Image2 from "../../assets/image/Pembeli/icon2.png";
import Image3 from "../../assets/image/Pembeli/icon3.png";
import Image4 from "../../assets/image/Pembeli/icon4.png";
import Image5 from "../../assets/image/Pembeli/icon5.png";
import Image6 from "../../assets/image/Pembeli/icon6.png";
import Image7 from "../../assets/image/Pembeli/icon7.png";
import Image8 from "../../assets/image/Pembeli/icon8.png";
import Image9 from "../../assets/image/Pembeli/icon9.png";
import Image10 from "../../assets/image/Pembeli/icon10.png";


//Icon Penjual
import IconPenjual1 from "../../assets/image/Penjual/download.png";
import IconPenjual2 from "../../assets/image/Penjual/persetujuan.png";
import IconPenjual3 from "../../assets/image/Penjual/transfer.png";

const TabPane = Tabs.TabPane;

const dataSilver = [{
  key: '1',
  paket: 'Paket A',
  price: 'Rp. 1.000.000',
  address: '1 Token Motor'
}, {
  key: '2',
  paket: 'Paket B',
  price: 'Rp. 5.000.000',
  address: '1 Token Motor'
}, {
  key: '3',
  paket: 'Paket C (Hanya jika ada lelang untuk produk mobil dan motor pada waktu yang bersamaan)',
  price: 'Rp. 7.000.000',
  address: "1 Token Mobil 1 Token Motor"
}];


const dataPlatinum = [{
  key: '1',
  paket: 'PLATINUM',
  price: 'Rp. 30.000.000',
  address: 'Tidak terbatas untuk mobil dan motor.'
}];

const headerTable = [{
  title: 'Paket',
  dataIndex: 'paket',
  key: 'paket',
  width: 250,
}, {
  title: 'Deposito',
  dataIndex: 'price',
  key: 'price',
}, {
  title: 'Token yang diperoleh',
  dataIndex: 'address',
  key: 'address',
}];
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
                              <h4> Media Lelang </h4>
                              <p>
                              Seluruh proses pra lelang dan pelaksanaan lelang Legoas sepenuhnya menggunakan mobile apps dan atau website legoas. 
                              Sebelum menjadi anggota, peserta harus menyetujui syarat dan ketentuan Legoas.
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
                                Jadwal Lelang
                              </h4>
                              <p>
                                Peserta dapat melihat jadwal lelang yang akan ditampilkan oleh legoas melalui media website, mobile apps, atau surat kabar. 
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
                              <h4> Daftar Lot </h4>
                              <p>
                                Sebelum dilakukan lelang, maka Legoas akan mengeluarkan daftar barang/produk yang akan dilelang dengan jadwal tertentu. 
                                Peserta lelang dapat mencari informasi dan memanfaatkan daftar lot ini untuk mendapatkan seluruh informasi dan kondisi pada unit/produk yang diingini.
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
                              <h4> Melihat Unit</h4>
                              <p>
                                Sebelum mengikuti lelang, calon peserta dapat melihat barang/unit yang dilelang sewaktu Open house berjalan pada jam kerja sesuai informasi yang tertera pada setiap jadwal lelang. 
                                Akan tetapi biasanya open house dilakukan 2 hari sebelum pelaksanaan lelang. Informasi dan penailain kendaraan juga dapat diperoleh peserta lelang dengan mengakses melalui mobile apps dan atau website Legoas. Penilaian dan keterangan yang ada merupakan informasi. 
                                Peserta diharapkan dapat melakukan pengecekan kembali atas unit yang diminati. 
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
                              <h4> Pendaftaran keanggotaan</h4>
                              <p>
                                Jika ada barang/produk yang diminati, maka calon peserta dapat mendaftar terlebih dahulu sebagai peserta lelang dengan melakukan proses pendaftaran di website dan mob apps legoas dan membayar kewajiban atas paket keanggotaan yang diingini. 
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
                                Paket Silver
                              </h4>
                              <p>
                              Sangat cocok bagi peserta yang memiliki rencana hanya membeli 1 unit kendaraan dan atau dibawah 5 unit. Selain tidak memberatkan dalam jumlah uang jaminan, kebutuhan ini memang diperuntukkan bagi Anda yang merencanakan memiliki unit untuk digunakan sendiri.
                              </p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12}>
                            <Table dataSource={dataSilver} columns={headerTable} size="small" className="table_ant"/>
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
                                Paket Platinum
                              </h4>
                              <p>
                                Dipersembahkan bagi  pelanggan loyal LEGOAS yang membutuhkan flexibilitas dalam  membeli dalam jumlah banyak dan atau rutin dalam pembelian setiap bulannya. 
                              </p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12}>
                            <Table dataSource={dataPlatinum} columns={headerTable} size="small" className="table_ant"/>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={2}>
                            <Image
                              src={Image8}
                              alt="Logo"
                              style={{ width: "100%" }}
                            />
                          </Col>
                          <Col md={10}>
                            <div style={{ marginTop: "30px" }}>
                              <h4>
                                Cara mengikuti lelang 
                              </h4>
                              <p>
                                Ketika sudah menjadi peserta lelang, maka peserta dapat masuk kedalam lelang yang diingini/dituju sesuai jadwal yang sudah diinformasikan. Ketika Lelang dimulai, rasakan sensasi dalam mengikuti lelang. 
                              </p>
                            </div>
                          </Col>
                        </Row>


                        <Row>
                          <Col md={2}>
                            <Image
                              src={Image9}
                              alt="Logo"
                              style={{ width: "100%" }}
                            />
                          </Col>
                          <Col md={10}>
                            <div style={{ marginTop: "30px" }}>
                              <h4>
                                Peserta menang lelang
                              </h4>
                              <p>
                                Peserta yang telah memenangkan nomor Lot tertentu memiliki kewajiban untuk membayar sesuai nominal yang telah disubmit dan membayar biaya administrasi sesuai ketentuan dan jangka waktu yang telah ditentukan.
                              </p>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={2}>
                            <Image
                              src={Image10}
                              alt="Logo"
                              style={{ width: "100%" }}
                            />
                          </Col>
                          <Col md={10}>
                            <div style={{ marginTop: "30px" }}>
                              <h4>
                                Peserta tidak menang lelang
                              </h4>
                              <p>
                                Bagi peserta yang tidak memenangkan barang/produk yang diinginkan di lelang bersangkutan. Maka dapat melakukan request untuk pengembalian uang deposit tanpa dikenakan biaya sama sekali atau tetap menggunakan keanggotaan dan paket yang dimiliki untuk mengikuti lelang-lelang yang akan datang.
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
                    <Col md={2}>
                      <Image
                        src={Image1}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col md={10}>
                      <div style={{ marginTop: "20px" }}>
                        <h4> Media Lelang </h4>
                        <p>
                        Seluruh proses pra lelang dan pelaksanaan lelang Legoas sepenuhnya menggunakan mobile apps dan atau website legoas. 
                        Sebelum menjadi anggota, peserta harus menyetujui syarat dan ketentuan Legoas.
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
                          Jadwal Lelang
                        </h4>
                        <p>
                          Peserta dapat melihat jadwal lelang yang akan ditampilkan oleh legoas melalui media website, mobile apps, atau surat kabar. 
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
                        <h4> Daftar Lot </h4>
                        <p>
                          Sebelum dilakukan lelang, maka Legoas akan mengeluarkan daftar barang/produk yang akan dilelang dengan jadwal tertentu. 
                          Peserta lelang dapat mencari informasi dan memanfaatkan daftar lot ini untuk mendapatkan seluruh informasi dan kondisi pada unit/produk yang diingini.
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
                        <h4> Melihat Unit</h4>
                        <p>
                          Sebelum mengikuti lelang, calon peserta dapat melihat barang/unit yang dilelang sewaktu Open house berjalan pada jam kerja sesuai informasi yang tertera pada setiap jadwal lelang. 
                          Akan tetapi biasanya open house dilakukan 2 hari sebelum pelaksanaan lelang. Informasi dan penailain kendaraan juga dapat diperoleh peserta lelang dengan mengakses melalui mobile apps dan atau website Legoas. Penilaian dan keterangan yang ada merupakan informasi. 
                          Peserta diharapkan dapat melakukan pengecekan kembali atas unit yang diminati. 
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
                        <h4> Pendaftaran keanggotaan</h4>
                        <p>
                          Jika ada barang/produk yang diminati, maka calon peserta dapat mendaftar terlebih dahulu sebagai peserta lelang dengan melakukan proses pendaftaran di website dan mob apps legoas dan membayar kewajiban atas paket keanggotaan yang diingini. 
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
                          Paket Silver
                        </h4>
                        <p>
                        Sangat cocok bagi peserta yang memiliki rencana hanya membeli 1 unit kendaraan dan atau dibawah 5 unit. Selain tidak memberatkan dalam jumlah uang jaminan, kebutuhan ini memang diperuntukkan bagi Anda yang merencanakan memiliki unit untuk digunakan sendiri.
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <Table dataSource={dataSilver} columns={headerTable} size="small" className="table_ant"/>
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
                          Paket Platinum
                        </h4>
                        <p>
                          Dipersembahkan bagi  pelanggan loyal LEGOAS yang membutuhkan flexibilitas dalam  membeli dalam jumlah banyak dan atau rutin dalam pembelian setiap bulannya. 
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <Table dataSource={dataPlatinum} columns={headerTable} size="small" className="table_ant"/>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={2}>
                      <Image
                        src={Image8}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col md={10}>
                      <div style={{ marginTop: "30px" }}>
                        <h4>
                          Cara mengikuti lelang 
                        </h4>
                        <p>
                          Ketika sudah menjadi peserta lelang, maka peserta dapat masuk kedalam lelang yang diingini/dituju sesuai jadwal yang sudah diinformasikan. Ketika Lelang dimulai, rasakan sensasi dalam mengikuti lelang. 
                        </p>
                      </div>
                    </Col>
                  </Row>


                  <Row>
                    <Col md={2}>
                      <Image
                        src={Image9}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col md={10}>
                      <div style={{ marginTop: "30px" }}>
                        <h4>
                          Peserta menang lelang
                        </h4>
                        <p>
                          Peserta yang telah memenangkan nomor Lot tertentu memiliki kewajiban untuk membayar sesuai nominal yang telah disubmit dan membayar biaya administrasi sesuai ketentuan dan jangka waktu yang telah ditentukan.
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={2}>
                      <Image
                        src={Image10}
                        alt="Logo"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col md={10}>
                      <div style={{ marginTop: "30px" }}>
                        <h4>
                          Peserta tidak menang lelang
                        </h4>
                        <p>
                          Bagi peserta yang tidak memenangkan barang/produk yang diinginkan di lelang bersangkutan. Maka dapat melakukan request untuk pengembalian uang deposit tanpa dikenakan biaya sama sekali atau tetap menggunakan keanggotaan dan paket yang dimiliki untuk mengikuti lelang-lelang yang akan datang.
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
