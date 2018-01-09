import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

export class Adsense extends Component {
    render() { 
        return (
            <div className='adsense'>
              <Grid>
                <Row>
                  <Col xs={12} md={12}>
                    <Image src='http://www.weddleautobody.com/services/images/banner2.jpg' width='100%'/>
                  </Col>
                </Row>
              </Grid>
            </div>
        )
    }
}
 
export default Adsense;