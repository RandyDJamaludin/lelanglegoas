import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import User from '../../assets/image/icon/audience-01.png'
import { Link } from 'react-router-dom'

export class Index extends Component {
  render() { 
    return (
      <div className='wrap-registerChoosePage'> 
        <Grid>
          <Row>
            <Col xs={6} md={6}>
              <Row>
                <Col md={4}/>
                <Col md={6}>
                  <div className='wrap-auction'>
                    <div className='auction'>
                      <Image src='https://image.flaticon.com/icons/svg/138/138202.svg' width='100%'/>
                    </div>
                    <Link to='/register'><p className='text-auction'> Penjual </p></Link>
                  </div>
                </Col>
              </Row>  
            </Col>

            <Col xs={6} md={6}>
              <Row>
                <Col md={2}/>
                <Col md={6}>
                  <div className='wrap-user'>
                    <div className='user'>
                      <Image src={User} width='100%'/>
                    </div>
                    <Link to='/register'><p className='text-user'> Pembeli </p></Link>
                  </div>
                </Col>
              </Row>  
            </Col>

          </Row>
        </Grid>
      </div>
    )
  }
}
 
export default Index;