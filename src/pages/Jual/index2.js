import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Affix } from "antd";
import FormJual from "./FormJual";
import Img1 from "../../assets/image/jual/section-ex4.jpg";
import Img2 from "../../assets/image/jual/section2.jpeg";

const Content = () => (
  <div style={{ padding: 100, textAlign: "center", borderBottom: "1px solid" }}>
    Content
  </div>
);

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
        <Row style={{ marginLeft: 0, marginRight: 0, paddingTop:70 }}>
          <img
            style={{ width: "100%", objectFit: "contain" }}
            src={Img1}
          />
        </Row>
        <Row className="mb-3" style={{ marginLeft: 0, marginRight: 0 }}>
          <img style={{ width: "100%" }} src={Img2} />
        </Row>
        <div className="sticky-form">
          <Affix offsetTop={80}>
            <FormJual />
          </Affix>
        </div>
      </div>
    );
  }
}

export default Index;
