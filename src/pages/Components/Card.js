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
    const isBundle = this.props.bundle;
    let button;
    if (isBundle === '') {
    } else {
      button = <Tag color="green">{this.props.bundle}</Tag>
    }

    return (
      <div className="listLelang" style={{ paddingBottom: "2%" }}>
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
                    <Col md={2}>
                      <p className="title"> Tahun </p>
                      <p className="sub-title"> {this.props.year} </p>
                    </Col>
                    <Col md={2}>
                      <p className="title"> No. Polisi </p>
                      <p className="sub-title"> {this.props.police} </p>
                    </Col>
                    <Col md={2}>
                      <p className="title"> STNK Nota Pajak </p>
                      <p className="sub-title"> {this.props.pajak} </p>
                    </Col>
                    <Col md={4}>
                      <p className="title"> Harga </p>
                      <p className="sub-title"> {this.props.price}</p>
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