import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Img1 from "../../assets/image/tentangkami/section-ex5.jpg";

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
        <Row className="mb-3" style={{ marginLeft: 105, marginRight: 105, paddingTop:80, paddingBottom:40 }}>
          <img
            style={{ width: "100%", objectFit: "contain" }}
            src={Img1}
          />
        </Row>
        {/* <Row className="mb-3" style={{ marginLeft: 0, marginRight: 0 }}>
          <img style={{ width: "100%" }} src={Img1} />
    </Row> */}
      </div>
    );
  }
}

export default Index;
