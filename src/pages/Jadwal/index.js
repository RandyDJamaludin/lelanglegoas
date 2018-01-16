import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Pagination, Icon } from 'antd'
import GoCalendar from 'react-icons/lib/go/calendar'
import AutoCarousel from 'nuka-carousel'
import { DataCardCarousel } from '../AllData/DataCardCarousel' 
import CardCarousel from '../Components/CardCarousel'
import JadwalLelang from '../Components/JadwalLelang'
import { DataCardLocation } from '../AllData/DataCardLocation'
import { Adsense } from '../Components/Adsense'

export class Index extends Component {
    render() { 
        return (
            <div className='page-jadwal'>
              <div className='landing-lelang'>
                <Grid>
                  <div className='body-header'>
                    <p><GoCalendar id='date'/> JADWAL LELANG</p>
                    <hr/>
                  </div>
                  <Row>
                  {DataCardLocation.map((data, index) => (
                    <Col xs={6} md={12} key={data.key}>
                      
                      <JadwalLelang 
                        number={data.number}
                        name={data.name}
                        year={data.year}
                        type={data.type}
                        location={data.location}
                        date={data.date}
                        time={data.time}
                        image={data.image}
                        price={data.price}
                        grade={data.grade}
                        button={data.button}
                      />
                    </Col>
                  ))}
                  </Row>
                  <Row>
                    <Col xs={12} md={3}/>
                    <Col xs={12} md={6}>
                      <div className='pagination'>
                        <Pagination defaultCurrent={6} total={500} />
                      </div>
                    </Col>
                    <Col xs={12} md={3}/>
                  </Row>
                </Grid>
              </div>
              
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

              <div className='adsense'>
                <Adsense/>
              </div>
            </div>

        )
    }
}
 
export default Index;