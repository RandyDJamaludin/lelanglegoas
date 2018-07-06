import React, { Component } from "react";
import { Grid, Row, Col, ProgressBar } from "react-bootstrap";
import {
  Icon,
  Divider,
  Input,
  Select,
  Form,
  Pagination,
  Button,
  Menu,
  Spin
} from "antd";
import { NavLink, Redirect } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import {
  DataCardCarousel,
  DataJadwalMotor,
  DataJadwalMobil,
  DataCardLocation,
  DataContentTab
} from "../AllData/DataCard";
import {
  CardCarousel,
  JadwalLelang,
  SearchLelang,
  ContentTab
} from "../Components/Card";
import { Banner } from "../Components/Partial";
import Map from "../Components/Map";
import { connect } from "react-redux";
import { fetchScheduleCar, fetchScheduleMot } from "../../actions/getSchedule";
import { fetchBrand } from "../../actions/getBrand";
import {
  fetchProductRecomended,
  fetchProductByEvent,
  fetchProductDetail
} from "../../actions/getProduct";
import { fetchAdmFee } from "../../actions/getAdmFee";
import { fetchMerek, fetchModel, fetchTipe } from "../../actions/searchProduct";
import { login, cekToken } from "../../actions/login";
const SubMenu = Menu.SubMenu;

const FormItem = Form.Item;
const Option = Select.Option;

const paginate = (array, page_size, page_number) => {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
};

class Index extends Component {
  constructor() {
    super();

    this.state = {
      merk: "",
      model: "",
      tipe: "",
      session: {},
      loading: true,
      progress: 0,
      resultSearch: [],
      pageSize: 2,
      current: 1
    };
  }

  onChange = page => {
    this.setState({
      current: page
    });
  };

  async componentDidMount() {
    await this.props.login("TELECREATIVE", "01042018");
    await this.setState({ progress: 15 });
    const session = JSON.parse(localStorage.getItem("session"));
    await this.setState({ session });
    await this.setState({ progress: 30 });
    await this.props.cekToken(
      session.tokenId,
      session.RoleCode,
      session.officeCode
    );
    await this.setState({ progress: 45 });
    await this.props.fetchScheduleCar(session.tokenId);
    await this.setState({ progress: 60 });
    await this.props.fetchScheduleMot(session.tokenId);
    await this.setState({ progress: 75 });
    await this.props.fetchBrand(session.tokenId);
    await this.setState({ progress: 80 });
    await this.props.fetchProductRecomended(session.tokenId);
    await this.getImageRecomend(
      this.props.receivedproductrecomend.map(
        data => data.AuctionLot.AuctionLotId
      )
    );
    await this.setState({ progress: 95 });
    await this.props.fetchAdmFee(session.tokenId)
    await this.setState({ loading: false });
  }

  async getImageRecomend(lotId) {
    for (let i = 0; i < lotId.length; i++) {
      this.props.fetchProductDetail(this.state.session.tokenId, lotId[i]);
    }
  }

  async handleSearch() {
    const { session, merk, model, tipe } = this.state;
    if (merk != "" && model != "" && tipe != "") {
      await this.props.fetchTipe(session.tokenId, merk, model, tipe);
    } else if (merk != "" && model != "" && tipe == "") {
      await this.props.fetchModel(session.tokenId, merk, model);
    } else if (merk != "" && model == "" && tipe == "") {
      await this.props.fetchMerek(session.tokenId, merk);
    }
    await this.setState({ resultSearch: this.props.receivedsearchproduct });
  }

  static defaultProps = {
    center: { lat: 40.744679, lng: -73.948542 },
    zoom: 11
  };
  render() {
    let total = Math.max(
      this.props.receivedproductrecomend.length,
      this.props.receivedsearchproduct.length
    );
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };

    return this.state.loading ? (
      <div
        style={{
          paddingTop: 100,
          marginLeft: "20%",
          paddingTop: "20%",
          marginBottom: "20%",
          width: "60%",
          justifyContent: "center"
        }}
      >
        <center>
          <ProgressBar
            active
            striped
            bsStyle="info"
            now={this.state.progress}
            style={{ justifyContent: "center" }}
          />
        </center>
      </div>
    ) : this.props.receivedproductrecomend == [] ? (
      <div style={{ paddingTop: 100 }}>
        <ProgressBar striped bsStyle="info" now={100} />
      </div>
    ) : (
      <div>
        <Banner />
        <Grid className="wrap-cardCarousel">
          <Row>
            <p className="titleHeader"> REKOMENDASI MOBIL / MOTOR </p>
            <AliceCarousel
              duration={400}
              autoPlay={true}
              infinite={false}
              startIndex={1}
              fadeOutAnimation={true}
              mouseDragEnabled={true}
              responsive={responsive}
              autoPlayInterval={2000}
              autoPlayActionDisabled={true}
              onSlideChange={this.onSlideChange}
              onSlideChanged={this.onSlideChanged}
            >
              {this.props.receivedproductrecomend
                .slice(0, 10)
                .map((data, Index) => (
                  <Col xs={12} md={12}>
                    <CardCarousel
                      key={data.UnitKeyFinder}
                      nameBrand={data.UnitName}
                      image={data.ImageUri}
                      merek={data.AuctionLotUnitSpecs[0].SpecValue}
                      model={data.AuctionLotUnitSpecs[1].SpecValue}
                      tipe={data.AuctionLotUnitSpecs[2].SpecValue}
                      no_pol={data.AuctionLotUnitSpecs[3].SpecValue}
                      color={data.AuctionLotUnitSpecs[11].SpecValue}
                      price={data.AuctionLot.FinalBasePrice}
                    />
                  </Col>
                ))}
            </AliceCarousel>
          </Row>
        </Grid>
        <Grid className="wrap-cardCarouselMobile">
          <Row>
            <AliceCarousel
              duration={400}
              autoPlay={true}
              infinite={false}
              startIndex={1}
              fadeOutAnimation={true}
              mouseDragEnabled={true}
              playButtonEnabled={true}
              responsive={responsive}
              autoPlayInterval={2000}
              autoPlayDirection="rtl"
              autoPlayActionDisabled={true}
              onSlideChange={this.onSlideChange}
              onSlideChanged={this.onSlideChanged}
            >
              {this.props.receivedproductrecomend
                .slice(0, 10)
                .map((data, Index) => (
                  <Col xs={12} md={12}>
                    <CardCarousel
                      key={data.UnitKeyFinder}
                      nameBrand={data.UnitName}
                      image={data.ImageUri}
                      merek={data.AuctionLotUnitSpecs[0].SpecValue}
                      model={data.AuctionLotUnitSpecs[1].SpecValue}
                      tipe={data.AuctionLotUnitSpecs[2].SpecValue}
                      no_pol={data.AuctionLotUnitSpecs[3].SpecValue}
                      color={data.AuctionLotUnitSpecs[11].SpecValue}
                      price={data.AuctionLot.FinalBasePrice}
                    />
                  </Col>
                ))}
            </AliceCarousel>
          </Row>
        </Grid>
        {/*
        <Grid>
          <Row>
          <Col md={2}>
            <Menu
              onClick={({item, key}) => this.setState({merek: key})}
              style={{ width: '100%' }}
              defaultOpenKeys={['sub1']}
              selectedKeys = {[this.state.merek]}
              mode="inline">
              <SubMenu onTitleClick={({key}) => this.setState({merek: ''})} key="all" title={<span><span>All</span></span>}>
                <SubMenu key="sub1" title={<span><span>Mobil</span></span>}>
                  <Menu.Item key="Avanza">Avanza</Menu.Item>
                  <Menu.Item key="Toyota">Xenia</Menu.Item>
                </SubMenu>
            </Menu>
          </Col>
          <Col md={10}>
          {this.state.merek === '' ? (
            DataContentTab.map((d, index) => (
              <Col md={4} key={index}>
              <ContentTab
                name={d.name}
                image={d.image}
                merek={d.merek}
                model={d.model}
                tipe={d.tipe}
                at_mt={d.at_mt}
                warna={d.warna}
                price={d.price}
                button={d.button} />
              </Col>
            ))
          ) : (
            DataContentTab.filter(data => data.merek === this.state.merek).map((d, index) => (
              <Col md={4} key={index}>
              <ContentTab
                name={d.name}
                image={d.image}
                merek={d.merek}
                model={d.model}
                tipe={d.tipe}
                at_mt={d.at_mt}
                warna={d.warna}
                price={d.price}
                button={d.button} />
              </Col>
            ))
          )}
          </Col>
          </Row>
        </Grid>*/}
        <Grid style={{ paddingTop: "3%", paddingBottom: "3%" }}>
          <Row>
            <Col md={5} className="searchPanel">
              <p style={{ fontWeight: "bold" }}> CARI MOBIL / MOTOR </p>
              <Divider />
              <Row>
                <Col md={6}>
                  <p> Jenis Kendaraan</p>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="mobil">Mobil</Option>
                  </Select>
                </Col>
                <Col md={6}>
                  <p> Merek </p>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={value => this.setState({ merk: value })}
                  >
                    {this.props.receivedbrand.map(merk => (
                      <Option value={merk.value} key={merk.id}>
                        {merk.value}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Row>
              <Row style={{ paddingTop: 10 }}>
                <Col md={6}>
                  <p> Model </p>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={value => this.setState({ model: value })}
                  >
                    {this.state.merk == "" ? (
                      <Option value="select" disabled>
                        Please Select Model
                      </Option>
                    ) : (
                      this.props.receivedbrand
                        .filter(merk => merk.value === this.state.merk)
                        .map(merk =>
                          merk.models.map(model => (
                            <Option value={model.value} key={model.id}>
                              {model.value}
                            </Option>
                          ))
                        )
                    )}
                  </Select>
                </Col>
                <Col md={6}>
                  <p> Tipe </p>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={value => this.setState({ tipe: value })}
                  >
                    {this.state.model == "" ? (
                      <Option value="select" disabled>
                        Please Select Tipe
                      </Option>
                    ) : (
                      this.props.receivedbrand
                        .filter(merk => merk.value === this.state.merk)
                        .map(merk =>
                          merk.models
                            .filter(model => model.value === this.state.model)
                            .map(model =>
                              model.tipes.map(tipe => (
                                <Option value={tipe.value} key={tipe.id}>
                                  {tipe.value}
                                </Option>
                              ))
                            )
                        )
                    )}
                  </Select>
                </Col>
              </Row>
              <Row style={{ paddingTop: 10 }}>
                <Col md={6}>
                  <p> Tahun </p>
                  <Input width="100%" />
                </Col>
                <Col md={6}>
                  <p> warna </p>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="merah">MERAH</Option>
                    <Option value="hitam">HITAM</Option>
                    <Option value="biru">BIRU</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormItem>
                    {this.state.tipe === "" ? (
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="buttonSearch"
                        disabled
                      >
                        CARI
                      </Button>
                    ) : (
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="buttonSearch"
                        onClick={() => this.handleSearch()}
                      >
                        CARI
                      </Button>
                    )}
                  </FormItem>
                </Col>
              </Row>
            </Col>
            <Col md={1} />
            <Col md={6}>
              <Row id="hasilPencarian">
                <p style={{ fontWeight: "bold", marginLeft: 10 }}>
                  {" "}
                  Hasil Pencarian{" "}
                </p>
                {this.state.resultSearch == []
                  ? this.props
                      .receivedproductrecomendpaginate(
                        this.state.resultSearch,
                        this.state.pageSize,
                        this.state.current
                      )
                      .slice(0, 10)
                      .map((data, Index) => (
                        <Col md={12} key={data.UnitKeyFinder}>
                          <SearchLelang
                            number={"1"}
                            name={data.UnitName}
                            police={data.AuctionLotUnitSpecs[3].SpecValue}
                            price={data.AuctionLot.FinalBasePrice}
                            year={data.AuctionLotUnitSpecs[4].SpecValue}
                            type={data.AuctionLotUnitSpecs[2].SpecValue}
                            image={data.ImageUri}
                            data={data}
                          />
                        </Col>
                      ))
                  : paginate(
                      this.state.resultSearch,
                      this.state.pageSize,
                      this.state.current
                    ).map((data, index) => (
                      <Col md={12} key={data.UnitKeyFinder}>
                        <SearchLelang
                          number={data.number}
                          name={data.UnitName}
                          police={data.AuctionLotUnitSpecs[3].SpecValue}
                          price={data.AuctionLot.FinalBasePrice}
                          year={data.AuctionLotUnitSpecs[4].SpecValue}
                          type={data.AuctionLotUnitSpecs[2].SpecValue}
                          image={data.ImageUri}
                          data={data}
                        />
                      </Col>
                    ))}
              </Row>
              <Row>
                <Col xs={1} md={3} />
                <Col xs={10} md={7}>
                  <Pagination
                    defaultCurrent={1}
                    pageSize={this.state.pageSize}
                    total={total}
                    current={this.state.current}
                    onChange={this.onChange}
                  />
                </Col>
                <Col xs={1} md={3} />
              </Row>
            </Col>
          </Row>
        </Grid>
        <div className="landing-lelang">
          <Grid>
            <div className="body-header">
              <p>
                <Icon id="date" type="calendar" /> JADWAL LELANG TERDEKAT
              </p>
              <hr />
            </div>
            <Row>
              <Col xs={12} md={12}>
                <Row>
                  <AliceCarousel
                    duration={400}
                    autoPlay={false}
                    startIndex={1}
                    infinite={false}
                    fadeOutAnimation={true}
                    mouseDragEnabled={true}
                    responsive={responsive}
                    autoPlayInterval={2000}
                    autoPlayActionDisabled={true}
                    onSlideChange={this.onSlideChange}
                    onSlideChanged={this.onSlideChanged}
                  >
                    {this.props.schedulecar == [] ? (
                      <div>
                        <Spin size="large" />
                      </div>
                    ) : (
                      this.props.schedulecar.map((data, index) => (
                        <Col xs={12} md={12} key={data.auctionEventId}>
                          <JadwalLelang
                            transport={" MOBIL"}
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
                            admfee={this.props.receivedadmfee.CAR}
                          />
                        </Col>
                      ))
                    )}
                  </AliceCarousel>
                </Row>
              </Col>
            </Row>
            <NavLink to="/jadwal">
              <p className="lihatJadwal"> Lihat Semua Jadwal </p>
            </NavLink>
          </Grid>
        </div>
        <div style={{ paddingBottom: "4%" }}>
          <Map />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schedulecar: state.schedulecar,
  schedulemot: state.schedulemot,
  receivedbrand: state.receivedbrand,
  receivedproductrecomend: state.receivedproductrecomend,
  receivedproductbyevent: state.receivedproductbyevent,
  receivedproductdetail: state.receivedproductdetail,
  receivedsearchproduct: state.receivedsearchproduct,
  receivedimageeveryproduct: state.receivedimageeveryproduct,
  sessionPersistance: state.sessionPersistance,
  resultCekToken: state.resultCekToken,
  receivedadmfee: state.receivedadmfee
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
  fetchProductRecomended: tokenId => dispatch(fetchProductRecomended(tokenId)),
  fetchProductByEvent: (tokenId, eventId) =>
    dispatch(fetchProductByEvent(tokenId, eventId)),
  fetchProductDetail: (tokenId, lotId) =>
    dispatch(fetchProductDetail(tokenId, lotId)),
  fetchMerek: (tokenId, merek) => dispatch(fetchMerek(tokenId, merek)),
  fetchModel: (tokenId, merek, model) =>
    dispatch(fetchModel(tokenId, merek, model)),
  fetchTipe: (tokenId, merek, model, tipe) =>
    dispatch(fetchTipe(tokenId, merek, model, tipe)),
  fetchScheduleCar: tokenId => dispatch(fetchScheduleCar(tokenId)),
  fetchScheduleMot: tokenId => dispatch(fetchScheduleMot(tokenId)),
  fetchBrand: tokenId => dispatch(fetchBrand(tokenId)),
  cekToken: (token, officeCode, roleCode) =>
    dispatch(cekToken(token, officeCode, roleCode)),
  fetchAdmFee: tokenId => dispatch(fetchAdmFee(tokenId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
