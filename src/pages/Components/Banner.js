import React, { Component } from 'react'
import { Row, Col, Carousel, Button } from 'antd';

export class Banner extends Component {
    render() { 
        return (
        <div>
         <Row>
            <Col span={24} className='banner_background'>
              <Carousel autoplay>
                <div>
                <Row>
                <Col span={22} offset={2}>
                  <div className='contain'>
                    <h4> MOBIL MEWAH DAN MURAH </h4>
                    <h1> AYO BID SEKARANG </h1>
                    <p> Dapatkan Mobil impian anda dengan harga yang <br/>
                    sesuai dengan keinginan anda </p>   
                    <Button type="primary">BID SEKARANG</Button>
                  </div>
                </Col>
                </Row>
                </div>

                <div>
                <Row>
                <Col span={22} offset={2}>
                  <div className='contain'>
                    <h4> MOBIL MEWAH DAN MURAH2 </h4>
                    <h1> AYO BID SEKARANG </h1>
                    <p> Dapatkan Mobil impian anda dengan harga yang <br/>
                    sesuai dengan keinginan anda </p>   
                    <Button type="primary">BID SEKARANG</Button>
                  </div>
                </Col>
                </Row>
                </div>
              
              </Carousel>
            </Col>
          </Row>
        </div>
        )
    }
}
 
export default Banner;