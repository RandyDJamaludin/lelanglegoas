import React, { Component } from 'react'
import { Tabs } from 'antd';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button, Icon } from 'antd'
import ContentTab from './ContentTab'
import { DataContentTab } from '../AllData/DataContentTab'
const TabPane = Tabs.TabPane;

export class Card2 extends Component {
    render() { 
        return (
          <div className='body-card2'>
            <Grid>
              <Row>
                <Col xs={12} md={12}>
                  <Tabs
                    defaultActiveKey="1"
                    tabPosition={'left'}
                    style={{ height: 'auto' }}
                  >
                    <TabPane tab="New Auctions" key="1">
                        
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
                            <Button className='explore'>
                              <p>
                                View All New Auctions <Icon type="arrow-right" /> 
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
                            <Button className='explore'>
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
                            <Button className='explore'>
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
                            <Button className='explore'>
                              <p>
                                View All New Auctions <Icon type="arrow-right" /> 
                              </p> 
                            </Button>
                          </Col>
                        </Row>

                    </TabPane>
                    
                    <TabPane tab="Mitsubishi" key="5"></TabPane>
                    <TabPane tab="Nissan" key="6"></TabPane>
                    <TabPane tab="Hyundai" key="7"></TabPane>
                    <TabPane tab="Suzuki" key="8"></TabPane>
                  </Tabs>
                </Col>
              </Row>
            </Grid>
          </div>
        )
    }
}
 
export default Card2;