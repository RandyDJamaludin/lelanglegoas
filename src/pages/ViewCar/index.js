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
                    <p> Detail Kendaraan </p>
                    <p className='header'> Grade <span className='grade'> A </span> </p>
                    <Divider/>
                  </div>
                  </Col>
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
                      <p> Grade </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p style={{color:'#3c8dbc', fontWeight:'bold'}}> A </p>
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
                      <p> Toyota </p>
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
                      <p> Avanza </p>
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
                      <p> Sport </p>
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
                      <p> AT </p>
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
                      <p><MdAccessTime/> 21.00 WIB</p>
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