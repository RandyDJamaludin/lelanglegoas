import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Row, Col, Image, Nav, NavItem, Navbar, NavDropdown, MenuItem } from "react-bootstrap";
import { Carousel, Input, Icon } from "antd";
import Logo from "../../assets/image/logo.jpeg";
import TiFacebook from "react-icons/lib/ti/social-facebook";
import TiInstagram from "react-icons/lib/ti/social-instagram";
import TiTwitter from "react-icons/lib/ti/social-twitter";

//component Navigation(header)
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
                <a href="/">
                  <Image src={Logo} className="logo" width="130px" />
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="/">
                  Beranda
                </NavItem>
                <NavItem eventKey={2} href="/jadwal">
                  Jadwal Lelang
                </NavItem>
                <NavDropdown eventKey={3} title="Info Lelang" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1} href="/pengertian-lelang" >Pengertian Lelang</MenuItem>
                  <MenuItem eventKey={3.2} href="/tatacara-lelang" >Tata Cara Lelang</MenuItem>
                  <MenuItem eventKey={3.3} href="/peraturan-lelang" >Peraturan Lelang</MenuItem>
                </NavDropdown>
                <NavItem eventKey={4} href="/lokasi">
                  Lokasi Lelang
                </NavItem>
                <NavItem eventKey={5} href="/tentang-kami">
                  Tentang Kami
                </NavItem>
                {/* <NavItem eventKey={5} href="/kontak">
                  Kontak Kami
                </NavItem> */}
                <NavItem eventKey={6} href="https://lelang.legoas.co.id/Account/Login" target="_blank">
                  Login
                </NavItem>
                <NavItem eventKey={7} href="https://lelang.legoas.co.id/Auction/Bidder/Register" target="_blank">
                  Register
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

//component Banner at Landing Page
export class Banner extends Component {
  render() {
    return (
      <div>
        <div className="banner_background">
          <Carousel>
            {/* Banner 1 */}
            <div className="containBanner1"></div>
            {/* Banner 2 */}
            <div className="containBanner2"></div>
            {/* Banner 3 */}
            <div className="containBanner3"></div>
            {/* Banner 4 */}
            <div className="containBanner4"></div>
          </Carousel>
        </div>
      </div>
    );
  }
}

//componen Banner at Pengertian & peraturan & tatacara lelang page
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

// export class BannerAbout extends Component {
//   render() {
//     return (
//       <div className="bannerAbout">
//         <div id="top-pictureAbout" className="desktop">
//           <Grid>
//             <Row>
//               <Col md={6} />
//               <Col md={6}>
//                 <div className="shadow" style={{ padding: 50 }}>
//                   <h3> WHO WE ARE ?</h3>
//                   <p>
//                     LEGOAS memiliki ijin operasional Balai Lelang yang disahkan
//                     melalui Keputusan Menteri Keuangan no 28/KM.6/2018. Dalam
//                     hal ini, LEGOAS menjadi perusahaan yang berada dalam naungan
//                     pemerintah sehingga peserta tidak perlu khawatir atas
//                     kredibilitas LEGOAS karena sebagai peserta lelang juga
//                     dilindungi haknya oleh Negara. Dengan masuknya LEGOAS dalam
//                     pengawasan negara, maka kewajiban dari LEGOAS juga dalam
//                     pelaksanaan lelang dan termasuk memeriksa keabsahan
//                     kepemilikan barang tersebut sehingga peserta tidak perlu
//                     dikhawatirkan dalam keabsahan kepemilikan tersebut.
//                   </p>
//                 </div>
//               </Col>
//             </Row>
//           </Grid>
//         </div>

//         <div id="top-pictureAbout" className="mobile">
//           <Grid>
//             <Row>
//               <Col md={6} />
//               <Col md={6}>
//                 <div className="shadow">
//                   <h3> WHO WE ARE ?</h3>
//                   <p>
//                     LEGOAS Didirikan untuk memberikan solusi bagi pemilik barang
//                     untuk menjual assetnya dengan cepat dan transparan terhadap
//                     proses dan harga yang terbentuk. LEGOAS mengusung dunia
//                     perlelangan dengan konsep proses digital terbaik pada saat
//                     ini berdasarkan system IT, sumberdaya manusia yang
//                     berpengalaman dalam dunia lelang, dan mengutamakan kepuasan
//                     bagi pelanggan. LEGOAS hadir untuk memberikan kemudahan
//                     Anda.
//                   </p>
//                 </div>
//               </Col>
//             </Row>
//           </Grid>
//         </div>
//       </div>
//     );
//   }
// }


//component footer
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
              <p className="title"> Legoas </p>
              <p>
                <NavLink className="footer" to="/">
                  Beranda
                </NavLink>
              </p>
              <p>
                <NavLink className="footer" to="/jadwal">
                  Jadwal Lelang
                </NavLink>
              </p>
              <p>
                <NavLink className="footer" to="/lokasi">
                  Lokasi Lelang
                </NavLink>
              </p>
            </Col>
            <Col xs={6} md={3}>
              <p className="title"> Bantuan </p>
              <p>
                <NavLink className="footer" to="/pengertian-lelang">
                  Pengertian Lelang
                </NavLink>
              </p>
              <p>
                <NavLink className="footer" to="/tatacara-lelang">
                  Tata Cara Lelang
                </NavLink>
              </p>
              <p>
                <NavLink className="footer" to="/peraturan-lelang">
                  Peraturan Lelang
                </NavLink>
              </p>
            </Col>
            <Col xs={12} md={3}>
              <p> Subscribe Our Newsletter </p>
              <Input
                addonAfter={<Icon type="mail" onClick={() => alert("Terimakasih sudah subscribe Legoas")} />}
                className="footer-email"
                placeholder="Type your e-mail here"
              />
              <p></p> {/* space between input type and button social */}
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
