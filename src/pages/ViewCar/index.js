import React, { Component } from "react";
import { Grid, Row, Col, Image, ProgressBar } from "react-bootstrap";
import { Divider, Tag, Spin } from "antd";
import { Redirect } from "react-router";
import AliceCarousel from "react-alice-carousel";
import MdAccessTime from "react-icons/lib/md/access-time";
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
    await this.props.fetchProductDetail(
      this.props.sessionPersistance.tokenId,
      171
    );
    await this.setState({ loading: false });
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
    console.log("physical", this.props.receivedimageeveryproduct);
    const {
      grade,
      km,
      lotId,
      lotNumber,
      merek,
      model,
      tipe,
      name,
      police,
      price,
      warna,
      year,
      dataJadwal
    } = this.props.location.state.data;
    return this.props.sessionPersistance.tokenId == null ? (
      <Redirect
        to={{
          pathname: "/",
          state: { from: this.props.location }
        }}
      />
    ) : this.state.loading ? (
      <div>
        <ProgressBar active striped bsStyle="info" now={100} />
      </div>
    ) : (
      <div className="wrap-viewCarPage">
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <p className="header"> {name} </p>
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
                      Merk <span style={{ fontWeight: "bold" }}> {merek} </span>
                    </p>

                    <p>
                      {" "}
                      Type <span style={{ fontWeight: "bold" }}> {tipe} </span>
                    </p>

                    <p>
                      {" "}
                      No Polisi{" "}
                      <span style={{ fontWeight: "bold" }}> {police}</span>
                    </p>

                    <p>
                      {" "}
                      Tahun <span style={{ fontWeight: "bold" }}> {year} </span>
                    </p>

                    <p>
                      {" "}
                      Kapasitas Mesin (CC){" "}
                      <span style={{ fontWeight: "bold" }}> 8066CC</span>
                    </p>
                  </Col>

                  <Col md={6}>
                    <p>
                      {" "}
                      STNK <span style={{ fontWeight: "bold" }}> ADA </span>
                    </p>

                    <p>
                      {" "}
                      Masa Berlaku STNK{" "}
                      <span style={{ fontWeight: "bold" }}> 12/10/2025 </span>
                    </p>

                    <p>
                      {" "}
                      BPKB <span style={{ fontWeight: "bold" }}> ADA </span>
                    </p>

                    <p>
                      {" "}
                      Faktur <span style={{ fontWeight: "bold" }}> ADA </span>
                    </p>

                    <p>
                      {" "}
                      Kapasitas Mesin (CC){" "}
                      <span style={{ fontWeight: "bold" }}> 3127CC</span>
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
                      <p> Merek </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {merek} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Model </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {model} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> Tipe </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {tipe} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <p> NO POLISI </p>
                    </div>
                  </Col>

                  <Col xs={8} md={8}>
                    <div>
                      <p>
                        <b> {police} </b>
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
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
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
                          {dataJadwal.houseAddress},{dataJadwal.location}{" "}
                        </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
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
                        <b> {moment(dataJadwal.date).format("D MMMM YYYY")} </b>
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row>
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
                </Row>

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
  receivedproductdetail: state.receivedproductdetail,
  receivedimagesproduct: state.receivedimagesproduct,
  receivedimageeveryproduct: state.receivedimageeveryproduct,
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
