import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Icon } from 'antd'
import { DataCardCarousel } from '../AllData/DataCard' 
import { CardCarousel } from '../Components/Card'
import AliceCarousel from 'react-alice-carousel'
import Map from '../Components/Map'

export class Index extends Component {
    render() { 
      const responsive = {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1024: {
          items: 3
        }
      };
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
                  <AliceCarousel
                      duration={400}
                      autoPlay={true}
                      startIndex = {1}
                      fadeOutAnimation={true}
                      mouseDragEnabled={true}
                      playButtonEnabled={true}
                      responsive={responsive}
                      autoPlayInterval={2000}
                      autoPlayDirection="rtl"
                      autoPlayActionDisabled={true}
                      onSlideChange={this.onSlideChange}
                      onSlideChanged={this.onSlideChanged}
                    >
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
                  </AliceCarousel>
                </Row>
              </Grid>

              <Grid className='wrap-cardCarouselMobile'>
                <Row>
                  <AliceCarousel
                      duration={400}
                      autoPlay={true}
                      startIndex = {1}
                      fadeOutAnimation={true}
                      mouseDragEnabled={true}
                      playButtonEnabled={true}
                      responsive={responsive}
                      autoPlayInterval={2000}
                      autoPlayDirection="rtl"
                      autoPlayActionDisabled={true}
                      onSlideChange={this.onSlideChange}
                      onSlideChanged={this.onSlideChanged}
                    >
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
                  </AliceCarousel>
                </Row>
              </Grid>
            </div>
        )
    }
}
 
export default Index;