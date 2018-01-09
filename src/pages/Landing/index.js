import React, { Component } from 'react'
import { Image, Grid, Row, Col } from 'react-bootstrap'
import Banner from '../Components/Banner'
import Card1 from '../Components/Card1'
import { StateCard1 } from '../AllData/StateCard1'
import { StateCardLocation } from '../AllData/StateCardLocation'
import JadwalLelang from '../Components/JadwalLelang'
import TabLeft from '../Components/TabLeft'

//Icon & Image
import GoCalendar from 'react-icons/lib/go/calendar'
import Map from '../Components/Map'
import Logo from '../../assets/image/logo-dummy.png'

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
                  {StateCard1.map((data, index) => (
                    <Col md={4} key={data.key}>
                      
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
                
              <TabLeft/>
              
              <div className='adsense'>
                <Grid>
                  <Row>
                    <Col xs={12} md={12}>
                      <Image src='http://www.weddleautobody.com/services/images/banner2.jpg' width='100%'/>
                    </Col>
                  </Row>
                </Grid>
              </div>

              <div className='landing-lelang'>
                <Grid>
                  <div className='body-header'>
                    <p><GoCalendar id='date'/> JADWAL LELANG</p>
                    <hr/>
                  </div>
                  <Row>
                  {StateCardLocation.map((data, index) => (
                    <Col md={12} key={data.key}>
                      
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

              <div className='location-lelang'>
                <Grid>
                  <div className='body-header'>
                    <p><GoCalendar id='date'/> LOKASI LELANG</p>
                    <hr/>
                  </div>
                  <Row>
                    <Col xs={12} md={12}>
                      <Map/>
                      <div className='wrap-location'>
                        <p className='sub-location'>RND Indonesia - Jakarta </p>
                      </div>
                      <div className='body-location'>
                        <p>Jl. Lorem ipsum No 7 Sudirman</p>
                        <p>Jakarta Selatan, 1340</p>
                        <p>Indonesia</p>
                        <p>(021) 864-0987| +62-859-9870-444 </p>
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </div>

              <div className='wrap-client'>
                <Grid className='client-border'>
                  <Row>
                    <Col xs={3} md={2}>
                      <Image src='http://www.netocratic.com/wp-content/uploads/sites/3/2014/05/Startup-Wise-Guys-logo.jpg?x71871' width='100%'/>
                    </Col>
                    <Col xs={3} md={2}>
                      <Image src='http://www.netocratic.com/wp-content/uploads/sites/3/2014/05/Startup-Wise-Guys-logo.jpg?x71871' width='100%'/>
                    </Col>
                    <Col xs={3} md={2}>
                      <Image src='http://www.netocratic.com/wp-content/uploads/sites/3/2014/05/Startup-Wise-Guys-logo.jpg?x71871' width='100%'/>
                    </Col>
                    <Col xs={3} md={2}>
                      <Image src='http://www.netocratic.com/wp-content/uploads/sites/3/2014/05/Startup-Wise-Guys-logo.jpg?x71871' width='100%'/>
                    </Col>
                    <Col xs={3} md={2}>
                      <Image src='http://www.netocratic.com/wp-content/uploads/sites/3/2014/05/Startup-Wise-Guys-logo.jpg?x71871' width='100%'/>
                    </Col>
                    <Col xs={3} md={2}>
                      <Image src='http://www.netocratic.com/wp-content/uploads/sites/3/2014/05/Startup-Wise-Guys-logo.jpg?x71871' width='100%'/>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4}></Col>
                    <Col xs={12} md={4}>
                      <center>
                      <div className='logo-addins'>
                        <Image src={Logo} width='55%'/>
                      </div>
                        <div className='body-client'>
                          <p className='street'> Lorem ipsum No 7, 70094 </p>
                          <p className='phone'> (021) 305 - 0554 <span className='orange'> hello@telecreative.com </span></p> 
                        </div>
                      </center>
                    </Col>
                    <Col xs={4} md={4}></Col>
                  </Row>
                </Grid>
              </div>

              <div className='wrap-footer'>
                <Grid>
                  <Row className='border'>
                    <Col xs={6} md={3} mdPush={1}>
                      <p> About </p>
                      <p> Contact </p>
                      <p> Careers </p>
                      <p> Team </p>
                      <p> Press Release </p>
                      <p> In the media </p>
                      <p> Testimonials </p>
                    </Col>
                    <Col xs={6} md={3} mdPush={1}>
                      <p> Become a seller </p>
                      <p> Affilates </p>
                      <p> Resource center </p>
                      <p> Seller resources </p>
                      <p> Featured partners </p>
                      <p> Nonprofits </p>
                      <p> Help </p>
                    </Col>
                    <Col xs={6} md={3} mdPush={1}>
                      <p> Subscribe Our Newslatter </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={12}>
                      <p className='footer'> @ Telecreative inc </p>
                    </Col>
                  </Row>
                </Grid>
              </div>

          </div>
        )
    }
}
 
export default Index;