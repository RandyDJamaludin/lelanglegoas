import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Pagination } from 'antd'
import GoCalendar from 'react-icons/lib/go/calendar'
import JadwalLelang from '../Components/JadwalLelang'
import { StateCardLocation } from '../AllData/StateCardLocation'
import Footer from '../Components/Footer'
import { Adsense } from '../Components/Adsense';

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

              <div className='adsense'>
                <Adsense/>
              </div>
              <Footer/>
            </div>

        )
    }
}
 
export default Index;