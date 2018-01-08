import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { Button } from 'antd'
import Car1 from '../../assets/image/car1.png'

export class Card1 extends Component {
    render() { 
        return (
            <div>
              <Grid>
                <Row>
                  <Col xs={6} md={4}>
                    <div className='background-card'>
                      <center>
                        <Image className='components-card' src={Car1} width='70%'/>
                        <h3> HONDA HR-V </h3>
                        <p> Start Bid <span className='orange'> IDR 150.000 </span></p>
                        <Button type="primary">BID NOW</Button>
                      </center>
                    </div>
                  </Col>

                  <Col xs={6} md={4}>
                    <div className='background-card'>
                      <center>
                        <Image className='components-card' src={Car1} width='70%'/>
                        <h3> HONDA HR-V </h3>
                        <p> Start Bid <span className='orange'> IDR 150.000 </span></p>
                        <Button type="primary">BID NOW</Button>
                      </center>
                    </div>
                  </Col>

                  <Col xs={6} md={4}>
                    <div className='background-card'>
                      <center>
                        <Image className='components-card' src={Car1} width='70%'/>
                        <h3> HONDA HR-V </h3>
                        <p> Start Bid <span className='orange'> IDR 150.000 </span></p>
                        <Button type="primary">BID NOW</Button>
                      </center>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </div>
        )
    }
}
 
export default Card1;