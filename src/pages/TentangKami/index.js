import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
// import { BannerAbout } from "../Components/Partial";

export class Index extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
          <div className="wrap-tentangKamiPage">
            <div
              className="wrap-struktur"
              style={{ paddingTop: 20, paddingBottom: 30 }}
            >
              <div className="bannerAbout">
                <div id="top-pictureAbout" className="desktop">
                  <Row>
                    <Col xs={12} md={6} />
                    <Col xs={12} md={6}>
                      <div className="shadow" style={{ padding: 50 }}>
                        <h3> WHO WE ARE ?</h3>
                        <p>
                          LEGOAS memiliki ijin operasional Balai Lelang yang disahkan
                          melalui Keputusan Menteri Keuangan no 28/KM.6/2018. Dalam
                          hal ini, LEGOAS menjadi perusahaan yang berada dalam naungan
                          pemerintah sehingga peserta tidak perlu khawatir atas
                          kredibilitas LEGOAS karena sebagai peserta lelang juga
                          dilindungi haknya oleh Negara. Dengan masuknya LEGOAS dalam
                          pengawasan negara, maka kewajiban dari LEGOAS juga dalam
                          pelaksanaan lelang dan termasuk memeriksa keabsahan
                          kepemilikan barang tersebut sehingga peserta tidak perlu
                          dikhawatirkan dalam keabsahan kepemilikan tersebut.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div id="top-pictureAbout" className="mobile">
                  <Row>
                    <Col xs={12} md={6} />
                    <Col xs={12} md={6}>
                      <div className="shadow">
                        <h3> WHO WE ARE ?</h3>
                        <p>
                          LEGOAS Didirikan untuk memberikan solusi bagi pemilik barang
                          untuk menjual assetnya dengan cepat dan transparan terhadap
                          proses dan harga yang terbentuk. LEGOAS mengusung dunia
                          perlelangan dengan konsep proses digital terbaik pada saat
                          ini berdasarkan system IT, sumberdaya manusia yang
                          berpengalaman dalam dunia lelang, dan mengutamakan kepuasan
                          bagi pelanggan. LEGOAS hadir untuk memberikan kemudahan
                          Anda.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>        
        </Col>
        <Col xs={12} md={12}>
          <div className="wrap_tentang">
            <h4> Kenapa harus mengikuti lelang ? </h4>
            <p> Bagi peserta lelang ada kelebihan dimana biasanya 
                harga yang diperoleh relatif lebih murah 
                dibandingkan harga dipasaran. 
                Dan dengan konsep lelang adalah barang/produk tersebut 
                adalah ‘as is’ atau apa adanya, maka hal tersebut memberikan keleluasaan 
                bagi peserta lelang untuk mencari 
                dengan kondisi dan harga sesuai yang diingini. </p>
          </div>
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default Index;
