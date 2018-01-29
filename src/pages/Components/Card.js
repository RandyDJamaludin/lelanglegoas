import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { Tabs, Tag, Button, Icon } from "antd";
import { Link } from "react-router-dom";
import { DataContentTab } from "../AllData/DataCard";
const TabPane = Tabs.TabPane;


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
              Start Bid <span className="orange"> {this.props.price}</span>
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
          <p className="color"> {this.props.color} </p>
          <p className="last">
            
            Last Bid <span className="orange"> {this.props.lastBid}</span>
          </p>
          <Tag color="green">{this.props.openhouse}</Tag>
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
            <p className="skin"> {this.props.color} </p>
            <p className="price">
              
              Start Bid <span className="orange"> {this.props.price} </span>
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
      <div className="listLelang" style={{ paddingBottom: "10%" }}>
        <Row>
          <Link to="/view-car">
            <Col md={12}>
              <Row className="contentLelang">
                <Col md={1}>
                  <p className="lot">
                    
                    LOT <br /> 1
                  </p>
                </Col>
                <Col xs={12} md={3}>
                  <Image src={this.props.image} width="100%" />
                </Col>
                <Col xs={12} md={8}>
                  <div className="headerLelang">
                    <p> DATSUN GO + PANCA T </p>
                  </div>
                  <Row className="box">
                    <Col md={2}>
                      <p className="title"> Tahun </p>
                      <p className="sub-title"> 2017 </p>
                    </Col>
                    <Col md={2}>
                      <p className="title"> No. Polisi </p>
                      <p className="sub-title"> B 4053 SCF </p>
                    </Col>
                    <Col md={2}>
                      <p className="title"> STNK Nota Pajak </p>
                      <p className="sub-title"> 11/07/2018 </p>
                    </Col>
                    <Col md={4}>
                      <p className="title"> Harga </p>
                      <p className="sub-title"> Rp 106,500,00 </p>
                    </Col>
                    <Tag color="green">Bundle 1</Tag>
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
          <Icon type="clock-circle-o" /> {this.props.time}
        </p>
        <Link to="/list-lelang"> Lihat Lot </Link>
      </div>
    );
  }
}


export class TabLeft extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div className="desktopTabs">
            <Row>
              <Col xs={12} md={12}>
                <Tabs
                  defaultActiveKey="1"
                  tabPosition={"left"}
                  style={{ height: "auto" }}
                >
                  <TabPane tab="Lelang terbaru" key="1">
                    <Row>
                      {DataContentTab.map((data, index) => (
                        <Col xs={12} md={4} key={data.key}>
                          <ContentTab
                            name={data.name}
                            image={data.image}
                            price={data.price}
                            button={data.button}
                          />
                        </Col>
                      ))}
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <Button className="explore">
                          <p>
                            Lihat Semua Lelang <Icon type="arrow-right" />
                          </p>
                        </Button>
                      </Col>
                    </Row>
                  </TabPane>

                  <TabPane tab="Daihatsu" key="2">
                    <Row>
                      {DataContentTab.map((data, index) => (
                        <Col xs={12} md={4} key={data.key}>
                          <ContentTab
                            name={data.name}
                            image={data.image}
                            price={data.price}
                            button={data.button}
                          />
                        </Col>
                      ))}
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <Button className="explore">
                          <p>
                            View All New Auctions <Icon type="arrow-right" />
                          </p>
                        </Button>
                      </Col>
                    </Row>
                  </TabPane>

                  <TabPane tab="Toyota" key="3">
                    <Row>
                      {DataContentTab.map((data, index) => (
                        <Col xs={12} md={4} key={data.key}>
                          <ContentTab
                            name={data.name}
                            image={data.image}
                            price={data.price}
                            button={data.button}
                          />
                        </Col>
                      ))}
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <Button className="explore">
                          <p>
                            View All New Auctions <Icon type="arrow-right" />
                          </p>
                        </Button>
                      </Col>
                    </Row>
                  </TabPane>

                  <TabPane tab="Honda" key="4">
                    <Row>
                      {DataContentTab.map((data, index) => (
                        <Col xs={12} md={4} key={data.key}>
                          <ContentTab
                            name={data.name}
                            image={data.image}
                            price={data.price}
                            button={data.button}
                          />
                        </Col>
                      ))}
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <Button className="explore">
                          <p>
                            View All New Auctions <Icon type="arrow-right" />
                          </p>
                        </Button>
                      </Col>
                    </Row>
                  </TabPane>

                  <TabPane tab="Mitsubishi" key="5" />
                  <TabPane tab="Nissan" key="6" />
                  <TabPane tab="Hyundai" key="7" />
                  <TabPane tab="Suzuki" key="8" />
                </Tabs>
              </Col>
            </Row>
          </div>

          <div className="mobileTabs">
            <Row>
              <Col xs={12}>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Lelang terbaru" key="1">
                    <Row>
                      {DataContentTab.map((data, index) => (
                        <Col xs={12} md={4} key={data.key}>
                          <ContentTab
                            name={data.name}
                            image={data.image}
                            price={data.price}
                            button={data.button}
                          />
                        </Col>
                      ))}
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <Button className="explore">
                          <p>
                            Lihat Semua Lelang <Icon type="arrow-right" />
                          </p>
                        </Button>
                      </Col>
                    </Row>
                  </TabPane>

                  <TabPane tab="Daihatsu" key="2">
                    <Row>
                      {DataContentTab.map((data, index) => (
                        <Col xs={12} md={4} key={data.key}>
                          <ContentTab
                            name={data.name}
                            image={data.image}
                            price={data.price}
                            button={data.button}
                          />
                        </Col>
                      ))}
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <Button className="explore">
                          <p>
                            View All New Auctions <Icon type="arrow-right" />
                          </p>
                        </Button>
                      </Col>
                    </Row>
                  </TabPane>

                  <TabPane tab="Toyota" key="3">
                    <Row>
                      {DataContentTab.map((data, index) => (
                        <Col xs={12} md={4} key={data.key}>
                          <ContentTab
                            name={data.name}
                            image={data.image}
                            price={data.price}
                            button={data.button}
                          />
                        </Col>
                      ))}
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <Button className="explore">
                          <p>
                            View All New Auctions <Icon type="arrow-right" />
                          </p>
                        </Button>
                      </Col>
                    </Row>
                  </TabPane>

                  <TabPane tab="Honda" key="4">
                    <Row>
                      {DataContentTab.map((data, index) => (
                        <Col xs={12} md={4} key={data.key}>
                          <ContentTab
                            name={data.name}
                            image={data.image}
                            price={data.price}
                            button={data.button}
                          />
                        </Col>
                      ))}
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <Button className="explore">
                          <p>
                            View All New Auctions <Icon type="arrow-right" />
                          </p>
                        </Button>
                      </Col>
                    </Row>
                  </TabPane>

                  <TabPane tab="Mitsubishi" key="5" />
                  <TabPane tab="Nissan" key="6" />
                  <TabPane tab="Hyundai" key="7" />
                  <TabPane tab="Suzuki" key="8" />
                </Tabs>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}