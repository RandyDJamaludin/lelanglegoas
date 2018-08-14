import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { Divider } from "antd";
import { Redirect } from "react-router";
import {SkeletonImg, Skeleton} from 'react-js-skeleton'
import AliceCarousel from "react-alice-carousel";
import MdLocationOn from "react-icons/lib/md/location-on";
import FaCalendarCheckO from "react-icons/lib/fa/calendar-check-o";
import moment from "moment";
import "moment/locale/id";

import { connect } from "react-redux";
import { fetchProductDetail } from "../../actions/getProduct";

class Index extends Component {
  state = {
    isAuth: null,
    loading: true
  };

  async componentDidMount() {
    if (this.props.sessionPersistance.tokenId != null) {
      this.setState({ isAuth: this.props.sessionPersistance });
    }
    await this.props.fetchProductDetail(
      this.props.sessionPersistance.tokenId,
      this.props.location.state.data.lotId
    );
    this.setState({loading: false})
  }

  renderThumbs = () => (
    <div className="multiSliderThumbs">
      <Row>
        {this.props.receivedimagesproduct.map((item, i) => (
          <Col
            xs={4}
            md={4}
            key={i}
            onClick={() => this.Carousel._onDotClick(i)}
          >
            <Image src={item.imageUri} />
          </Col>
        ))}
      </Row>
    </div>
  );
  render() {
    const {
      grade, lotNumber, name,
      price, data
    } = this.props.location.state.data;
    return this.props.sessionPersistance.tokenId == null ? (
      <Redirect
        to={{
          pathname: "/",
          state: { from: this.props.location }
        }}
      />
    ) : (
      <div className="wrap-viewCarPage">
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <p className="header"> {name} </p>
              {this.state.loading ? (
                <SkeletonImg heightSkeleton={400}/>
              ) : (
                <div>
                <AliceCarousel
                  dotsDisabled={true}
                  buttonsDisabled={true}
                  ref={el => (this.Carousel = el)}
                >
                  {this.props.receivedimagesproduct.map((item, i) => (
                    <div className="multiSlider">
                      <Image src={item.imageUri} />
                    </div>
                  ))}
                </AliceCarousel>
                {this.renderThumbs()}
              </div>
              )}
              

              <div className="infoKendaraan">
                <Row>
                  <Col md={12}>
                    <div className="contentKendaraan">
                      <p style={{ fontSize: 16 }}> Detail Kendaraan </p>
                      <p className="header">
                        {" "}
                        Grade <span className="grade"> {grade} </span>{" "}
                      </p>
                      <Divider />
                    </div>
                  </Col>
                  <Col md={6}>
                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[0].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[0].SpecValue} </span>
                    </p>

                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[1].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[1].SpecValue} </span>
                    </p>

                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[2].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[2].SpecValue} </span>
                    </p>

                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[3].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[3].SpecValue} </span>
                    </p>

                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[4].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[4].SpecValue} </span>
                    </p>

                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[5].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[5].SpecValue} </span>
                    </p>

                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[6].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[6].SpecValue} </span>
                    </p>
                  </Col>

                  <Col md={6}>
                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[7].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[7].SpecValue} </span>
                    </p>

                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[8].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[8].SpecValue} </span>
                    </p>

                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[9].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[9].SpecValue} </span>
                    </p>

                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[10].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[10].SpecValue} </span>
                    </p>

                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[11].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[11].SpecValue} </span>
                    </p>

                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[12].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[12].SpecValue} </span>
                    </p>

                    <p>
                      {" "}
                      {data.AuctionLotUnitSpecs[13].SpecName} <span style={{ fontWeight: "bold" }}> {data.AuctionLotUnitSpecs[13].SpecValue} </span>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="right-panel">
                <p className="title"> INFORMASI LELANG </p>
              </div>
              <div className="body-panel">
                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Lot </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {lotNumber} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> {data.AuctionLotUnitSpecs[0].SpecValue} </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {data.AuctionLotUnitSpecs[0].SpecValue} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> {data.AuctionLotUnitSpecs[1].SpecValue} </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {data.AuctionLotUnitSpecs[1].SpecValue} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> {data.AuctionLotUnitSpecs[2].SpecValue} </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {data.AuctionLotUnitSpecs[2].SpecValue} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> {data.AuctionLotUnitSpecs[3].SpecValue} </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {data.AuctionLotUnitSpecs[3].SpecValue} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Start Bid </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p style={{ fontSize: 16, fontWeight: "bold" }}>
                        {" "}
                        Rp.{" "}
                        {price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Lokasi </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <MdLocationOn />{" "}
                        <b>
                          {data.AuctionLot.AuctionEvent.AuctionHouse.AuctionHouseAddr}{" "}
                        </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Lelang </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <FaCalendarCheckO />
                        <b> {moment(data.AuctionLot.AuctionEvent.EventDate).format("D MMMM YYYY")} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                {/* <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Open House </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <FaCalendarCheckO />
                        <b>
                          {" "}
                          {moment(dataJadwal.openhouse).format(
                            "D MMMM YYYY"
                          )}{" "}
                        </b>
                      </p>
                    </div>
                  </Col>
                </Row> */}

                {/* <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Waktu </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <MdAccessTime />
                        <b>
                          {" "}
                          {dataJadwal.startTime} - {dataJadwal.endTime}{" "}
                          {dataJadwal.timeZone}{" "}
                        </b>
                      </p>
                    </div>
                  </Col>
                </Row> */}

                {/* <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Status </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <Tag color="#f50">Non available</Tag>
                      <Tag color="#87d068">Available</Tag> 
                    </div>
                  </Col>
                </Row> */}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  receivedimagesproduct: state.receivedimagesproduct,
  sessionPersistance: state.sessionPersistance
});

const mapDispatchToProps = dispatch => ({
  fetchProductDetail: (tokenId, lotId) =>
    dispatch(fetchProductDetail(tokenId, lotId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
