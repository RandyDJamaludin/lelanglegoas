import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Button } from 'antd'

export class JadwalLelang extends Component {
    render() { 
        return (
            <div>
                <Row className='row-lelang'>
                  {/*<Col xs={4} md={1}>
                    <div className='lelang-lot'>
                      <h2><center> LOT <br/> {this.props.number}</center></h2>
                    </div>
                  </Col>*/}
                  <Col xs={12} md={3}>
                    <Image src={this.props.image} width='100%'/>
                  </Col>
                  <Col xs={12} md={7}>
                    <div className='content-lelang'>
                      <p className='sub-title'> {this.props.name} </p>
                      <p className='year'> Tahun {this.props.year} </p>
                      <p className='type'> Jenis Kendaraan : {this.props.type} </p>
                      <p className='loc'> Lokasi : {this.props.location} | Tanggal : {this.props.date} | Jam : {this.props.time} </p>
                      <Button> Info Lengkap </Button> 
                    </div>
                  </Col>
                  <Col xs={12} md={2}>
                    <div className='grade-lelang'>
                      <p className='grade'> Grade {this.props.grade} </p>
                    </div> 
                  </Col>
                </Row>
            </div>
        )
    }
}
 
export default JadwalLelang;