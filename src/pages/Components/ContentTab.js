import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import { Button } from 'antd'
import Car5 from '../../assets/image/car5.png'
import FaRight from 'react-icons/lib/fa/arrow-right'

export class ContentTab extends Component {
    render() { 
        return (
            <div>
              <Row>
                <Col xs={12} md={4}>
                  <div className='background-card2'>
                    <center>
                      <Image className='components-card2' src={Car5} width='70%'/>
                      <h3> HONDA HR-V </h3>
                      <p className='skin'> White </p>
                      <p className='price'> Start Bid <span className='orange'> IDR 150.000 </span></p>
                      <Button type="primary">BID NOW</Button>
                    </center>
                  </div>
                </Col>

                <Col xs={12} md={4}>
                  <div className='background-card2'>
                    <center>
                      <Image className='components-card2' src={Car5} width='70%'/>
                      <h3> HONDA HR-V </h3>
                      <p className='skin'> White </p>
                      <p className='price'> Start Bid <span className='orange'> IDR 150.000 </span></p>
                      <Button type="primary">BID NOW</Button>
                    </center>
                  </div>
                </Col>

                <Col xs={12} md={4}>
                  <div className='background-card2'>
                    <center>
                      <Image className='components-card2' src={Car5} width='70%'/>
                      <h3> HONDA HR-V </h3>
                      <p className='skin'> White </p>
                      <p className='price'> Start Bid <span className='orange'> IDR 150.000 </span></p>
                      <Button type="primary">BID NOW</Button>
                    </center>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={4}>
                  <div className='background-card2'>
                    <center>
                      <Image className='components-card2' src={Car5} width='70%'/>
                      <h3> HONDA HR-V </h3>
                      <p className='skin'> White </p>
                      <p className='price'> Start Bid <span className='orange'> IDR 150.000 </span></p>
                      <Button type="primary">BID NOW</Button>
                    </center>
                  </div>
                </Col>

                <Col xs={12} md={4}>
                  <div className='background-card2'>
                    <center>
                      <Image className='components-card2' src={Car5} width='70%'/>
                      <h3> HONDA HR-V </h3>
                      <p className='skin'> White </p>
                      <p className='price'> Start Bid <span className='orange'> IDR 150.000 </span></p>
                      <Button type="primary">BID NOW</Button>
                    </center>
                  </div>
                </Col>

                <Col xs={12} md={4}>
                  <div className='background-card2'>
                    <center>
                      <Image className='components-card2' src={Car5} width='70%'/>
                      <h3> HONDA HR-V </h3>
                      <p className='skin'> White </p>
                      <p className='price'> Start Bid <span className='orange'> IDR 150.000 </span></p>
                      <Button type="primary">BID NOW</Button>
                    </center>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Button className='explore'>
                    <p>
                      View All New Auctions <FaRight/> 
                    </p> 
                  </Button>
                </Col>
              </Row>
            </div>
        )
    }
}
 
export default ContentTab;