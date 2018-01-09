import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import Logo from '../../assets/image/logo-dummy.png'

export class Footer extends Component {
    
    render() { 
        return (
            <div className='wrap-footer'>
                <Grid>
                  <Row className='logo-footer'>
                    <Col xs={4} md={4}></Col>
                    <Col xs={12} md={4}>
                      <center>
                      <div className='logo-addins'>
                        <Image src={Logo} width='50%'/>
                      </div>
                        <div className='body-client'>
                          <p className='street'> Lorem ipsum No 7, 70094 </p>
                          <p className='phone'> (021) 305 - 0554 <span className='orange'> hello@telecreative.com </span></p> 
                        </div>
                      </center>
                    </Col>
                    <Col xs={4} md={4}></Col>
                  </Row>
                  <Row className='border'>
                    <Col xs={6} md={3} mdPush={1}>
                      <p> About </p>
                      <p> Contact </p>
                      <p> Careers </p>
                      <p> Team </p>
                      <p> Press Release </p>
                      <p> In the media </p>
                      <p> Testimonials </p>
                    </Col>
                    <Col xs={6} md={3} mdPush={1}>
                      <p> Become a seller </p>
                      <p> Affilates </p>
                      <p> Resource center </p>
                      <p> Seller resources </p>
                      <p> Featured partners </p>
                      <p> Nonprofits </p>
                      <p> Help </p>
                    </Col>
                    <Col xs={6} md={3} mdPush={1}>
                      <p> Subscribe Our Newslatter </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={12}>
                      <p className='footer'> @ Telecreative inc </p>
                    </Col>
                  </Row>
                </Grid>
              </div>
        )
    }
}
 
export default Footer;