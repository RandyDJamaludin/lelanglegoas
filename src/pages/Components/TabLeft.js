import React, { Component } from "react";
import { Tabs, Button, Icon } from "antd";
import { Grid, Row, Col } from "react-bootstrap";
import { ContentTab } from "./Card";
import { DataContentTab } from "../AllData/DataCard";
const TabPane = Tabs.TabPane;

export class Card2 extends Component {
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

export default Card2;
