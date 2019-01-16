import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { BannerJual } from "../Components/Partial";
import { Affix } from 'antd';
import FormJual from './FormJual';

const Content = () => <div style={{ padding:100, textAlign: 'center', borderBottom: '1px solid' }}>Content</div>;

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="mb-3">
            <Col xs={12} md={12}>
              <Content />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12} md={12}>
              <Content />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12} md={12}>
              <Content />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12} md={12}>
              <Content />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12} md={12}>
              <Content />
            </Col>
          </Row>
        </Grid>
        <div className="sticky-form">
          <Affix offsetTop={60}>
              <FormJual />
          </Affix>
        </div>
      </div>
    );
  }
}

export default Index;
