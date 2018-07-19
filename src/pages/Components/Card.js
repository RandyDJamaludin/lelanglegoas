import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/id";

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
              Harga dasar <span className="orange"> Rp. {" "}
              {this.props.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
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
      <Link
        to={{
          pathname: "/view-car",
          state: { data: this.props }
        }}
      >
      <div className="background-cardCarousel">
        <center>
          <Image className="components-card" src={this.props.image} />
          <h3>{this.props.nameBrand} </h3>
          <p>
            {" "}
            {this.props.merek} {this.props.model} - {this.props.tipe} ({
              this.props.no_pol
            })
          </p>
          <p className="color"> {this.props.color} </p>
          <p>
            Harga dasar{" "}
            <span className="orange">
              Rp. {" "}
              {this.props.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </span>
          </p>
        </center>
      </div>
      </Link>
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
            <p>
              {" "}
              {this.props.merek} {this.props.model} - {this.props.tipe} ({
                this.props.at_mt
              })
            </p>
            <p className="skin"> {this.props.warna} </p>
            <p>
              Harga dasar <span className="orange"> Rp. {" "}
              {this.props.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
            </p>
          </center>
        </div>
      </div>
    );
  }
}

export class ListLelang extends Component {
  render() {
    return (
      <div className="listLelang" style={{ paddingBottom: "5%" }}>
        <Row>
          <Link
            to={{
              pathname: "/view-car",
              state: { data: this.props }
            }}
          >
            <Col md={12}>
              <Row className="contentLelang">
                <Col xs={12} md={3}>
                  <Image src={this.props.image} width="100%" />
                </Col>
                <Col xs={12} md={9}>
                  <Row>
                    <Col xs={12} md={10}>
                      <div className="headerLelang">
                        <p>
                          <b>
                            {this.props.merek} {this.props.model}
                          </b>
                        </p>
                        <p>
                          <b>{this.props.tipe}</b>
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={2}>
                      <div className="headerLelang">
                        <p style={{ textAlign: "center", fontWeight: "bold" }}>
                          Grade
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={10}>
                      <div className="headerLelang">
                        <p style={{ color: "#000", fontSize: 15 }}>
                          {this.props.police} | {this.props.year} | KM :{" "}
                          {this.props.km}
                        </p>
                        <p>Harga Dasar: </p>
                      </div>
                    </Col>
                    <Col xs={12} md={2}>
                      <div className="headerLelang">
                        <div className="bodyLelang">
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: 30,
                              color: "#3c8dbc",
                              textAlign: "center",
                              lineHeight: 0
                            }}
                          >
                            {" "}
                            {this.props.grade}
                          </p>
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: 14,
                              textAlign: "center",
                              lineHeight: 0,
                              marginTop: 10
                            }}
                          >
                            {" "}
                            LOT {this.props.lotNumber}
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={10}>
                      <div className="headerLelang">
                        <p style={{ fontSize: 22, fontWeight: "bold" }}>
                          RP.{" "}
                          {this.props.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </p>
                      </div>
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

export class SearchLelang extends Component {
  render() {
    return (
      <div className="searchLelang" style={{ paddingBottom: 10 }}>
        <Row style={{ border: "1px solid #ccc", padding: 10 }}>
          <Link
            to={{
              pathname: "/view-car",
              state: { data: this.props }
            }}
          >
            <Col md={12}>
              <Row className="contentLelang">
                <Col xs={12} md={5}>
                  <Image src={this.props.image} width="100%" />
                </Col>
                <Col xs={12} md={7}>
                  <div className="headerLelang">
                    <p> {this.props.name} </p>
                  </div>
                  <Row className="box">
                    <Col md={12}>
                      <p className="title"> Tahun : {this.props.year} </p>
                    </Col>
                    <Col md={12}>
                      <p className="title">
                        {" "}
                        Harga :Rp.{" "}
                        {this.props.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </p>
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
        <p style={{ fontWeight: "bold" }}>
          {this.props.eventCode} {this.props.eventNumber}
        </p>
        <p>
          <Icon type="calendar" />Tanggal Lelang{" "}
          {moment(this.props.date).format("D MMMM YYYY")}
        </p>
        <p>
          <Icon type="home" /> Open House{" "}
          {moment(this.props.openhouse).format("D MMMM YYYY")}
        </p>
        <p>
          <Icon type="clock-circle-o" /> {this.props.startTime} -{" "}
          {this.props.endTime} {this.props.timeZone}
        </p>
        <p>
          <Icon type="money" /> Biaya Admin: Rp. {this.props.admfee.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </p>
        <Link
          to={{
            pathname: "/list-lelang",
            state: { data: this.props }
          }}
        >
          {" "}
          Lihat Lot{" "}
        </Link>
      </div>
    );
  }
}
