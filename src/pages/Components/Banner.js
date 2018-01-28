import React, { Component } from 'react'
import { Row, Col, Carousel, Button } from 'antd';

export class Banner extends Component {
    render() { 
        return (
        <div>
         <Row>
            <Col span={24} className='banner_background'>
              <Carousel autoplay>
                <div className='containBanner1'>
                  <h4> MOBIL MEWAH DAN MURAH </h4>
                  <h1> AYO BID SEKARANG </h1>
                  <p> Dapatkan Mobil impian anda dengan harga yang <br/>
                  sesuai dengan keinginan anda </p>   
                  <Button type="primary">BID SEKARANG</Button>
                </div>
                <div className='containBanner2'>
                  <h4> MOBIL MEWAH DAN MURAH </h4>
                  <h1> AYO BID SEKARANG </h1>
                  <p> Dapatkan Mobil impian anda dengan harga yang <br/>
                  sesuai dengan keinginan anda </p>   
                  <Button type="primary">BID SEKARANG</Button>
                </div>
              </Carousel>
            </Col>
          </Row>
        </div>
        )
    }
}
 
export class BannerInfo extends Component{
  render(){
    return(
      <div id="top-picture">
        <div className="content">
          <div className="card">
            <h1 className="title" style={{ color: "#fff" }}>
              {this.props.title}
            </h1>
          </div>
        </div>
      </div>
    )
  }
}