import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import {
  Icon,
  Divider,
  Input,
  Select,
  Form,
  Pagination,
  Button
} from "antd";
import { NavLink } from "react-router-dom";
import {SkeletonImg, Skeleton} from 'react-js-skeleton'
import AliceCarousel from "react-alice-carousel";
import MdLocationOn from "react-icons/lib/md/location-on";
// import { dataAdins } from "../AllData/DataCard"; //data For Testing
import {
  CardCarousel,
  JadwalLelang,
  SearchLelang,
} from "../Components/Card";
import { Banner } from "../Components/Partial";
import { connect } from "react-redux";
import { fetchScheduleCar, fetchScheduleMot } from "../../actions/getSchedule";
import { fetchBrand } from "../../actions/getBrand";
import {
  fetchProductRecomended,
  fetchProductGradeB,
  fetchProductAll,
  fetchProductByEvent,
  fetchProductDetail
} from "../../actions/getProduct";
import { fetchAdmFee } from "../../actions/getAdmFee";
import { fetchMerek, fetchModel, fetchTipe, fetchMerekWithColor, fetchModelWithColor, fetchTipeWithColor } from "../../actions/searchProduct";
import { login, cekToken } from "../../actions/login";

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
      warna: "",
      session: {},
      loadingRecomended: true,
      loadingCard: true,
      loadingJadwal: true,
      resultSearch: "Not Yet Search",
      pageSize: 2,
      current: 1
    };
  }

  async componentDidMount() {
    await this.props.login("TELECREATIVE", "01042018");
    const session = JSON.parse(localStorage.getItem("session"));
    await this.setState({ session });
    await this.props.cekToken(session.tokenId, session.RoleCode, session.officeCode);
    
    await this.props.fetchProductRecomended(session.tokenId);
    await this.props.fetchProductGradeB(session.tokenId);
    this.setState({loadingRecomended: false})
    await this.props.fetchAdmFee(session.tokenId);
    await this.props.fetchScheduleCar(session.tokenId);
    // await this.props.fetchScheduleMot(session.tokenId);
    this.setState({loadingJadwal: false})
    await this.props.fetchProductAll(session.tokenId);
    this.setState({loadingCard: false})
    this.props.fetchBrand(session.tokenId);
  }

  //Function for Handling Search
  async handleSearch() {
    const { session, merk, model, tipe, warna } = this.state;
    if (merk !== "" && model !== "" && tipe !== "" && warna !== "") {
      await this.props.fetchTipeWithColor(session.tokenId, merk, model, tipe, warna);
    } else if (merk !== "" && model !== "" && tipe === "" && warna !== "") {
      await this.props.fetchModelWithColor(session.tokenId, merk, model, warna);
    } else if (merk !== "" && model === "" && tipe === "" && warna !== "") {
      await this.props.fetchMerekWithColor(session.tokenId, merk, warna);
    } else if (merk !== "" && model !== "" && tipe !== "" && warna === "") {
      await this.props.fetchTipe(session.tokenId, merk, model, tipe);
    } else if (merk !== "" && model !== "" && tipe === "" && warna === "") {
      await this.props.fetchModel(session.tokenId, merk, model);
    } else if (merk !== "" && model === "" && tipe === "" && warna === "") {
      await this.props.fetchMerek(session.tokenId, merk);
    }
    await this.setState({ resultSearch: this.props.receivedsearchproduct });
  }

  //function for change current page Pagination
  onChange = page => {
    this.setState({
      current: page
    });
  };

  static defaultProps = {
    center: { lat: -6.197027, lng: 106.9793295 },
    zoom: 11
  };
  render() {
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

    return (
      <div>
        <Banner />
        <Grid className="wrap-cardCarousel">
          <Row>
            <p className="titleHeader"> REKOMENDASI</p>
            {this.state.loadingRecomended ? (
              <Row>
                <Col md={4} >
                <div className="background-cardCarousel">
                  <center>
                    <SkeletonImg heightSkeleton={175} />
                    <br />
                    <br />
                    <h3><Skeleton width={200} /></h3>
                    <p><Skeleton width={250} /></p>
                    <p className="color"> <Skeleton width={100} /> </p>
                    <p><Skeleton width={200} /></p>
                  </center>
                </div>
                </Col>
                <Col md={4} >
                <div className="background-cardCarousel">
                  <center>
                    <SkeletonImg heightSkeleton={175} />
                    <br />
                    <br />
                    <h3><Skeleton width={200} /></h3>
                    <p><Skeleton width={250} /></p>
                    <p className="color"> <Skeleton width={100} /> </p>
                    <p><Skeleton width={200} /></p>
                  </center>
                </div>
                </Col>
                <Col md={4} >
                <div className="background-cardCarousel">
                  <center>
                    <SkeletonImg heightSkeleton={175} />
                    <br />
                    <br />
                    <h3><Skeleton width={200} /></h3>
                    <p><Skeleton width={250} /></p>
                    <p className="color"> <Skeleton width={100} /> </p>
                    <p><Skeleton width={200} /></p>
                  </center>
                </div>
                </Col>
              </Row>
            ) : this.props.receivedproductrecomend == 0 ? (
              <Row>
                <Col md={12} >
                <div className="background-cardCarousel">
                  <center>
                    <br />
                    <br />
                    <h2>Tidak Ada Barang Untuk Ditampilkan</h2>
                    <br />
                  </center>
                </div>
                </Col>
              </Row>
            ) : (
              <AliceCarousel
              duration={400}
              autoPlay={true}
              infinite={false}
              startIndex={0}
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
                  <Col key={Index} xs={12} md={this.props.receivedproductrecomend.length === 1 ? 4 : this.props.receivedproductrecomend.length === 2 ? 8 : 12} lg={this.props.receivedproductrecomend.length === 1 ? 4 : this.props.receivedproductrecomend.length === 2 ? 10 : 12} lgOffset={this.props.receivedproductrecomend.length === 2 ? 1 : 0} >
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
                      number={data.number}
                      name={data.UnitName}
                      year={data.AuctionLotUnitSpecs[4].SpecValue}
                      km={data.AuctionLotUnitSpecs[12].SpecValue}
                      grade={data.UnitGrade}
                      lotNumber={data.AuctionLot.AuctionLotNumber}
                      lotId={data.AuctionLot.AuctionLotId}
                      data={data}
                    />
                  </Col>
                ))}
            </AliceCarousel>
            )}
          </Row>
        </Grid>
        <Grid className="wrap-cardCarouselMobile">
        <Row>
            <p className="titleHeader"> REKOMENDASI</p>
            {this.state.loadingRecomended ? (
              <Row>
                  <Col md={4} >
                  <div className="background-cardCarousel">
                    <center>
                      <SkeletonImg heightSkeleton={175} />
                      <br />
                      <br />
                      <h3><Skeleton width={200} /></h3>
                      <p><Skeleton width={250} /></p>
                      <p className="color"> <Skeleton width={100} /> </p>
                      <p><Skeleton width={200} /></p>
                    </center>
                  </div>
                  </Col>
              </Row>
            ) : this.props.receivedproductrecomend == 0 ? (
              <Row>
                  <Col md={4} >
                  <div className="background-cardCarousel">
                  <center>
                    <br />
                    <br />
                    <h2>Tidak Ada Barang Untuk Ditampilkan</h2>
                    <br />
                  </center>
                  </div>
                  </Col>
              </Row>
            ) : (
              <AliceCarousel
                duration={400}
                autoPlay={true}
                infinite={false}
                startIndex={0}
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
                    <Col key={Index} xs={12} md={this.props.receivedproductrecomend.length === 1 ? 4 : this.props.receivedproductrecomend.length === 2 ? 8 : 12} lg={this.props.receivedproductrecomend.length === 1 ? 4 : this.props.receivedproductrecomend.length === 2 ? 10 : 12} lgOffset={this.props.receivedproductrecomend.length === 2 ? 1 : 0} >
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
                        number={data.number}
                        name={data.UnitName}
                        year={data.AuctionLotUnitSpecs[4].SpecValue}
                        km={data.AuctionLotUnitSpecs[12].SpecValue}
                        grade={data.UnitGrade}
                        lotNumber={data.AuctionLot.AuctionLotNumber}
                        lotId={data.AuctionLot.AuctionLotId}
                        data={data}
                      />
                    </Col>
                  ))}
              </AliceCarousel>
            )}
          </Row>
        </Grid>
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
                    {this.state.merk === "" ? (
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
                    {this.state.model === "" ? (
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
                    onChange={value => this.setState({ warna: value })}
                  >
                    <Option value="merah">MERAH</Option>
                    <Option value="putih">PUTIH</Option>
                    <Option value="abu-abu">ABU - ABU</Option>
                    <Option value="hitam">HITAM</Option>
                    <Option value="silver metalik">SILVER METALIK</Option>
                    <Option value="highlight silver">HIGHLIGHT SILVER</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormItem>
                    {this.state.merk === "" ? (
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
            {this.state.resultSearch === "Not Yet Search" ? 
              <Col md={6}>
                <Row id="hasilPencarian">
                  <p style={{ fontWeight: "bold", marginLeft: 10 }}>
                    {" "}
                    Produk yang mungkin disukai{" "}
                  </p>
                  {this.state.loadingCard ? (
                  <Row>
                    <Col md={12}>
                      <div className="searchLelang" style={{ paddingBottom: 10 }}>
                        <Row style={{ border: "1px solid #ccc", padding: 10 }}>
                          <Col md={12}>
                            <Row className="contentLelang">
                              <Col xs={12} md={5}>
                                {/* <Image src={this.props.image} width="100%" /> */}
                                <SkeletonImg heightSkeleton={100} />
                              </Col>
                              <Col xs={12} md={7}>
                                <div className="headerLelang">
                                  <p> <Skeleton width={200}  /> </p>
                                </div>
                                <Row className="box">
                                  <Col md={12}>
                                    <p className="title"> <Skeleton width={100} /> </p>
                                  </Col>
                                  <Col md={12}>
                                    <p className="title"> <Skeleton width={150} /> </p>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                      <div className="searchLelang" style={{ paddingBottom: 10 }}>
                        <Row style={{ border: "1px solid #ccc", padding: 10 }}>
                          <Col md={12}>
                            <Row className="contentLelang">
                              <Col xs={12} md={5}>
                                {/* <Image src={this.props.image} width="100%" /> */}
                                <SkeletonImg heightSkeleton={100} />
                              </Col>
                              <Col xs={12} md={7}>
                                <div className="headerLelang">
                                  <p> <Skeleton width={200}  /> </p>
                                </div>
                                <Row className="box">
                                  <Col md={12}>
                                    <p className="title"> <Skeleton width={100} /> </p>
                                  </Col>
                                  <Col md={12}>
                                    <p className="title"> <Skeleton width={150} /> </p>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                  ) : this.props.receivedproductall == 0 ? (
                    <Row>
                    <Col md={12}>
                      <div className="searchLelang" style={{ paddingBottom: 10 }}>
                        <Row style={{ border: "1px solid #ccc", padding: 10 }}>
                          <Col md={12}>
                            <Row className="contentLelang">
                              <Col xs={12} md={5}>
                              <div style={{height: 100, backgroundColor: '#F5F5F5'}} ></div>
                              </Col>
                              <Col xs={12} md={7}>
                                <Row className="box">
                                  <br />
                                  <Col md={12}>
                                    <h2>Tidak Ada Barang Untuk Ditampilkan</h2>
                                  </Col>
                                  <br />
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                      <div className="searchLelang" style={{ paddingBottom: 10 }}>
                        <Row style={{ border: "1px solid #ccc", padding: 10 }}>
                          <Col md={12}>
                            <Row className="contentLelang">
                              <Col xs={12} md={5}>
                              <div style={{height: 100, backgroundColor: '#F5F5F5'}} ></div>
                              </Col>
                              <Col xs={12} md={7}>
                                <Row className="box">
                                  <br />
                                  <Col md={12}>
                                    <h2>Tidak Ada Barang Untuk Ditampilkan</h2>
                                  </Col>
                                  <br />
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                  ) : (
                    paginate(
                      this.props.receivedproductall,
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
                          merek={data.AuctionLotUnitSpecs[0].SpecValue}
                          model={data.AuctionLotUnitSpecs[1].SpecValue}
                          tipe={data.AuctionLotUnitSpecs[2].SpecValue}
                          warna={data.AuctionLotUnitSpecs[11].SpecValue}
                          km={data.AuctionLotUnitSpecs[12].SpecValue}
                          grade={data.UnitGrade}
                          lotNumber={data.AuctionLot.AuctionLotNumber}
                          lotId={data.AuctionLot.AuctionLotId}
                        />
                      </Col>
                    ))
                  )}
                </Row>
                <Row>
                  <Col xs={1} md={1} />
                  <Col xs={10} md={10}>
                  {this.state.loadingCard ? (
                    <SkeletonImg heightSkeleton={35} />
                  ) : (
                    <Pagination
                      defaultCurrent={1}
                      pageSize={this.state.pageSize}
                      total={this.props.receivedproductall.length}
                      current={this.state.current}
                      onChange={this.onChange}
                    />
                  )}
                  </Col>
                  <Col xs={1} md={1} />
                </Row>
              </Col>
             : this.state.resultSearch != '' ?
              <Col md={6}>
                <Row id="hasilPencarian">
                  <p style={{ fontWeight: "bold", marginLeft: 10 }}>
                    {" "}
                    Hasil Pencarian{" "}
                  </p>
                  {paginate(
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
                        lotId={data.AuctionLot.AuctionLotId}
                        data={data}
                        merek={data.AuctionLotUnitSpecs[0].SpecValue}
                        model={data.AuctionLotUnitSpecs[1].SpecValue}
                        tipe={data.AuctionLotUnitSpecs[2].SpecValue}
                        warna={data.AuctionLotUnitSpecs[11].SpecValue}
                        km={data.AuctionLotUnitSpecs[12].SpecValue}
                        grade={data.UnitGrade}
                        lotNumber={data.AuctionLot.AuctionLotNumber}
                      />
                    </Col>
                  ))}
                </Row>
                <Row>
                  <Col xs={1} md={1} />
                  <Col xs={10} md={10}>
                    <Pagination
                      defaultCurrent={1}
                      pageSize={this.state.pageSize}
                      total={this.props.receivedsearchproduct.length}
                      current={this.state.current}
                      onChange={this.onChange}
                    />
                  </Col>
                  <Col xs={1} md={1} />
                </Row>
              </Col>
              :
              <Col md={6}>
                <Row id="hasilPencarian">
                  <p style={{ fontWeight: "bold", marginLeft: 10 }}>
                    {" "}
                    Hasil Pencarian{" "}
                  </p>
                </Row>
                <Row>
                  <Col xs={1} md={2} />
                  <Col xs={10} md={8}>
                <p style={{ fontWeight: "bold", marginTop: 10 }}>
                mohon maaf untuk kendaraan masih belum tersedia. Daftarkan diri Anda{" "}
                <NavLink
                  to="https://lelang.legoas.co.id/Auction/Bidder/Register"
                  target="_blank"
                >
                  disini
                </NavLink>
                </p>
                  </Col>
                  <Col xs={1} md={2} />
                </Row>
              </Col>
            }
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
                {this.state.loadingJadwal ? (
                  <Row>
                    <Col md={4} >
                    <div style={{ padding: 20, margin: 10, background: "#f8f8f8" }}>
                      <p style={{ fontWeight: "bold" }}><Skeleton width={200} /></p>
                      <p style={{ fontWeight: "bold" }}><Skeleton width={100} /></p>
                      <p><Skeleton width={225} /></p>
                      <p><Skeleton width={220} /></p>
                      <p><Skeleton width={150} /></p>
                      <p><Skeleton width={190} /></p>
                    </div>
                    </Col>
                    <Col md={4} >
                    <div style={{ padding: 20, margin: 10, background: "#f8f8f8" }}>
                      <p style={{ fontWeight: "bold" }}><Skeleton width={200} /></p>
                      <p style={{ fontWeight: "bold" }}><Skeleton width={100} /></p>
                      <p><Skeleton width={225} /></p>
                      <p><Skeleton width={210} /></p>
                      <p><Skeleton width={150} /></p>
                      <p><Skeleton width={180} /></p>
                    </div>
                    </Col>
                    <Col md={4} >
                    <div style={{ padding: 20, margin: 10, background: "#f8f8f8" }}>
                      <p style={{ fontWeight: "bold" }}><Skeleton width={200} /></p>
                      <p style={{ fontWeight: "bold" }}><Skeleton width={100} /></p>
                      <p><Skeleton width={225} /></p>
                      <p><Skeleton width={220} /></p>
                      <p><Skeleton width={150} /></p>
                      <p><Skeleton width={190} /></p>
                    </div>
                    </Col>
                  </Row>
                ) : this.props.schedulecar == 0 ? (
                  <Row>
                    <Col md={12} >
                    <div style={{ padding: 20, margin: 10, background: "#f8f8f8" }}>
                      <center>
                        <br />
                        <br />
                        <h2>Jadwal Lelang</h2>
                        <br />
                        <h3>Tidak Tersedia</h3>
                        <br />
                        <br />
                        <br />
                      </center>
                    </div>
                    </Col>
                  </Row>
                ) : (
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
                    {this.props.schedulecar.map((data, index) => (
                      <Col xs={12} md={this.props.schedulecar.length === 1 ? 4 : this.props.schedulecar.length === 2 ? 8 : 12} lg={this.props.schedulecar.length === 1 ? 4 : this.props.schedulecar.length === 2 ? 10 : 12} lgOffset={this.props.schedulecar.length === 2 ? 1 : 0} key={data.auctionEventId}>
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
                  </AliceCarousel>
                )}
                </Row>
              </Col>
            </Row>
            <NavLink to="/jadwal">
              <p className="lihatJadwal"> Lihat Semua Jadwal </p>
            </NavLink>
          </Grid>
        </div>
        <div>
          <div className="location-lelang">
            <Grid>
              <div className="body-header">
                <p>
                  <MdLocationOn id="date" /> LOKASI LELANG
                </p>
                <hr />
              </div>
              <Row>
                <Col xs={12} md={12}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6263097029314!2d106.9802200539126!3d-6.196873185633912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b937f68c20d%3A0xda5b15b4bf92449c!2skantor+pt.Digital+sarana+legoas!5e0!3m2!1sen!2sid!4v1531283557410" title="map" style={{marginLeft:"10%", width:"80%", height:600}} frameBorder="0" allowFullScreen></iframe>
                  <div className="wrap-location">
                    <p className="sub-location">PT Digital Sarana Legoas</p>
                  </div>
                  <div className="body-location">
                    <p>Jl. Raya Kaliabang no. 45</p>
                    <p>Medan Satria, Bekasi 17132</p>
                    <p>Indonesia</p>
                    <p>cs@legoas.co.id </p>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
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
  receivedproductall: state.receivedproductall,
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
  fetchProductGradeB: tokenId => dispatch(fetchProductGradeB(tokenId)),
  fetchProductAll: tokenId => dispatch(fetchProductAll(tokenId)),
  fetchProductByEvent: (tokenId, eventId) =>
    dispatch(fetchProductByEvent(tokenId, eventId)),
  fetchProductDetail: (tokenId, lotId) =>
    dispatch(fetchProductDetail(tokenId, lotId)),
  fetchMerekWithColor: (tokenId, merek, warna) => dispatch(fetchMerekWithColor(tokenId, merek, warna)),
  fetchModelWithColor: (tokenId, merek, model, warna) =>
    dispatch(fetchModelWithColor(tokenId, merek, model, warna)),
  fetchTipeWithColor: (tokenId, merek, model, tipe, warna) =>
    dispatch(fetchTipeWithColor(tokenId, merek, model, tipe, warna)),
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
  fetchAdmFee: tokenId => dispatch(fetchAdmFee(tokenId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
