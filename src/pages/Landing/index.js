import React, { Component } from 'react'
import Banner from '../Components/Banner'
import Card1 from '../Components/Card1'
import TabLeft from '../Components/TabLeft'
import { Image, Grid, Row, Col, Button } from 'react-bootstrap'
import GoCalendar from 'react-icons/lib/go/calendar'
import Car5 from '../../assets/image/car5.png'

export class Index extends Component {
    render() { 
        return (
          <div>
              <Banner/>
              <Card1/>
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
                    <Col xs={12} md={12}>
                      <Row style={{border:'1px solid #eb5f02',marginTop:'2%'}}>
                        <Col xs={4} md={2}>
                          <div className='lelang-lot'>
                            <h2><center> LOT <br/> 1</center></h2>
                          </div>
                        </Col>
                        <Col xs={4} md={3}>
                          <Image src={Car5} width='100%'/>
                        </Col>
                        <Col xs={4} md={7}>
                          <div className='content-lelang'>
                            <p className='sub-title'> Toyota Avanza </p>
                            <p className='year'> Tahun 2000 </p>
                            <p className='type'> Jenis Kendaraan : Mobil </p>
                            <p className='loc'> Lokasi : Jakarta | Tanggal : 1 Januari 2018 | Jam : 13.00 - Selesai </p>
                            <Button> Info Lengkap </Button> 
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col xs={12} md={12}>
                      <Row style={{border:'1px solid #eb5f02',marginTop:'2%'}}>
                        <Col xs={4} md={2}>
                          <div className='lelang-lot'>
                            <h2><center> LOT <br/> 2</center></h2>
                          </div>
                        </Col>
                        <Col xs={4} md={3}>
                          <Image src={Car5} width='100%'/>
                        </Col>
                        <Col xs={4} md={7}>
                          <div className='content-lelang'>
                            <p className='sub-title'> Toyota Avanza </p>
                            <p className='year'> Tahun 2000 </p>
                            <p className='type'> Jenis Kendaraan : Mobil </p>
                            <p className='loc'> Lokasi : Jakarta | Tanggal : 1 Januari 2018 | Jam : 13.00 - Selesai </p>
                            <Button> Info Lengkap </Button> 
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} md={12}>
                      <Row style={{border:'1px solid #eb5f02',marginTop:'2%'}}>
                        <Col xs={4} md={2}>
                          <div className='lelang-lot'>
                            <h2><center> LOT <br/> 3</center></h2>
                          </div>
                        </Col>
                        <Col xs={6} md={3}>
                          <Image src={Car5} width='100%'/>
                        </Col>
                        <Col xs={6} md={7}>
                          <div className='content-lelang'>
                            <p className='sub-title'> Toyota Avanza </p>
                            <p className='year'> Tahun 2000 </p>
                            <p className='type'> Jenis Kendaraan : Mobil </p>
                            <p className='loc'> Lokasi : Jakarta | Tanggal : 1 Januari 2018 | Jam : 13.00 - Selesai </p>
                            <Button> Info Lengkap </Button> 
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <a href='/'><p className='lihatJadwal'> Lihat Semua Jadwal </p></a>
                  
                </Grid>
              </div>
          </div>
        )
    }
}
 
export default Index;