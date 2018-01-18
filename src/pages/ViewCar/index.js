import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { Tag, Tabs } from 'antd'
const TabPane = Tabs.TabPane;

export class Index extends Component {
  render() { 
    return (
      <div className='wrap-viewCarPage'>
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <p className='header'> PORSCHE CAYENNE </p>
              <Image src='https://www.ford.co.uk/content/dam/guxeu/uk/forms/ford-KMI_form-eu-mustang-16x9-991x557-ford-news-kmi.jpg' width='100%'/>
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
                      <p> Rp. 200.0000.000 </p>
                    </div> 
                  </Col>
                </Row>  

                <Row>
                <Col xs={4} md={4}>
                    <div>
                      <p> Jadwal Lelang </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p> 01 Januari 2018 </p>
                    </div> 
                  </Col>
                </Row>  

                <Row>
                  <Col xs={5} md={2}>
                    <div>
                      <Tag color="green">Open House</Tag>
                    </div> 
                  </Col>

                  <Col xs={2} md={2}/>
                  <Col xs={5} md={2}>
                    <div>
                      <Tag color="green">Live</Tag>
                    </div> 
                  </Col>
                </Row>          
              </div>

              <div className='right-panel'>
                <p className='title'> DETAIL KENDARAAN </p>
              </div>
              <div className='body-panel'>
                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> No. Polisi </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p> <span> F 9999 AI </span></p>
                    </div> 
                  </Col>
                </Row>  
                <Row>
                <Col xs={4} md={4}>
                    <div>
                      <p> Unit  </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>	SUZUKI S 2008 </p>
                    </div> 
                  </Col>
                </Row>  
                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Warna  </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>	Abu - abu </p>
                    </div> 
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Grade mesin  </p>
                    </div> 
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>	A </p>
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
            <Col xs={12} md={12}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Overview" key="1">
                  <p className='overview-title'>
                    MOBIL MERCEDES-BENZ'S: LIMOUSINES
                  </p>
                  <p className='desc-overview'>
                    Dunia mewah mobil ditandai oleh Mercedes-Benz 600, kendaraan mewah yang hadir dalam dua model berbeda: sedan 4 pintu pendek, sebuah wheelbase 4-pintu limusin Pullman dan limusin 6 pintu. Produksi mereka dimulai pada tahun 1964. Pada tahun 1972, 600 model keluar di pasaran.
                    Orang-orang terkenal yang memiliki model ini termasuk Coco Chanel, Hugh Hefner, Elizabeth Taylor, John Lennon, dll.
                  </p>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
 
export default Index;