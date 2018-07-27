import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Row, Col, Image, Navbar, NavDropdown } from "react-bootstrap";
import { Carousel, Input, Icon } from "antd";
import Logo from "../../assets/image/logo.jpeg";
import TiFacebook from "react-icons/lib/ti/social-facebook";
import TiInstagram from "react-icons/lib/ti/social-instagram";
import TiTwitter from "react-icons/lib/ti/social-twitter";

export class Navigation extends Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
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
                  <NavLink to="/">Beranda</NavLink>
                </li>

                <li eventkey={2}>
                  <NavLink to="/jadwal">Jadwal Lelang</NavLink>
                </li>

                <NavDropdown title="Info Lelang" id="basic-nav-dropdown">
                  <li>
                    <NavLink to="/pengertian-lelang">Pengertian Lelang</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tatacara-lelang">Tata Cara Lelang</NavLink>
                  </li>
                  <li>
                    <NavLink to="/peraturan-lelang">Peraturan Lelang</NavLink>
                  </li>
                </NavDropdown>

                <li eventkey={4}>
                  <NavLink to="/lokasi">Lokasi Lelang</NavLink>
                </li>

                <li eventkey={5}>
                  <NavLink to="/tentang-kami">Tentang Kami</NavLink>
                </li>

                {/*<li eventkey={5}>
                  <NavLink to="/kontak">
                    Kontak Kami
                  </NavLink>
                </li>
                */}

                <li eventkey={6}>
                  <NavLink
                    to="https://lelang.legoas.co.id/Account/Login"
                    target="_blank"
                  >
                    Login
                  </NavLink>
                </li>

                <li eventkey={7}>
                  <NavLink
                    to="https://lelang.legoas.co.id/Auction/Bidder/Register"
                    target="_blank"
                  >
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
          <Carousel>
            <div className="containBanner1"></div>
            <div className="containBanner2"></div>
            <div className="containBanner3"></div>
            <div className="containBanner4"></div>
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
                Market-place pertama di Indonesia untuk menjual dan membeli kendaraan melalui Lelang
                </p>
                <p> </p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <p class="title"> Legoas </p>
              <p>
                <NavLink class="footer" to="/">
                  Beranda
                </NavLink>
              </p>
              <p>
                <NavLink class="footer" to="/jadwal">
                  Jadwal Lelang
                </NavLink>
              </p>
              <p>
                <NavLink class="footer" to="/lokasi">
                  Lokasi Lelang
                </NavLink>
              </p>
            </Col>
            <Col xs={6} md={3}>
              <p class="title"> Bantuan </p>
              <p>
                <NavLink class="footer" to="/pengertian-lelang">
                  Pengertian Lelang
                </NavLink>
              </p>
              <p>
                <NavLink class="footer" to="/tatacara-lelang">
                  Tata Cara Lelang
                </NavLink>
              </p>
              <p>
                <NavLink class="footer" to="/peraturan-lelang">
                  Peraturan Lelang
                </NavLink>
              </p>
            </Col>
            <Col xs={12} md={3}>
              <p> Subscribe Our Newslatter </p>
              <Input
                onBlur={() => alert("Terimakasih sudah subscribe Legoas")}
                addonAfter={<Icon type="mail" />}
                className="footer-email"
                placeholder="Type your e-mail here"
              />
              <p className="social-media">
                <NavLink
                  to="https://www.facebook.com/Legoas-Indonesia-400497903760852/"
                  target="_blank"
                >
                  <TiFacebook />
                </NavLink>
              </p>
              <p className="social-media">
                <NavLink
                  to="https://www.instagram.com/legoasindonesia/"
                  target="_blank"
                >
                  <TiInstagram />
                </NavLink>
              </p>
              <p className="social-media">
                <NavLink
                  to="https://twitter.com/LegoasIndonesia?lang=en"
                  target="_blank"
                >
                  <TiTwitter />
                </NavLink>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
