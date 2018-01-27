import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import Logo from '../../assets/image/logo.jpeg'
import { Input, Icon } from 'antd'
import TiFacebook from 'react-icons/lib/ti/social-facebook'
import TiYoutube from 'react-icons/lib/ti/social-youtube'
import TiInstagram from 'react-icons/lib/ti/social-instagram'
import TiTwitter from 'react-icons/lib/ti/social-twitter'
import TiHeart from 'react-icons/lib/ti/heart-full-outline'


export class Footer extends Component {
    
    render() { 
        return (
            <div className='wrap-footer'>
                <Grid>
                  <Row className='border'>

                    <Col xs={6} md={3}>
                      <div className='logo-addins'>
                        <Image src={Logo} width='50%'/>
                      </div>
                      <div className='body-client'>
                        <p className='street'> Jl. Raya Kaliabang no. 45 <br/> <br/>Medan satria, bekasi 17132 </p>
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
                    <Col xs={6} md={3}>
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
 
export default Footer;