import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Icon, Menu } from "antd";
import { CardCarousel, JadwalLelang } from "../Components/Card";
import {
  DataCardCarousel,
  DataJadwalMotor,
  DataJadwalMobil,
  DataContentTab,
} from "../AllData/DataCard";
import { Banner } from "../Components/Partial";
import { NavLink } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import Map from "../Components/Map";
import { ContentTab } from '../Components/Card'

const SubMenu = Menu.SubMenu;

export class Index extends Component {
  constructor() {
    super()

    this.state = {
      merek: ''
    }
  }

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
                    merek={data.merek}
                    model={data.model}
                    tipe={data.tipe}
                    at_mt={data.at_mt}
                    color={data.color}
                    price={data.price}
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
                    merek={data.merek}
                    model={data.model}
                    tipe={data.tipe}
                    at_mt={data.at_mt}
                    color={data.color}
                    price={data.price}
                    openhouse={data.openhouse}
                  />
                </Col>
              ))}
            </AliceCarousel>
          </Row>
        </Grid>

        {/* Tab */}
        <Grid>
          <Row>
            <Col md={2}>
              <Menu
                onClick={({item, key}) => this.setState({merek: key})}
                style={{ width: '100%' }}
                defaultOpenKeys={['all']}
                selectedKeys = {[this.state.merek]}
                mode="inline">
                <SubMenu onTitleClick={({key}) => this.setState({merek: ''})} key="all" title={<span><span>All</span></span>}>
                  <SubMenu key="sub1" title={<span><span>Mobil</span></span>}>
                    <Menu.Item key="Avanza">Avanza</Menu.Item>
                    <Menu.Item key="Toyota">Xenia</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><span>Motor</span></span>}>
                    <Menu.Item key="Ninja">Ninja</Menu.Item>
                    <Menu.Item key="Supra">Supra</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><span>Property</span></span>}>
                    <Menu.Item key="Rumah">Rumah</Menu.Item>
                  </SubMenu>
                </SubMenu>
              </Menu>
            </Col>
            <Col md={10}>
              {this.state.merek === '' ? (
                DataContentTab.map((d, index) => (
                  <Col md={4} key={index}>
                    <ContentTab
                      name={d.name}
                      image={d.image}
                      merek={d.merek}
                      model={d.model}
                      tipe={d.tipe}
                      at_mt={d.at_mt}
                      warna={d.warna}
                      price={d.price}
                      button={d.button} />
                  </Col>
                ))
              ) : (
                DataContentTab.filter(data => data.merek === this.state.merek).map((d, index) => (
                  <Col md={4} key={index}>
                    <ContentTab
                      name={d.name}
                      image={d.image}
                      merek={d.merek}
                      model={d.model}
                      tipe={d.tipe}
                      at_mt={d.at_mt}
                      warna={d.warna}
                      price={d.price}
                      button={d.button} />
                  </Col>
                ))
              )}
            </Col>
          </Row>
        </Grid>

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
