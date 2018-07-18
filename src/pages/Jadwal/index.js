import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Pagination } from "antd";
import { Redirect } from "react-router";
import { JadwalLelang } from "../Components/Card";
import GoCalendar from "react-icons/lib/go/calendar";
import { connect } from "react-redux";
import { fetchScheduleCar, fetchScheduleMot } from "../../actions/getSchedule";

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

  componentDidMount = async () => {
    if (this.props.sessionPersistance.tokenId != null) {
      this.setState({ isAuth: this.props.sessionPersistance });
    }
    // await this.props.fetchScheduleCar(this.props.sessionPersistance);
    // await this.props.fetchScheduleMot(this.props.sessionPersistance);
  };

  onChange = page => {
    this.setState({
      current: page
    });
  };

  render() {
    let total = Math.max(
      this.props.schedulecar.length,
      this.props.schedulecar.length
    );
    return this.props.sessionPersistance.tokenId == null ? (
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
                {this.props.schedulecar == null ? (
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
                          transport={" ELEKTRONIK"}
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
                  <Pagination
                    defaultCurrent={1}
                    pageSize={this.state.pageSize}
                    total={total}
                    current={this.state.current}
                    onChange={this.onChange}
                  />
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
  fetchScheduleMot: tokenId => dispatch(fetchScheduleMot(tokenId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
