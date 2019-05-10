import React, { Component } from "react";
import Instafeed from "react-instafeed";
import { Grid, Row, Col } from "react-bootstrap";
import { Icon } from "antd";

const instafeedTarget = "instafeed";

class InstagramFeed extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="landing-lelang m-b-50" style={{ paddingTop: "2%", paddingBottom: "1%" }}>
        <Grid>
          <div className="body-header">
            <p className="title-section text-center">
              <Icon type="instagram" /> INSTAGRAM
            </p>
            <hr className="title-hr" />
          </div>
          <Row>
            <Col md={12}>
              <div id={instafeedTarget}>
                <Instafeed
                  limit="4"
                  ref="instafeed"
                  resolution="standard_resolution"
                  sortBy="most-recent"
                  target={instafeedTarget}
                  template={`<a href='{{link}}' target='_blank' class='instafeed__item'>
                      <img class='instafeed__item__background' src='{{image}}' />
                        <div class='instafeed__item__overlay'>
                          <div class='instafeed__item__overlay--inner'>
                          </div>
                        </div>
                    </a>`}
                  userId="7647214269"
                  clientId="afe9cc75ece54810a9d1c068ef5fa891"
                  accessToken="7647214269.afe9cc7.a1c885b3418b4d7792ad4c96fff352b3"
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default InstagramFeed;
