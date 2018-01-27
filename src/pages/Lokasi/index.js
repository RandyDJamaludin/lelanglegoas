import React, { Component } from 'react'
import Map from '../Components/Map'
import { Grid, Row, Col } from 'react-bootstrap'
import { Icon } from 'antd'
import AutoCarousel from 'nuka-carousel'
import { DataCardCarousel } from '../AllData/DataCardCarousel' 
import CardCarousel from '../Components/CardCarousel'

export class Index extends Component {
    render() { 
        return (
            <div className='page-lokasi'>
              <Map/>

              <Grid className='wrap-cardCarousel' style={{ paddingTop:'3%',paddingBottom:'3%'}}>
                <div className='header'>
                  <Row>
                    <Col xs={6} md={6}>
                      <p className='left'>ON GOING AUCTIONS </p>
                    </Col>
                    <Col xs={6} md={6}>
                      <p className='right'>View All Featured Products <Icon type="arrow-right" /></p>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <AutoCarousel slidesToShow={4} speed={200} autoTime={10}>
                      {DataCardCarousel.map((data, index) => (
                        <Col xs={12} md={12} key={data.key}>  
                          <CardCarousel
                            name={data.name}
                            image={data.image}
                            color={data.color}
                            lastBid={data.lastBid}
                            openhouse={data.openhouse}
                          />
                        </Col>
                      ))}
                  </AutoCarousel>
                </Row>
              </Grid>

              <Grid className='wrap-cardCarouselMobile'>
                <Row>
                  <AutoCarousel slidesToShow={2} speed={400} dragging={true} autoTime={100}>
                      {DataCardCarousel.map((data, index) => (
                        <Col xs={12} md={12} key={data.key}>  
                          <CardCarousel
                            name={data.name}
                            image={data.image}
                            color={data.color}
                            lastBid={data.lastBid}
                          />
                        </Col>
                      ))}
                  </AutoCarousel>
                </Row>
              </Grid>
            </div>
        )
    }
}
 
export default Index;