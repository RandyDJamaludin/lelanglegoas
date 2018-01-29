import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { Divider } from 'antd'
import AliceCarousel from 'react-alice-carousel'
import MdAccessTime from 'react-icons/lib/md/access-time'
import MdLocationOn from 'react-icons/lib/md/location-on'
import FaCalendarCheckO from 'react-icons/lib/fa/calendar-check-o'


export class Index extends Component {
  renderThumbs = () =>
    <div className='multiSliderThumbs'>
      <Row> 
        {
          [
          <Image src='http://images.caricos.com/b/bmw/2016_bmw_m6_gt3/images/2560x1440/2016_bmw_m6_gt3_20_2560x1440.jpg'/>,
          <Image src='http://www.car-revs-daily.com/wp-content/uploads/2015/09/2016-BMW-M6-GT3-Racecar-25.jpg'/>,
          <Image src='http://www.bmwgrandriver.com/wp-content/uploads/2015/09/bmw-m6-gt3-5.jpg'/>
          ].map((item, i) =>
          <Col xs={4} md={4} key={i} onClick={() => this.Carousel._onDotClick(i)}>{item}</Col>)
        }
      </Row>
    </div>
    ;
  render() { 
    return (
      <div className='wrap-viewCarPage'>
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <p className='header'> PORSCHE CAYENNE </p>
              <div>
                <AliceCarousel
                  dotsDisabled={true}
                  buttonsDisabled={true}
                  ref={ el => this.Carousel = el }
                >
                  <div className='multiSlider'>
                    <Image src='http://images.caricos.com/b/bmw/2016_bmw_m6_gt3/images/2560x1440/2016_bmw_m6_gt3_20_2560x1440.jpg'/>
                  </div>
                  <div className='multiSlider'>
                    <Image src='http://www.car-revs-daily.com/wp-content/uploads/2015/09/2016-BMW-M6-GT3-Racecar-25.jpg'/>
                  </div>
                  <div className='multiSlider'>
                    <Image src='http://www.bmwgrandriver.com/wp-content/uploads/2015/09/bmw-m6-gt3-5.jpg'/>
                  </div>
                </AliceCarousel>
                { this.renderThumbs() }  
              </div>

              <div className='infoKendaraan'>
                <Row>
                  <div style={{paddingLeft:12, paddingRight:12}} className='contentKendaraan'>
                    <p> Detail Kendaraan </p>
                    <p className='header'> Grade <span className='grade'> A </span> </p>
                    <Divider/>
                  </div>
                  <Col md={6}>
                    <p> Merk <span> HONDA </span></p>

                    <p> Type <span> PORSCHE CAYENNE </span></p>

                    <p> No Polisi <span> B 9999 AI</span></p>

                    <p> Tahun <span> 2013 </span></p>

                    <p> Kapasitas Mesin (CC) <span> 8066CC</span></p>
                  </Col>

                  <Col md={6}>
                    <p> STNK <span> ADA </span></p>

                    <p> Masa Berlaku STNK <span> 12/10/2025 </span></p>

                    <p> BPKB <span> TIDAK ADA </span></p>

                    <p> Faktur <span> ADA </span></p>

                    <p> Kapasitas Mesin (CC) <span> 3127CC</span></p>
                  </Col>
                </Row> 
                <Divider/>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='right-panel'>
                <p className='title'> INFORMASI LELANG </p>
              </div>
              <div className='body-panel'>
                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Lot </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p> 1 </p>
                    </div> 
                  </Col>
                </Row>  
                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Start Bid </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p><b> Rp. 200.0000.000 </b></p>
                    </div> 
                  </Col>
                </Row>  

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Lokasi </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p><MdLocationOn/> Jl. Raya Kaliabang no. 45 Medan satria, bekasi 17132 </p>
                    </div> 
                  </Col>
                </Row>  

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Tanggal </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p><FaCalendarCheckO/> 01 Januari 2018 </p>
                    </div> 
                  </Col>
                </Row>  

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Waktu </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p><MdAccessTime/> 21.00 </p>
                    </div> 
                  </Col>
                </Row>          
              </div>

              <div className='right-panel'>
                <p className='title'> NOTE </p>
              </div>
              
              <Row className='body-panel'>
                <p> Mobil dengan kualitas yang sangat cangih, dan mobil baru baru belum pernah dipakai. </p>
              </Row>
            </Col>            
          </Row>
        </Grid>
      </div>
    )
  }
}
 
export default Index;