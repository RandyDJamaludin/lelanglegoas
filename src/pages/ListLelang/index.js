import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import {SkeletonImg, Skeleton} from 'react-js-skeleton'
import { Redirect } from "react-router";
import { ListLelang } from "../Components/Card";
import { connect } from "react-redux";
import { fetchProductByEvent } from "../../actions/getProduct";
import moment from "moment";
import "moment/locale/id";

class Index extends Component {
  state = {
    isAuth: null,
    loading: true
  };

  async componentDidMount() {
    if (this.props.sessionPersistance.tokenId != null) {
      await this.setState({ isAuth: this.props.sessionPersistance });
    }
    await this.props.fetchProductByEvent(
      this.props.sessionPersistance.tokenId,
      this.props.location.state.data.eventId
    );
    this.setState({ loading: false });
  }

  render() {
    const {
      transport,
      houseName,
      eventNumber,
      date
    } = this.props.location.state.data;

    // function handleChange(value) {
    //   console.log(`selected ${value}`);
    // }

    // function handleBlur() {
    //   console.log("blur");
    // }

    // function handleFocus() {
    //   console.log("focus");
    // }
    return this.props.sessionPersistance.tokenId == null ? (
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
              {/* <p className='header'> Pencarian </p> */}
              {/* <Row> 
                <Col md={2}>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    placeholder='Merk'
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="jack">Honda</Option>
                    <Option value="lucy">Yamaha</Option>
                    <Option value="tom">Suzuki</Option>
                  </Select>
                </Col>
                <Col md={2}>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    placeholder='Pilih Model'
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="jack">Model A</Option>
                    <Option value="lucy">Model B</Option>
                    <Option value="tom">Model C</Option>
                  </Select>
                </Col>
                <Col md={2}>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    placeholder='Dari Tahun'
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="jack">2000</Option>
                    <Option value="lucy">2001</Option>
                    <Option value="tom">2002</Option>
                  </Select>
                </Col>
                <Col md={2}>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    placeholder='Sampai Tahun'
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="jack">2014</Option>
                    <Option value="lucy">2015</Option>
                    <Option value="tom">2016</Option>
                  </Select>
                </Col>
                <Col md={2}>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    placeholder='Warna'
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="jack">Putih</Option>
                    <Option value="lucy">Abu - Abu</Option>
                    <Option value="tom">Merah</Option>
                  </Select>
                </Col>
                <Col md={2}>
                  <Button className='search'> Cari </Button>
                </Col>
              </Row> */}
            </Col>
          </Row>
          <Row style={{ paddingTop: "4%", paddingBottom: "4%" }}>
            {this.state.loading ? (
              <div className="listLelang" style={{ paddingBottom: "5%" }}>
              <Row>
                  <Col md={12}>
                    <Row className="contentLelang">
                      <Col xs={12} md={3}><SkeletonImg heightSkeleton={175} /></Col>
                      <Col xs={12} md={9}>
                        <Row>
                          <Col xs={12} md={10}>
                            <div className="headerLelang">
                              <p><b><Skeleton /></b></p>
                              <p><b><Skeleton /></b></p>
                            </div>
                          </Col>
                          <Col xs={12} md={2}>
                            <div className="headerLelang">
                              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                              <Skeleton />
                              </p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={10}>
                            <div className="headerLelang">
                              <p style={{ color: "#000", fontSize: 15 }}>
                              <Skeleton />
                              </p>
                              <p><Skeleton /></p>
                            </div>
                          </Col>
                          <Col xs={12} md={2}>
                            <div className="headerLelang">
                              <div className="bodyLelang">
                                <p
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: 30,
                                    color: "#3c8dbc",
                                    textAlign: "center",
                                    lineHeight: 0
                                  }}
                                >
                                  {" "}
                                  <Skeleton />
                                </p>
                                <p
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: 14,
                                    textAlign: "center",
                                    lineHeight: 0,
                                    marginTop: 10
                                  }}
                                >
                                  {" "}
                                  <Skeleton />
                                </p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={10}>
                            <div className="headerLelang">
                              <p style={{ fontSize: 22, fontWeight: "bold" }}>
                              <Skeleton />
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
              </Row>
            </div>
            ) : (
              this.props.receivedproductbyevent.map((data, index) => (
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
              ))
            )}
          </Row>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  receivedproductbyevent: state.receivedproductbyevent,
  sessionPersistance: state.sessionPersistance
});

const mapDispatchToProps = dispatch => ({
  fetchProductByEvent: (tokenId, eventId) =>
    dispatch(fetchProductByEvent(tokenId, eventId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
// const WrappedListLelang = Form.create()(Index);

// export default WrappedListLelang;
