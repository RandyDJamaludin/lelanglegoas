import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Button, Tag } from 'antd'
import { Link } from 'react-router-dom'
import MdAccessTime from 'react-icons/lib/md/access-time'
import MdLocationOn from 'react-icons/lib/md/location-on'
import FaCalendarCheckO from 'react-icons/lib/fa/calendar-check-o'

export class Card extends Component {
    render() { 
        return (
            <div>
              <div className='background-card'>
                <center>
                  <Image className='components-card' src={this.props.image} width='70%'/>
                  <h3> {this.props.name} </h3>
                  <p> Start Bid <span className='orange'> {this.props.price}</span></p>
                </center>
              </div>
            </div>
        )
    }
}
 
export class CardCarousel extends Component {
  render() { 
      return (
          <div className='background-cardCarousel'>
          <center>
              <Image className='components-card' src={this.props.image}/>
              <h3>{this.props.name} </h3>
              <p className='color'> {this.props.color} </p>
              <p className='last'> Last Bid <span className='orange'> {this.props.lastBid}</span></p>
              <Tag color="green">{this.props.openhouse}</Tag>
          </center>
          </div>
      )
  }
}

export class ContentTab extends Component {
    render() { 
        return (
            <div>
              <div className='background-card2'>
                <center>
                  <Image className='components-card2' src={this.props.image} width='100%'/>
                  <h3> {this.props.name} </h3>
                  <p className='skin'> {this.props.color} </p>
                  <p className='price'> Start Bid <span className='orange'> {this.props.price} </span></p>
                </center>
              </div>
            </div>
        )
    }
}

export class JadwalLelang extends Component {
    render() { 
        return (
            <div>
                <Row className='row-lelang'>
                  <Col xs={12} md={3}>
                    <Image src={this.props.image} width='100%'/>
                  </Col>
                  <Col xs={12} md={7}>
                    <div className='content-lelang'>
                      <p> {this.props.name} </p>
                      <p> Tahun {this.props.year} </p>
                      <p> Jenis Kendaraan : {this.props.type} </p>
                      <p> Lokasi : <MdLocationOn/> {this.props.location} </p>
                      <p> <FaCalendarCheckO/> Tanggal : {this.props.date} <MdAccessTime/> Jam : {this.props.time}  </p>
                      <Link to='/view-car'> <Button> Info Lengkap </Button></Link>
                      
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