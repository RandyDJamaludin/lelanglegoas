import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"
import { Icon, Divider, Input, Select, Form, Pagination, Button } from "antd"
import { NavLink } from "react-router-dom"
import AliceCarousel from "react-alice-carousel"
import { DataCardCarousel, DataJadwalMotor, DataJadwalMobil, DataCardLocation } from "../AllData/DataCard"
import { CardCarousel, JadwalLelang, SearchLelang } from "../Components/Card"
import { Banner } from "../Components/Partial"
import Map from "../Components/Map";
import { connect } from 'react-redux'
import { fetchScheduleCar } from "../../actions/getSchedule"

const FormItem = Form.Item;
const Option = Select.Option;

export class Index extends Component {
  constructor() {
    super()

    this.state = {
      merek: ''
    }
  }

  componentDidMount(){
    this.props.fetchScheduleCar("OrjNkfvMmINqeG_q63RaD8VwxOObZw9y-T-4kihzrOL2a_0yK3TPRQ2")
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
        {/* <Grid>
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
        </Grid> */}

        <Grid style={{paddingTop:'3%', paddingBottom:'3%'}}>
          <Row>
            <Col md={5} className="searchPanel">
              <p style={{ fontWeight: "bold" }}> CARI MOBIL / MOTOR </p>
              <Divider />
              <Row>
                <Col md={4}>
                  <p> Free Keyword</p>
                  <Input width="100%" />
                </Col>
                <Col md={4}>
                  <p> Lokasi </p>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="jack">Jakarta Barat</Option>
                    <Option value="lucy">Jakarta Timur</Option>
                    <Option value="tom">Jakarta Utara</Option>
                  </Select>
                </Col>
                <Col md={4}>
                  <p> Merek </p>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="jack">Yamaha</Option>
                    <Option value="lucy">Honda</Option>
                    <Option value="tom">Jaguar</Option>
                  </Select>
                </Col>
              </Row>
              <Row style={{ paddingTop: 10 }}>
                <Col md={12}>
                  <p> Model </p>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="jack">Model A</Option>
                    <Option value="lucy">Model B</Option>
                    <Option value="tom">Model C</Option>
                  </Select>
                </Col>
              </Row>
              <Row style={{ paddingTop: 10 }}>
                <Col md={12}>
                  <p> Tahun </p>
                  <Input width="100%" />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormItem>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="buttonSearch"
                    >
                      CARI
                    </Button>
                  </FormItem>
                </Col>
              </Row>
            </Col>
            <Col md={1} />
            <Col md={6}>
              <Row id="hasilPencarian">
                <p style={{ fontWeight: "bold", marginLeft: 10 }}>
                  {" "}
                  Hasil Pencarian{" "}
                </p>
                {DataCardLocation.map((data, index) => (
                  <Col md={12} key={data.key}>
                    <SearchLelang
                      number={data.number}
                      name={data.name}
                      police={data.police}
                      pajak={data.pajak}
                      price={data.price}
                      bundle={data.bundle}
                      year={data.year}
                      type={data.type}
                      image={data.image}
                    />
                  </Col>
                ))}
              </Row>
              <Row>
                <Col xs={1} md={3} />
                <Col xs={10} md={7}>
                  <Pagination defaultCurrent={6} total={50} />
                </Col>
                <Col xs={1} md={3} />
              </Row>
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
                    
                    {this.props.schedulecar.map((data, index) => (
                      <Col xs={12} md={12} key={data.auctionEventId}>
                        <JadwalLelang
                          transport={" MOBIL"}
                          location={data.auctionHouseProvince}
                          date={data.eventDate.date}
                          startTime={data.eventDate.startTime}
                          endTime={data.eventDate.endTime}
                          timeZone={data.timezone}
                          openhouse={data.openHouseDate.date}
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

const mapStateToProps = state => ({
  schedulecar: state.schedulecar
});

const mapDispatchToProps = dispatch => ({
  fetchScheduleCar: (tokenId) => dispatch(fetchScheduleCar(tokenId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
