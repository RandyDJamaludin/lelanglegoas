import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { Divider } from "antd";
import { Redirect } from "react-router";
import {SkeletonImg, Skeleton} from 'react-js-skeleton'
import AliceCarousel from "react-alice-carousel";
import MdLocationOn from "react-icons/lib/md/location-on";
import MdAccessTime from "react-icons/lib/md/access-time";
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
    const session = await localStorage.getItem('session')
    const data = await JSON.parse(session)
    if (data.tokenId != null) {
      this.setState({ isAuth: data });
    }
    await this.props.fetchProductDetail(
      data.tokenId,
      this.props.match.params.id
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
    const session = localStorage.getItem('session')
    const dataSession = JSON.parse(session)

    const {
      auctionLotUnits, auctionLotNumber, finalBasePrice, auctionEvent
    } = this.props.receivedproductdetail
    return dataSession.tokenId == null ? (
      <Redirect
        to={{
          pathname: "/",
          state: { from: this.props.location }
        }}
      />
    ) : this.state.loading ? (
      <div className="wrap-viewCarPage">
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <p className="header"> <Skeleton width={400} /> </p>
              <div>
                <SkeletonImg heightSkeleton={400}/>
              </div>
              <div className="infoKendaraan">
                <Row>
                  <Col md={12}>
                    <div className="contentKendaraan">
                      <p style={{ fontSize: 16 }}> Detail Kendaraan </p>
                      <p className="header">
                        {" "}
                        Grade <span className="grade"> <Skeleton width={30} /> </span>{" "}
                      </p>
                      <Divider />
                    </div>
                  </Col>
                  <Col md={6}>
                    <p><Skeleton width={100} /></p>
                    <p><Skeleton width={90} /></p>
                    <p><Skeleton width={80} /></p>
                    <p><Skeleton width={150} /></p>
                    <p><Skeleton width={80} /></p>
                    <p><Skeleton width={150} /></p>
                    <p><Skeleton width={300} /></p>
                  </Col>
                  <Col md={6}>
                    <p><Skeleton width={200} /></p>
                    <p><Skeleton width={100} /></p>
                    <p><Skeleton width={150} /></p>
                    <p><Skeleton width={150} /></p>
                    <p><Skeleton width={100} /></p>
                    <p><Skeleton width={800} /></p>
                    <p><Skeleton width={120} /></p>
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
                    <div><p> LOT </p></div>
                  </Col>
                  <Col xs={8} md={8}>
                    <div><p><b> <Skeleton width={30} /> </b></p></div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4}>
                    <div><p> <Skeleton width={70} /> </p></div>
                  </Col>
                  <Col xs={8} md={8}>
                    <div><p><b> <Skeleton width={70} /> </b></p></div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4}>
                    <div><p> <Skeleton width={70} /> </p></div>
                  </Col>
                  <Col xs={8} md={8}>
                    <div><p><b> <Skeleton width={50} /> </b></p></div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4}>
                    <div><p> <Skeleton width={40} /> </p></div>
                  </Col>
                  <Col xs={8} md={8}>
                    <div><p><b> <Skeleton width={60} /> </b></p></div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4}>
                    <div><p> <Skeleton width={80} /> </p></div>
                  </Col>
                  <Col xs={8} md={8}>
                    <div><p><b> <Skeleton width={90} /> </b></p></div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4}>
                    <div><p> <Skeleton width={80} /> </p></div>
                  </Col>
                  <Col xs={8} md={8}>
                    <div><p style={{ fontSize: 16, fontWeight: "bold" }}> <Skeleton width={120} /> </p></div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4}>
                    <div><p> <Skeleton width={70} /> </p></div>
                  </Col>
                  <Col xs={8} md={8}>
                    <div><p><MdLocationOn />{" "}<b><Skeleton width={150} count={2} /></b></p></div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4}>
                    <div><p> <Skeleton width={70} /> </p></div>
                  </Col>
                  <Col xs={8} md={8}>
                    <div><p><FaCalendarCheckO /><b> <Skeleton width={100} /> </b></p></div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4}>
                    <div><p> <Skeleton width={70} /> </p></div>
                  </Col>
                  <Col xs={8} md={8}>
                    <div><p><MdAccessTime /><b><Skeleton width={100} /></b></p></div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    ) : this.props.receivedproductdetail == 0 ? (
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
              <p className="header"> {auctionLotUnits[0].unitName} </p>
              <div>
                <AliceCarousel
                  dotsDisabled={true}
                  buttonsDisabled={true}
                  ref={el => (this.Carousel = el)}
                >
                  {this.props.receivedimagesproduct.map((item, i) => (
                    <div className="multiSlider" key={i} >
                      <Image src={item.imageUri} />
                    </div>
                  ))}
                </AliceCarousel>
                {this.renderThumbs()}
              </div>

              <div className="infoKendaraan">
                <Row>
                  <Col md={12}>
                    <div className="contentKendaraan">
                      <p style={{ fontSize: 16 }}> Detail Kendaraan </p>
                      <p className="header">
                        {" "}
                        Grade <span className="grade"> {auctionLotUnits[0].unitGrade} </span>{" "}
                      </p>
                      <Divider />
                    </div>
                  </Col>
                  <Col md={6}>
                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[0].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[0].specValue} </span>
                    </p>

                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[1].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[1].specValue} </span>
                    </p>

                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[2].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[2].specValue} </span>
                    </p>

                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[3].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[3].specValue} </span>
                    </p>

                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[4].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[4].specValue} </span>
                    </p>

                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[5].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[5].specValue} </span>
                    </p>

                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[6].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[6].specValue} </span>
                    </p>
                  </Col>

                  <Col md={6}>
                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[7].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[7].specValue} </span>
                    </p>

                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[8].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[8].specValue} </span>
                    </p>

                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[9].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[9].specValue} </span>
                    </p>

                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[10].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[10].specValue} </span>
                    </p>

                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[11].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[11].specValue} </span>
                    </p>

                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[12].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[12].specValue} </span>
                    </p>

                    <p>
                      {" "}
                      {auctionLotUnits[0].auctionLotUnitSpecs[13].specName} <span style={{ fontWeight: "bold" }}> {auctionLotUnits[0].auctionLotUnitSpecs[13].specValue} </span>
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
                        <b> {auctionLotNumber} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> {auctionLotUnits[0].auctionLotUnitSpecs[0].specName} </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {auctionLotUnits[0].auctionLotUnitSpecs[0].specValue} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> {auctionLotUnits[0].auctionLotUnitSpecs[1].specName} </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {auctionLotUnits[0].auctionLotUnitSpecs[1].specValue} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> {auctionLotUnits[0].auctionLotUnitSpecs[2].specName} </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {auctionLotUnits[0].auctionLotUnitSpecs[2].specValue} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> {auctionLotUnits[0].auctionLotUnitSpecs[3].specName} </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {auctionLotUnits[0].auctionLotUnitSpecs[3].specValue} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> START BID </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p style={{ fontSize: 16, fontWeight: "bold" }}>
                        {" "}
                        Rp.{" "}
                        {finalBasePrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> LOKASI </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <MdLocationOn />{" "}
                        <b>
                          {auctionEvent.auctionHouseAddr}{" "}
                        </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> LELANG </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <FaCalendarCheckO />
                        <b> {moment(auctionEvent.eventDate).format("D MMMM YYYY")} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> WAKTU </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <MdAccessTime />
                        <b>
                          {" "}
                          {auctionEvent.eventSchedules[0].startTime} - {auctionEvent.eventSchedules[0].endTime}{" "}
                          {auctionEvent.timezone}{" "}
                        </b>
                      </p>
                    </div>
                  </Col>
                </Row>
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
  receivedproductdetail: state.receivedproductdetail
});

const mapDispatchToProps = dispatch => ({
  fetchProductDetail: (tokenId, lotId) =>
    dispatch(fetchProductDetail(tokenId, lotId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
