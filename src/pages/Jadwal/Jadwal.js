import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Pagination } from 'antd';
import { Redirect } from 'react-router';
import { Skeleton } from 'react-js-skeleton';
import MdLocationOn from 'react-icons/lib/md/location-on';
import { connect } from 'react-redux';
import linejpg from '../../assets/image/line.jpg';

import {
  fetchScheduleCar
  // fetchScheduleMot
} from '../../actions/getSchedule';
import { fetchAdmFee } from '../../actions/getAdmFee';
import { JadwalLelang } from '../Components/Card'; //import component from card

//function for pagination
const paginate = (array, page_size, page_number) => {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
};

export class Index extends Component {
  constructor() {
    super();

    this.state = {
      pageSize: 4,
      current: 1,
      isAuth: null,
      loading: true
    };
  }

  async componentDidMount() {
    const session = await localStorage.getItem('session');
    const data = await JSON.parse(session);
    if (data.tokenId != null) {
      this.setState({ isAuth: data });
    }
    await this.props.fetchAdmFee(data.tokenId);
    await this.props.fetchScheduleCar(data.tokenId);
    // await this.props.fetchScheduleMot(data.tokenId);
    this.setState({ loading: false });
  }

  //func for change page number (pagination)
  onChange = page => {
    this.setState({
      current: page
    });
  };

  render() {
    const session = localStorage.getItem('session');
    const data = JSON.parse(session);

    let total = Math.max(this.props.schedulecar.length, this.props.schedulecar.length);

    return data.tokenId == null ? (
      <Redirect
        to={{
          pathname: '/',
          state: { from: this.props.location }
        }}
      />
    ) : this.state.loading ? (
      <div className="page-jadwal" style={{ paddingBottom: '3%' }}>
        <div className="">
          <Grid style={{ paddingTop: '2%' }}>
            <div className="body-header text-center">
              <p className="title-section text-center">JADWAL LELANG TERDEKAT</p>
              <img src={linejpg} alt="" />
            </div>
            <Row>
              <Col md={12}>
                <div style={{ padding: 20, margin: 10, background: '#f8f8f8' }}>
                  <p style={{ fontWeight: 'bold' }}>
                    <Skeleton width={200} />
                  </p>
                  <p style={{ fontWeight: 'bold' }}>
                    <Skeleton width={100} />
                  </p>
                  <p>
                    <Skeleton width={225} />
                  </p>
                  <p>
                    <Skeleton width={220} />
                  </p>
                  <p>
                    <Skeleton width={150} />
                  </p>
                  <p>
                    <Skeleton width={190} />
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    ) : (
      <div className="page-jadwal" style={{ paddingBottom: '3%' }}>
        <div className="">
          <Grid style={{ paddingTop: '2%' }}>
            <div className="body-header text-center">
              <p className="title-section text-center">JADWAL LELANG TERDEKAT</p>
              <img src={linejpg} alt="" />
            </div>
            <Row>
              <Col md={12}>
                {this.props.schedulecar.length == 0 ? (
                  <center>
                    <p>Schedule Mobil Not Available</p>
                  </center>
                ) : (
                  <Row>
                    {paginate(this.props.schedulecar, this.state.pageSize, this.state.current).map(
                      (data, index) => (
                        <Col xs={3} md={3} key={data.auctionEventId}>
                          <JadwalLelang
                            transport={' MOBIL'}
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
                      )
                    )}
                  </Row>
                )}
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4} />
              <Col xs={12} md={4} className="text-center">
                <div className="pagination">
                  {this.props.schedulemot == null && this.props.schedulecar.length == 0 ? null : (
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
        <div className="location-lelang">
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4470743860265!2d106.73473651476907!3d-6.20460629550834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7b1852c75a1%3A0x6a976ae8016423df!2sPT.+DIGITAL+SARANA+LEGOAS!5e0!3m2!1sid!2sid!4v1549611252590"
                  title="map"
                  style={{ marginLeft: '10%', width: '80%', height: 600 }}
                  frameborder="0"
                  allowfullscreen
                />
                <div className="wrap-location">
                  <p className="sub-location">PT Digital Sarana Legoas</p>
                </div>
                <div className="body-location">
                  <p>Jl. Meruya Selatan N0. 12 RT 08 RW 04 Kel. Meruya Utara</p>
                  <p>Kec. Kembangan Jakarta Barat 11620</p>
                  <p>Indonesia</p>
                  <p>cs@legoas.co.id </p>
                </div>
              </Col>
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
