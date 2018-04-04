import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Tag, Icon } from "antd";
import { Link } from "react-router-dom";

export class Card extends Component {
  render() {
    return (
      <div>
        <div className="background-card">
          <center>
            <Image
              className="components-card"
              src={this.props.image}
              width="70%"
            />
            <h3> {this.props.name} </h3>
            <p>
              Harga dasar <span className="orange"> {this.props.price}</span>
            </p>
          </center>
        </div>
      </div>
    );
  }
}

export class CardCarousel extends Component {
  render() {
    return (
      <div className="background-cardCarousel">
        <center>
          <Image className="components-card" src={this.props.image} />
          <h3>{this.props.name} </h3>
          <p> {this.props.merek} {this.props.model} - {this.props.tipe} ({this.props.at_mt})</p>
          <p className="color"> {this.props.color} </p>
          <p>
            Harga dasar <span className="orange"> {this.props.price}</span>
          </p>
        </center>
      </div>
    );
  }
}

export class ContentTab extends Component {
  render() {
    return (
      <div>
        <div className="background-card2">
          <center>
            <Image
              className="components-card2"
              src={this.props.image}
              width="100%"
            />
            <h3> {this.props.name} </h3>
            <p> {this.props.merek} {this.props.model} - {this.props.tipe} ({this.props.at_mt})</p>
            <p className="skin"> {this.props.warna} </p>
            <p>
              Harga dasar <span className="orange"> {this.props.price}</span>
            </p>
          </center>
        </div>
      </div>
    );
  }
}

export class ListLelang extends Component {
  render() {
    const isBundle = this.props.bundle;
    let button;
    if (isBundle === '') {
    } else {
      button = <Tag color="green">{this.props.bundle}</Tag>
    }

    return (
      <div className="listLelang" style={{ paddingBottom: "5%" }}>
        <Row>
          <Link to="/view-car">
            <Col md={12}>
              <Row className="contentLelang">
                <Col md={1}>
                  <p className="lot">
                    
                    LOT <br /> {this.props.number}
                  </p>
                </Col>
                <Col xs={12} md={3}>
                  <Image src={this.props.image} width="100%" />
                </Col>
                <Col xs={12} md={8}>
                  <div className="headerLelang">
                    <p> {this.props.name} </p>
                  </div>
                  <Row className="box">
                    <Col xs={4} sm={4} md={2}>
                      <p className="title"> Merek </p>
                      <p className="sub-title"> {this.props.merek} </p>
                    </Col>
                    <Col xs={4} sm={4} md={2}>
                      <p className="title"> Model </p>
                      <p className="sub-title"> {this.props.model} </p>
                    </Col>
                    <Col xs={4} sm={4} md={2}>
                      <p className="title"> Warna </p>
                      <p className="sub-title"> {this.props.warna} </p>
                    </Col>
                    <Col xs={4} sm={4} md={2}>
                      <p className="title"> Tipe </p>
                      <p className="sub-title"> {this.props.tipe} </p>
                    </Col>
                    <Col xs={4} sm={4} md={2}>
                      <p className="title"> AT/MT </p>
                      <p className="sub-title"> {this.props.at_mt} </p>
                    </Col>
                    <Col xs={4} sm={4} md={2}>
                      <p className="title"> No. Polisi </p>
                      <p className="sub-title"> {this.props.police} </p>
                    </Col>
                  </Row>
                  <hr/>
                  <Row className="box">
                    <Col xs={6} sm={6} md={2}>
                      <p className="title"> Harga </p>
                      <p className="sub-title" style={{fontSize:14, color:'#4caf50'}}> {this.props.price}</p>
                    </Col>
                    <Col xs={6} sm={6} md={2}>
                      <p className="title"> Tanggal Lelang </p>
                      <p className="sub-title"> {this.props.date}</p>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      <p className="title"> Lokasi </p>
                      <p className="sub-title"> {this.props.kode_location}</p>
                      <p className="sub-title"> {this.props.location}</p>
                    </Col>
                    {button}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Link>
        </Row>
      </div>
    );
  }
}

export class SearchLelang extends Component {
  render() {
    const isBundle = this.props.bundle;
    let button;
    if (isBundle === '') {
    } else {
      button = <Tag color="green">{this.props.bundle}</Tag>
    }

    return (
      <div className='searchLelang' style={{ paddingBottom: 10 }}>
        <Row  style={{border:'1px solid #ccc', padding:10}}>
          <Link to="/view-car">
            <Col md={12}>
              <Row className="contentLelang">
                <Col md={2}>
                  <p className="lot">
                    LOT <br/> {this.props.number}
                  </p>
                </Col>
                <Col xs={12} md={5}>
                  <Image src={this.props.image} width="100%" />
                </Col>
                <Col xs={12} md={5}>
                  <div className="headerLelang">
                    <p> {this.props.name} </p>
                  </div>
                  <Row className="box">
                    <Col md={12}>
                      <p className="title"> Tahun : {this.props.year} </p>
                    </Col>
                    <Col md={12}>
                      <p className="title"> No. Polisi : {this.props.police} </p>
                    </Col>
                    <Col md={12}>
                      <p className="title"> STNK Nota Pajak : {this.props.pajak} </p>
                    </Col>
                    <Col md={12}>
                      <p className="title"> Harga : {this.props.price}</p>
                    </Col>
                    <Col md={12}>
                      {button}
                    </Col>

                  </Row>
                </Col>
              </Row>
            </Col>
          </Link>
        </Row>
      </div>
    );
  }
}

export class JadwalLelang extends Component {
  render() {
    return (
      <div style={{ padding: 20, margin: 10, background: "#f8f8f8" }}>
        <p style={{ fontWeight: "bold" }}>
          <Icon type="form" /> Lelang
          <span>
            {this.props.transport} {this.props.location}
          </span>
        </p>
        <p>
          <Icon type="calendar" /> {this.props.date}
        </p>
        <p>
          <Icon type="home" /> {this.props.openhouse}
        </p>
        <p>
          <Icon type="clock-circle-o" /> {this.props.time} WIB
        </p>
        <Link to="/list-lelang"> Lihat Lot </Link>
      </div>
    );
  }
}
