import React, { Component } from 'react'
import { Image, Grid, Row, Col } from 'react-bootstrap'
import { Icon } from 'antd'
import { Card, CardCarousel, JadwalLelang } from '../Components/Card'
import { DataCard, DataCardLocation, DataCardCarousel } from '../AllData/DataCard'
import { Banner } from '../Components/Banner'
import { NavLink } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'
import Map from '../Components/Map'
import TabLeft from '../Components/TabLeft'
import Image1 from '../../assets/image/icon/save.png'
import Image2 from '../../assets/image/icon/incountry.png'
import Image3 from '../../assets/image/icon/quality.png'
import Image4 from '../../assets/image/icon/performance.png'
import Image5 from '../../assets/image/icon/24hours.png'

export class Index extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
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
          <div>
              <Banner/>
                <Grid style={{paddingTop:'2%'}}>
                  <Row>
                  {DataCard.map((data, index) => (
                    <Col xs={12} md={4} key={data.key}>
                      
                      <Card
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

              <TabLeft/>
              
              <div className='landing-lelang'>
                <Grid>
                  <div className='body-header'>
                    <p><Icon id='date' type='calendar'/> JADWAL LELANG TERDEKAT</p>
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
                        grade={data.grade}
                        price={data.price}
                        button={data.button}
                      />
                    </Col>
                  ))}
                  </Row>
                  <NavLink to='/jadwal'><p className='lihatJadwal'> Lihat Semua Jadwal </p></NavLink>
                </Grid>
              </div>

              <Map/>
              
              <div className='wrap-people'>
                <Grid>
                  <p className='header'> Why People Love Us </p>
                  <Row style={{marginTop:'5%'}}>
                    <Col md={2}/>
                    <Col xs={4} md={2}>
                      <Image src={Image1} circle width='100%'/>
                    </Col>

                    <Col md={1}/>
                    <Col xs={4} md={2}>
                      <Image src={Image2} circle width='100%'/>
                    </Col>

                    <Col md={1}/>
                    <Col xs={4} md={2}>
                      <Image src={Image3} circle width='100%'/>
                    </Col>

                    <Col xs={2} md={2}/>
                  </Row>

                  <Row style={{marginLeft:'7%', marginTop:'5%', marginBottom:'5%'}}>
                    
                    <Col xs={2} md={3}/>
                    <Col xs={4} md={2}>
                      <Image src={Image4} circle width='100%'/>
                    </Col>

                    <Col md={1}/>
                    <Col xs={4} md={2}>
                      <Image src={Image5} circle width='100%'/>
                    </Col>

                    <Col xs={4} md={4}/>
                  </Row>

                </Grid>
              </div>
          </div>
        )
    }
}
 
export default Index;