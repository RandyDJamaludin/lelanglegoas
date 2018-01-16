import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Navbar, Image, NavDropdown } from "react-bootstrap"
import Logo from '../../assets/image/logo.jpeg'

class Navigation extends Component {
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

              <li eventkey={5}>
                <NavLink to="/kontak" activeClassName="anchorActive">
                  Kontak Kami
                </NavLink>
              </li>

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
 
export default Navigation;