import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Pagination } from "antd";
import { Redirect } from "react-router";
import { JadwalLelang } from "../Components/Card";
import GoCalendar from "react-icons/lib/go/calendar";
import { connect } from "react-redux";
import { 
  fetchScheduleCar, 
  // fetchScheduleMot
 } from "../../actions/getSchedule";
import { fetchAdmFee } from "../../actions/getAdmFee";

const paginate = (array, page_size, page_number) => {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
};

export class Index extends Component {
  constructor() {
    super();

    this.state = {
      pageSize: 3,
      current: 1,
      isAuth: null
    };
  }

  async componentDidMount(){
    const session = await localStorage.getItem('session')
    const data = await JSON.parse(session)
    if (data.tokenId != null) {
      this.setState({ isAuth: data });
    }
    await this.props.fetchAdmFee(data.tokenId);
    await this.props.fetchScheduleCar(data.tokenId);
    // await this.props.fetchScheduleMot(data.tokenId);
  };

  onChange = page => {
    this.setState({
      current: page
    });
  };

  render() {
    const session = localStorage.getItem('session')
    const data = JSON.parse(session)

    let total = Math.max(
      this.props.schedulecar.length,
      this.props.schedulecar.length
    );

    return data.tokenId == null ? (
      <Redirect
        to={{
          pathname: "/",
          state: { from: this.props.location }
        }}
      />
    ) : (
      <div className="page-jadwal" style={{ paddingBottom: "3%" }}>
        <div className="landing-lelang">
          <Grid style={{ paddingTop: "2%" }}>
            <div className="body-header">
              <p>
                <GoCalendar id="date" /> JADWAL LELANG
              </p>
              <hr />
            </div>
            <Row>
              <Col md={6}>
                {this.props.schedulecar.length == 0 ? (
                  <center>
                    <p>Schedule Mobil Not Available</p>
                  </center>
                ) : (
                  <Row>
                    {paginate(
                      this.props.schedulecar,
                      this.state.pageSize,
                      this.state.current
                    ).map((data, index) => (
                      <Col xs={12} md={12} key={data.auctionEventId}>
                        <JadwalLelang
                          transport={" MOBIL"}
                          eventCode={data.eventCode}
                          eventNumber={data.eventNumber}
                          location={data.auctionHouseCity}
                          date={data.eventDate.date}
                          startTime={data.eventDate.startTime}
                          endTime={data.eventDate.endTime}
                          timeZone={data.timezone}
                          openhouse={data.openHouseDate.date}
                          houseName={data.auctionHouseName}
                          houseAddress={data.auctionHouseAddress}
                          eventId={data.auctionEventId}
                          admfee={this.props.receivedadmfee.CAR}
                        />
                      </Col>
                    ))}
                  </Row>
                )}
              </Col>
              <Col md={6}>
                {this.props.schedulemot == null ? (
                  <center>
                    <p>Schedule Motor Not Available</p>
                  </center>
                ) : (
                  <Row>
                    {paginate(
                      this.props.schedulemot,
                      this.state.pageSize,
                      this.state.current
                    ).map((data, index) => (
                      <Col xs={12} md={12} key={data.auctionEventId}>
                        <JadwalLelang
                          transport={" MOTOR"}
                          eventCode={data.eventCode}
                          eventNumber={data.eventNumber}
                          location={data.auctionHouseProvince}
                          date={data.eventDate.date}
                          startTime={data.eventDate.startTime}
                          endTime={data.eventDate.endTime}
                          timeZone={data.timezone}
                          openhouse={data.openHouseDate.date}
                          houseName={data.auctionHouseName}
                          houseAddress={data.auctionHouseAddress}
                          eventId={data.auctionEventId}
                          admfee={this.props.receivedadmfee.MOT}
                        />
                      </Col>
                    ))}
                  </Row>
                )}
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4} />
              <Col xs={12} md={4}>
                <div className="pagination">
                {this.props.schedulemot == null && this.props.schedulecar.length == 0 ? (
                  null
                ) : (
                  <Pagination
                    defaultCurrent={1}
                    pageSize={this.state.pageSize}
                    total={total}
                    current={this.state.current}
                    onChange={this.onChange}
                  />
                )}
                </div>
              </Col>
              <Col xs={12} md={4} />
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schedulecar: state.schedulecar,
  schedulemot: state.schedulemot,
  receivedadmfee: state.receivedadmfee,
  sessionPersistance: state.sessionPersistance
});

const mapDispatchToProps = dispatch => ({
  fetchScheduleCar: tokenId => dispatch(fetchScheduleCar(tokenId)),
  // fetchScheduleMot: tokenId => dispatch(fetchScheduleMot(tokenId)),
  fetchAdmFee: tokenId => dispatch(fetchAdmFee(tokenId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
