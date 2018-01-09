import React, { Component } from 'react'
import { Image, Grid, Row, Col } from 'react-bootstrap'

//Files
import Banner from '../Components/Banner'
import Card1 from '../Components/Card1'
import { StateCard1 } from '../AllData/StateCard1'
import { StateCardLocation } from '../AllData/StateCardLocation'
import JadwalLelang from '../Components/JadwalLelang'
import TabLeft from '../Components/TabLeft'
import Adsense from '../Components/Adsense'
import Footer from '../Components/Footer'

//Icon & Image
import GoCalendar from 'react-icons/lib/go/calendar'
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
                  {StateCard1.map((data, index) => (
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
                
              <TabLeft/>
              <Adsense/>

              <div className='landing-lelang'>
                <Grid>
                  <div className='body-header'>
                    <p><GoCalendar id='date'/> JADWAL LELANG</p>
                    <hr/>
                  </div>
                  <Row>
                  {StateCardLocation.map((data, index) => (
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