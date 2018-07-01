import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { Divider, Tag } from 'antd'
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
          <Image src='https://wallpaperscraft.com/image/bmw_vision_efficientdynamics_concept_front_view_97571_960x544.jpg'/>,
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
                    <Image src='https://wallpaperscraft.com/image/bmw_vision_efficientdynamics_concept_front_view_97571_960x544.jpg'/>
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
                  <Col md={12}>
                  <div className='contentKendaraan'>
                    <p style={{fontSize: 16}}> Detail Kendaraan </p>
                    <p className='header'> Grade <span className='grade'> A </span> </p>
                    <Divider/>
                  </div>
                  </Col>
                  <Col md={6}>
                    <p> Merk <span style={{fontWeight: 'bold'}}> HONDA </span></p>

                    <p> Type <span style={{fontWeight: 'bold'}}> PORSCHE CAYENNE </span></p>

                    <p> No Polisi <span style={{fontWeight: 'bold'}}> B 9999 AI</span></p>

                    <p> Tahun <span style={{fontWeight: 'bold'}}> 2013 </span></p>

                    <p> Kapasitas Mesin (CC) <span style={{fontWeight: 'bold'}}> 8066CC</span></p>
                  </Col>

                  <Col md={6}>
                    <p> STNK <span style={{fontWeight: 'bold'}}> ADA </span></p>

                    <p> Masa Berlaku STNK <span style={{fontWeight: 'bold'}}> 12/10/2025 </span></p>

                    <p> BPKB <span style={{fontWeight: 'bold'}}> TIDAK ADA </span></p>

                    <p> Faktur <span style={{fontWeight: 'bold'}}> ADA </span></p>

                    <p> Kapasitas Mesin (CC) <span style={{fontWeight: 'bold'}}> 3127CC</span></p>
                  </Col>
                </Row> 
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
                      <p><b> 1 </b></p>
                    </div> 
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Merek </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p><b> Toyota </b></p>
                    </div> 
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Model </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p><b> Avanza </b></p>
                    </div> 
                  </Col>
                </Row>  

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Tipe </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p><b> Sport </b></p>
                    </div> 
                  </Col>
                </Row>  

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> AT / MT </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p><b> AT </b></p>
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
                      <p style={{fontSize: 16, fontWeight: 'bold'}}> Rp. 200.0000.000 </p>
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
                      <p><MdLocationOn/> <b>Jl. Raya Kaliabang no. 45 Medan satria, bekasi 17132 </b></p>
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
                      <p><FaCalendarCheckO/><b> 01 Januari 2018 </b></p>
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
                      <p><MdAccessTime/><b> 21.00 WIB </b></p>
                    </div> 
                  </Col>
                </Row>   

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Status </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      {/* <Tag color="#f50">Non available</Tag> */}
                      <Tag color="#87d068">Available</Tag>
                    </div> 
                  </Col>
                </Row>          
              </div>
            </Col>            
          </Row>
        </Grid>
      </div>
    )
  }
}
 
export default Index;