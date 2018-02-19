import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Icon } from "antd";
import { CardCarousel, JadwalLelang, TabLeft } from "../Components/Card";
import {
  DataCardCarousel,
  DataJadwalMotor,
  DataJadwalMobil
} from "../AllData/DataCard";
import { Banner } from "../Components/Partial";
import { NavLink } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import Map from "../Components/Map";

export class Index extends Component {
  static defaultProps = {
    center: { lat: 40.744679, lng: -73.948542 },
    zoom: 11
  };
  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };
    return (
      <div>
        <Banner />
        <Grid className="wrap-cardCarousel">
          <Row>
            <p className="titleHeader"> REKOMENDASI MOBIL / MOTOR </p>
            <AliceCarousel
              duration={400}
              autoPlay={true}
              startIndex={1}
              fadeOutAnimation={true}
              mouseDragEnabled={true}
              responsive={responsive}
              autoPlayInterval={2000}
              autoPlayActionDisabled={true}
              onSlideChange={this.onSlideChange}
              onSlideChanged={this.onSlideChanged}
            >
              {DataCardCarousel.map((data, index) => (
                <Col xs={12} md={12} key={data.key}>
                  <CardCarousel
                    name={data.name}
                    image={data.image}
                    color={data.color}
                    lastBid={data.lastBid}
                  />
                </Col>
              ))}
            </AliceCarousel>
          </Row>
        </Grid>

        <Grid className="wrap-cardCarouselMobile">
          <Row>
            <AliceCarousel
              duration={400}
              autoPlay={true}
              startIndex={1}
              fadeOutAnimation={true}
              mouseDragEnabled={true}
              playButtonEnabled={true}
              responsive={responsive}
              autoPlayInterval={2000}
              autoPlayDirection="rtl"
              autoPlayActionDisabled={true}
              onSlideChange={this.onSlideChange}
              onSlideChanged={this.onSlideChanged}
            >
              {DataCardCarousel.map((data, index) => (
                <Col xs={12} md={12} key={data.key}>
                  <CardCarousel
                    name={data.name}
                    image={data.image}
                    color={data.color}
                    lastBid={data.lastBid}
                    openhouse={data.openhouse}
                  />
                </Col>
              ))}
            </AliceCarousel>
          </Row>
        </Grid>

        <TabLeft />

        <div className="landing-lelang">
          <Grid>
            <div className="body-header">
              <p>
                <Icon id="date" type="calendar" /> JADWAL LELANG TERDEKAT
              </p>
              <hr />
            </div>
            <Row>
              <Col xs={12} md={12}>
                <Row>
                  <AliceCarousel
                    duration={400}
                    autoPlay={false}
                    startIndex={1}
                    fadeOutAnimation={true}
                    mouseDragEnabled={true}
                    responsive={responsive}
                    autoPlayInterval={2000}
                    autoPlayActionDisabled={true}
                    onSlideChange={this.onSlideChange}
                    onSlideChanged={this.onSlideChanged}
                  >
                    {DataJadwalMotor.map((data, index) => (
                      <Col xs={12} md={12} key={data.key}>
                        <JadwalLelang
                          transport={data.transport}
                          location={data.location}
                          date={data.date}
                          time={data.time}
                          openhouse={data.openhouse}
                        />
                      </Col>
                    ))}
                  </AliceCarousel>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Row>
                  <AliceCarousel
                    duration={400}
                    autoPlay={false}
                    startIndex={1}
                    fadeOutAnimation={true}
                    mouseDragEnabled={true}
                    responsive={responsive}
                    autoPlayInterval={2000}
                    autoPlayActionDisabled={true}
                    onSlideChange={this.onSlideChange}
                    onSlideChanged={this.onSlideChanged}
                  >
                    {DataJadwalMobil.map((data, index) => (
                      <Col xs={12} md={12} key={data.key}>
                        <JadwalLelang
                          transport={data.transport}
                          location={data.location}
                          date={data.date}
                          time={data.time}
                          openhouse={data.openhouse}
                        />
                      </Col>
                    ))}
                  </AliceCarousel>
                </Row>
              </Col>
            </Row>
            <NavLink to="/jadwal">
              <p className="lihatJadwal"> Lihat Semua Jadwal </p>
            </NavLink>
          </Grid>
        </div>

        <div style={{ paddingBottom: "4%" }}>
          <Map />
        </div>
      </div>
    );
  }
}

export default Index;
