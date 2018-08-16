import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import {SkeletonImg, Skeleton} from 'react-js-skeleton'
import { Redirect } from "react-router";
import { ListLelang } from "../Components/Card";
import { connect } from "react-redux";
import { fetchByEventId } from "../../actions/getSchedule";
import { fetchProductByEvent } from "../../actions/getProduct";
import moment from "moment";
import "moment/locale/id";

class Index extends Component {
  state = {
    isAuth: null,
    loading: true
  };

  async componentDidMount() {
    const session = await localStorage.getItem('session')
    const data = await JSON.parse(session)
    if (data.tokenId != null) {
      await this.setState({ isAuth: data });
    }
    await this.props.fetchByEventId(data.tokenId, this.props.match.params.id)
    if(this.props.schedulebyid != 0){
      await this.setState({
        transport : 'MOBIL',
        houseName : this.props.schedulebyid[0].auctionHouseName,
        eventNumber : this.props.schedulebyid[0].eventNumber,
        date : this.props.schedulebyid[0].eventDate.date
      })
    }
    await this.props.fetchProductByEvent(
      data.tokenId,
      this.props.match.params.id
    );
    this.setState({ loading: false });
  }

  render() {
    const session = localStorage.getItem('session')
    const data = JSON.parse(session)

    const { transport, houseName, eventNumber, date } = this.state;
    return data.tokenId == null ? (
      <Redirect
        to={{
          pathname: "/",
          state: { from: this.props.location }
        }}
      />
    ) : this.state.loading ? (
      <div className="wrap-ListLelang">
      <Grid>
      <Row>
        <Col md={12}>
          <p className="header">
            {" "}
            <Skeleton width={350} />
          </p>
        </Col>
      </Row>
      <Row style={{ paddingTop: "4%", paddingBottom: "4%" }}>
        <div className="listLelang" style={{ paddingBottom: "5%" }}>
          <Row>
              <Col md={12}>
                <Row className="contentLelang">
                  <Col xs={12} md={3}><SkeletonImg heightSkeleton={160} /></Col>
                  <Col xs={12} md={9}>
                    <Row>
                      <Col xs={12} md={10}>
                        <div className="headerLelang">
                          <p><b><Skeleton width={200} /></b></p>
                          <p><b><Skeleton width={200} /></b></p>
                        </div>
                      </Col>
                      <Col xs={12} md={2}></Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={10}>
                        <div className="headerLelang">
                          <p style={{ color: "#000", fontSize: 18 }}>
                          <Skeleton width={225} />
                          </p>
                          <p><Skeleton width={175} /></p>
                          <p style={{ fontSize: 22, fontWeight: "bold" }}>
                          <Skeleton width={200} />
                          </p>
                        </div>
                      </Col>
                      <Col xs={12} md={2}>
                        <div className="headerLelang">
                          <p style={{ textAlign: "center", fontWeight: "bold" }}>
                            <Skeleton width={100} />
                          </p>
                          <div className="bodyLelang">
                            <center>
                              <SkeletonImg heightSkeleton={60} widthSkeleton={50} />
                            </center>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={10}></Col>
                      <Col xs={12} md={2}>
                        <div className="headerLelang">
                          <div className="bodyLelang">
                            <p
                              style={{
                                fontWeight: "bold",
                                fontSize: 14,
                                textAlign: "center",
                                lineHeight: 0,
                              }}
                            >
                              <Skeleton width={75} />
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
          </Row>
        </div>
      </Row>
      </Grid>
      </div>
    ) : this.props.schedulebyid == 0 ? (
      <Redirect
        to={{
          pathname: "/",
          state: { from: this.props.location }
        }}
      />
    ) : (
      <div className="wrap-ListLelang">
        {this.props == null
          ? null
          : null}
        <Grid>
          <Row>
            <Col md={12}>
              <p className="header">
                {" "}
                DAFTAR {transport} - {houseName} {eventNumber} |{" "}
                {moment(date).format("D MMMM YYYY")}{" "}
              </p>
            </Col>
          </Row>
          <Row style={{ paddingTop: "4%", paddingBottom: "4%" }}>
            {this.props.receivedproductbyevent.map((data, index) => (
                <Col md={12} key={data.UnitKeyFinder}>
                  <ListLelang
                    number={data.number}
                    name={data.UnitName}
                    merek={data.AuctionLotUnitSpecs[0].SpecValue}
                    model={data.AuctionLotUnitSpecs[1].SpecValue}
                    tipe={data.AuctionLotUnitSpecs[2].SpecValue}
                    police={data.AuctionLotUnitSpecs[3].SpecValue}
                    year={data.AuctionLotUnitSpecs[4].SpecValue}
                    warna={data.AuctionLotUnitSpecs[11].SpecValue}
                    km={data.AuctionLotUnitSpecs[12].SpecValue}
                    grade={data.UnitGrade}
                    lotNumber={data.AuctionLot.AuctionLotNumber}
                    price={data.AuctionLot.FinalBasePrice}
                    image={data.ImageUri}
                    lotId={data.AuctionLot.AuctionLotId}
                    // dataJadwal={this.props.location.state.data}
                    data={data}
                  />
                </Col>
              ))}
          </Row>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  receivedproductbyevent: state.receivedproductbyevent,
  schedulebyid: state.schedulebyid,
  sessionPersistance: state.sessionPersistance
});

const mapDispatchToProps = dispatch => ({
  fetchProductByEvent: (tokenId, eventId) =>
    dispatch(fetchProductByEvent(tokenId, eventId)),
  fetchByEventId: (tokenId, eventId) => dispatch(fetchByEventId(tokenId, eventId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);