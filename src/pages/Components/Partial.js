import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Grid, Row, Col, Image, Navbar, NavDropdown } from "react-bootstrap"
import { Carousel, Button, Input, Icon } from 'antd'
import Logo from '../../assets/image/logo.jpeg'
import TiFacebook from 'react-icons/lib/ti/social-facebook'
import TiYoutube from 'react-icons/lib/ti/social-youtube'
import TiInstagram from 'react-icons/lib/ti/social-instagram'
import TiTwitter from 'react-icons/lib/ti/social-twitter'
import TiHeart from 'react-icons/lib/ti/heart-full-outline'
import MdLocation from 'react-icons/lib/md/location-on'


export class Navigation extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
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
              <NavLink to='/'>
                <Image src={Logo} className='logo' width='100px'/>  
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="nav navbar-nav right"> 
							<li eventkey={1}>
                <NavLink to="/" activeClassName="anchorActive">
                  Beranda
                </NavLink>
              </li>


              <li eventkey={2}>
                <NavLink to="/jadwal" activeClassName="anchorActive">
                  Jadwal Lelang
                </NavLink>
              </li>

              <NavDropdown eventKey={3} title="Info Lelang" id="basic-nav-dropdown">
                
                <li eventKey={3.1} >
                  <NavLink to="/pengertian-lelang" activeClassName="anchorActive">
                    Pengertian Lelang
                  </NavLink>
                </li>

                <li eventKey={3.2}>
                  <NavLink to="/tatacara-lelang" activeClassName="anchorActive">
                    Tata Cara Lelang
                  </NavLink>
                </li>

                <li eventKey={3.3}>
                  <NavLink to="/peraturan-lelang"activeClassName="anchorActive">
                    Peraturan Lelang
                  </NavLink>
                </li>
              
              </NavDropdown>

              <li eventkey={3}>
                <NavLink to="/lokasi" activeClassName="anchorActive">
                  Lokasi Lelang
                </NavLink>
              </li>

              <li eventkey={4}>
                <NavLink to="/tentang-kami" activeClassName="anchorActive">
                  Tentang Kami
                </NavLink>
              </li>

              {/*<li eventkey={5}>
                <NavLink to="/kontak" activeClassName="anchorActive">
                  Kontak Kami
                </NavLink>
              </li>
              */}

              <li eventkey={6}>
                <NavLink to="/login" activeClassName="anchorActive">
                  Login
                </NavLink>
              </li>


              <li eventkey={7}>
                <NavLink to="/register-choose" activeClassName="anchorActive">
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
          <div className='banner_background'>
            <Carousel autoplay>
              <div className='containBanner1'>
                <h4> MOBIL MEWAH DAN MURAH </h4>
                <h1> AYO BID SEKARANG </h1>
                <p> Dapatkan Mobil impian anda dengan harga yang <br/>
                sesuai dengan keinginan anda </p>   
                <Button type="primary">BID SEKARANG</Button>
              </div>
              <div className='containBanner2'>
                <h4> MOBIL MEWAH DAN MURAH </h4>
                <h1> AYO BID SEKARANG </h1>
                <p> Dapatkan Mobil impian anda dengan harga yang <br/>
                sesuai dengan keinginan anda </p>   
                <Button type="primary">BID SEKARANG</Button>
              </div>
            </Carousel>
          </div>
        </div>
        )
    }
}
 
export class BannerInfo extends Component{
  render(){
    return(
      <div id="top-picture">
        <div className="content">
          <div className="card">
            <h1 className="title" style={{ color: "#fff" }}>
              {this.props.title}
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export class Footer extends Component {
    
    render() { 
        return (
            <div className='wrap-footer'>
                <Grid>
                  <Row className='border'>

                    <Col xs={12} md={3}>
                      <div className='logo-addins'>
                        <Image src={Logo} width='50%'/>
                      </div>
                      <div className='body-client'>
                        <p className='street'> Legoas adalah salah satu perusahaan yang menyelenggarakan penjualan asset dengan sistem lelang.  </p>
                        <p> <MdLocation/> Jl. Raya Kaliabang no. 45 Bekasi, 13132 </p>
                      </div>
                    </Col>
                    <Col xs={6} md={3}>
                      <p className='title'> BANTUAN </p> 
                      <p> Info Lelang </p>
                      <p> Jadwal Lelang </p>
                    </Col>
                    <Col xs={6} md={3}>
                      <p className='title'> BANTUAN </p> 
                      <p> Contact </p>
                      <p> Help </p>
                    </Col>
                    <Col xs={12} md={3}>
                      <p> Subscribe Our Newslatter </p>
                      <Input addonAfter={<Icon type="mail" />} className='footer-email' placeholder='Type your e-mail here' />
                        <p className='social-media'><TiFacebook/></p>
                        <p className='social-media'><TiYoutube/></p>
                        <p className='social-media'><TiInstagram/></p>
                        <p className='social-media'><TiTwitter/></p>
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col xs={12} md={12}>
                      <div className='wrap-footer'>
                        <p className='footer'> Made with <span><TiHeart/></span> by <span> Telecreative </span> </p>
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </div>
        )
    }
}
