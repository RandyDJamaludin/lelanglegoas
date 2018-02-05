import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
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
            <div className='page-lokasi' style={{paddingBottom:'3%'}}>
              <Map/>

              <Grid className="wrap-cardCarousel">
                <Row>
                  <p className='titleHeader'> REKOMENDASI MOBIL / MOTOR </p>
                  <AliceCarousel
                    duration={400}
                    autoPlay={true}
                    startIndex={1}
                    fadeOutAnimation={true}
                    mouseDragEnabled={true}
                    responsive={responsive}
                    autoPlayInterval={2000}
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