import React, { Component } from 'react'
import { Image, Grid, Row, Col } from 'react-bootstrap'
import { Icon } from 'antd'
import AutoCarousel  from 'nuka-carousel'

//Files
import Banner from '../Components/Banner'
import Card1 from '../Components/Card1'
import { CardCarousel } from '../Components/CardCarousel';
import { DataCard1 } from '../AllData/DataCard1'
import { DataCardLocation } from '../AllData/DataCardLocation'
import { DataCardCarousel } from '../AllData/DataCardCarousel' 
import JadwalLelang from '../Components/JadwalLelang'
import TabLeft from '../Components/TabLeft'
import Adsense from '../Components/Adsense'
import Footer from '../Components/Footer'
import Map from '../Components/Map'

export class Index extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
    render() { 
        return (
          <div>
              <Banner/>
                <Grid>
                  <Row>
                  {DataCard1.map((data, index) => (
                    <Col xs={6} md={4} key={data.key}>
                      
                      <Card1 
                        name={data.name}
                        image={data.image}
                        price={data.price}
                        button={data.button}
                      />
                    </Col>
                  ))}
                  </Row>
                </Grid>

              <Grid className='wrap-cardCarousel'>
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


              <TabLeft/>
              <Adsense/>

              <div className='landing-lelang'>
                <Grid>
                  <div className='body-header'>
                    <p><Icon id='date' type='calendar'/> JADWAL LELANG</p>
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
                        button={data.button}
                      />
                    </Col>
                  ))}
                  </Row>
                  <a href='/'><p className='lihatJadwal'> Lihat Semua Jadwal </p></a>
                </Grid>
              </div>

              <Map/>
              
              <div className='wrap-people'>
                <Grid>
                  <p className='header'> Why People Love Us </p>
                  <Row style={{marginTop:'5%'}}>
                    <Col xs={2} md={2}/>
                    <Col xs={2} md={2}>
                      <Image src='https://image.flaticon.com/icons/svg/675/675263.svg' circle width='100%'/>
                    </Col>

                    <Col xs={2} md={1}/>
                    <Col xs={2} md={2}>
                      <Image src='https://image.flaticon.com/icons/svg/675/675263.svg' circle width='100%'/>
                    </Col>

                    <Col xs={2} md={1}/>
                    <Col xs={2} md={2}>
                      <Image src='https://image.flaticon.com/icons/svg/675/675263.svg' circle width='100%'/>
                    </Col>

                    <Col xs={2} md={2}/>
                  </Row>

                  <Row style={{marginLeft:'7%', marginTop:'5%', marginBottom:'5%'}}>
                    
                    <Col xs={2} md={3}/>
                    <Col xs={2} md={2}>
                      <Image src='https://image.flaticon.com/icons/svg/675/675263.svg' circle width='100%'/>
                    </Col>

                    <Col xs={2} md={1}/>
                    <Col xs={2} md={2}>
                      <Image src='https://image.flaticon.com/icons/svg/675/675263.svg' circle width='100%'/>
                    </Col>

                    <Col xs={2} md={4}/>
                  </Row>

                </Grid>
              </div>

              <div className='wrap-client'>
                <Grid className='client-border'>
                  <Row>
                    <Col xs={4} md={2}>
                      <Image src='http://www.netocratic.com/wp-content/uploads/sites/3/2014/05/Startup-Wise-Guys-logo.jpg?x71871' width='100%'/>
                    </Col>
                    <Col xs={4} md={2}>
                      <Image src='http://www.netocratic.com/wp-content/uploads/sites/3/2014/05/Startup-Wise-Guys-logo.jpg?x71871' width='100%'/>
                    </Col>
                    <Col xs={4} md={2}>
                      <Image src='http://www.netocratic.com/wp-content/uploads/sites/3/2014/05/Startup-Wise-Guys-logo.jpg?x71871' width='100%'/>
                    </Col>
                    <Col xs={4} md={2}>
                      <Image src='http://www.netocratic.com/wp-content/uploads/sites/3/2014/05/Startup-Wise-Guys-logo.jpg?x71871' width='100%'/>
                    </Col>
                    <Col xs={4} md={2}>
                      <Image src='http://www.netocratic.com/wp-content/uploads/sites/3/2014/05/Startup-Wise-Guys-logo.jpg?x71871' width='100%'/>
                    </Col>
                    <Col xs={4} md={2}>
                      <Image src='http://www.netocratic.com/wp-content/uploads/sites/3/2014/05/Startup-Wise-Guys-logo.jpg?x71871' width='100%'/>
                    </Col>
                  </Row>
                </Grid>
              </div>

              <Footer />

          </div>
        )
    }
}
 
export default Index;