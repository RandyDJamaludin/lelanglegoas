import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Row, Col, Image, Navbar, NavDropdown } from "react-bootstrap";
import { Carousel, Button, Input, Icon } from "antd";
import Logo from "../../assets/image/logo.jpeg";
import TiFacebook from "react-icons/lib/ti/social-facebook";
import TiYoutube from "react-icons/lib/ti/social-youtube";
import TiInstagram from "react-icons/lib/ti/social-instagram";
import TiTwitter from "react-icons/lib/ti/social-twitter";
import TiHeart from "react-icons/lib/ti/heart-full-outline";

export class Navigation extends Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div>
        <div className="wrap-nav">
          <Navbar
            inverse
            collapseOnSelect
            style={{ zIndex: "99" }}
            id="navbar"
            onSelect={this.handleSelect}
          >
            <Navbar.Header>
              <Navbar.Brand>
                <NavLink to="/">
                  <Image src={Logo} className="logo" width="130px" />
                </NavLink>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <ul className="nav navbar-nav right">
                <li eventkey={1}>
                  <NavLink to="/">
                    Beranda
                  </NavLink>
                </li>

                <li eventkey={2}>
                  <NavLink to="/jadwal">
                    Jadwal Lelang
                  </NavLink>
                </li>

                <NavDropdown title="Info Lelang" id="basic-nav-dropdown">
                  <li>
                    <NavLink
                      to="/pengertian-lelang">
                      Pengertian Lelang
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tatacara-lelang">
                      Tata Cara Lelang
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/peraturan-lelang">
                      Peraturan Lelang
                    </NavLink>
                  </li>
                </NavDropdown>

                <li eventkey={4}>
                  <NavLink to="/lokasi">
                    Lokasi Lelang
                  </NavLink>
                </li>

                <li eventkey={5}>
                  <NavLink to="/tentang-kami">
                    Tentang Kami
                  </NavLink>
                </li>

                  {/*<li eventkey={5}>
                  <NavLink to="/kontak">
                    Kontak Kami
                  </NavLink>
                </li>
                */}

                <li eventkey={6}>
                  <NavLink to="/login">
                    Login
                  </NavLink>
                </li>

                <li eventkey={7}>
                  <NavLink to="/register-choose">
                    Register
                  </NavLink>
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export class Banner extends Component {
  render() {
    return (
      <div>
        <div className="banner_background">
          <Carousel autoplay>
            <div className="containBanner1">
              <Grid>
                <h4> MOBIL MEWAH DAN MURAH </h4>
                <h1> AYO BID SEKARANG </h1>
                <p>
                  {" "}
                  Dapatkan Mobil impian anda dengan harga yang <br />
                  sesuai dengan keinginan anda{" "}
                </p>
                <Button type="primary">BID SEKARANG</Button>
              </Grid>
            </div>
            <div className="containBanner2">
              <Grid>
                <h4> MOBIL MEWAH DAN MURAH </h4>
                <h1> AYO BID SEKARANG </h1>
                <p>
                  {" "}
                  Dapatkan Mobil impian anda dengan harga yang <br />
                  sesuai dengan keinginan anda{" "}
                </p>
                <Button type="primary">BID SEKARANG</Button>
              </Grid>
            </div>
            <div className="containBanner3">
              <Grid>
                <h4> MOBIL MEWAH DAN MURAH </h4>
                <h1> AYO BID SEKARANG </h1>
                <p>
                  {" "}
                  Dapatkan Mobil impian anda dengan harga yang <br />
                  sesuai dengan keinginan anda{" "}
                </p>
                <Button type="primary">BID SEKARANG</Button>
              </Grid>
            </div>
            <div className="containBanner4">
              <Grid>
                <h4> MOBIL MEWAH DAN MURAH </h4>
                <h1> AYO BID SEKARANG </h1>
                <p>
                  {" "}
                  Dapatkan Mobil impian anda dengan harga yang <br />
                  sesuai dengan keinginan anda{" "}
                </p>
                <Button type="primary">BID SEKARANG</Button>
              </Grid>
            </div>
            <div className="containBanner5">
              <Grid>
                <h4> MOBIL MEWAH DAN MURAH </h4>
                <h1> AYO BID SEKARANG </h1>
                <p>
                  {" "}
                  Dapatkan Mobil impian anda dengan harga yang <br />
                  sesuai dengan keinginan anda{" "}
                </p>
                <Button type="primary">BID SEKARANG</Button>
              </Grid>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export class BannerInfo extends Component {
  render() {
    return (
      <div id="top-picture">
        <div className="content">
          <div className="card">
            <Image src={this.props.logo} style={{ width: 130 }} />
            <h1 className="title" style={{ color: "#fff" }}>
              {this.props.title}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export class BannerAbout extends Component {
  render() {
    return (
      <div className="bannerAbout">
        <div id="top-pictureAbout" className="desktop">
          <Grid>
            <Row>
              <Col md={6} />
              <Col md={6}>
                <div className="shadow" style={{ padding: 50 }}>
                  <h3> WHO WE ARE ?</h3>
                  <p>
                  LEGOAS memiliki ijin operasional Balai Lelang yang disahkan melalui Keputusan Menteri Keuangan no 28/KM.6/2018.  
                  Dalam hal ini, LEGOAS menjadi perusahaan yang berada dalam naungan pemerintah sehingga peserta tidak perlu khawatir atas kredibilitas LEGOAS karena sebagai peserta lelang juga dilindungi haknya oleh Negara. 
                  Dengan masuknya LEGOAS dalam pengawasan negara, maka kewajiban dari LEGOAS juga dalam pelaksanaan lelang dan termasuk memeriksa keabsahan kepemilikan barang tersebut sehingga peserta tidak perlu dikhawatirkan dalam keabsahan kepemilikan tersebut. 
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

        <div id="top-pictureAbout" className="mobile">
          <Grid>
            <Row>
              <Col md={6} />
              <Col md={6}>
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
          </Grid>
        </div>
      </div>
    );
  }
}

export class Footer extends Component {
  render() {
    return (
      <div className="wrap-footer">
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <div className="logo-addins">
                <Image src={Logo} width="50%" />
              </div>
              <div className="body-client">
                <p className="street">
                  Legoas adalah salah satu perusahaan yang menyelenggarakan
                  penjualan asset dengan sistem lelang.
                </p>
                <p> </p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <p class="title"> Legoas </p>
              <p><NavLink class="footer" to="/">Beranda</NavLink></p>
              <p><NavLink class="footer" to="/jadwal">Jadwal Lelang</NavLink></p>
              <p><NavLink class="footer" to="/lokasi">Lokasi Lelang</NavLink></p>
            </Col>
            <Col xs={6} md={3}>
              <p class="title"> Bantuan </p>
              <p><NavLink class="footer" to="/">Pengertian Lelang</NavLink></p>
              <p><NavLink class="footer" to="/">Tata Cara Lelang</NavLink></p>
              <p><NavLink class="footer" to="/">Peraturan Lelang</NavLink></p>
            </Col>
            <Col xs={12} md={3}>
              <p> Subscribe Our Newslatter </p>
              <Input
                addonAfter={<Icon type="mail" />}
                className="footer-email"
                placeholder="Type your e-mail here"
              />
              <p className="social-media">
                <TiFacebook />
              </p>
              <p className="social-media">
                <TiYoutube />
              </p>
              <p className="social-media">
                <TiInstagram />
              </p>
              <p className="social-media">
                <TiTwitter />
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <div className="wrap-footer">
                <p className="footer">
                  {" "}
                  Made with{" "}
                  <span>
                    <TiHeart />
                  </span>{" "}
                  by <span> Telecreative </span>{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
