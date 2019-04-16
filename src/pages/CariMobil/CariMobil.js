import React, { Fragment, Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Divider, Input, Select, Form, Pagination, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { SkeletonImg, Skeleton } from 'react-js-skeleton';
import { SearchLelang } from '../Components/Card';
import { connect } from 'react-redux';
import { fetchBrand } from '../../actions/getBrand';
import { fetchProductAll } from '../../actions/getProduct';
import { fetchSearchProduct } from '../../actions/searchProduct';
import { login } from '../../actions/login';
import SkeletonLoader from './component/SkeletonLoader';

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
      merk: '',
      model: '',
      tipe: '',
      warna: '',
      tahun: '',
      session: {},
      loadingSearch: false,
      loadingCard: true,
      resultSearch: 'Not Yet Search',
      pageSize: 4,
      current: 1
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    await this.props.login('TELECREATIVE', '01042018');
    const session = JSON.parse(localStorage.getItem('session'));
    await this.setState({ session });

    await this.props.fetchProductAll(session.tokenId);
    this.setState({ loadingCard: false });
    this.props.fetchBrand(session.tokenId);
  }

  //Function for Handling Search
  async handleSearch() {
    const { session, merk, model, tipe, warna, tahun, loadingSearch } = this.state;
    this.setState({ loadingSearch: true });
    await this.props.fetchSearchProduct(session.tokenId, merk, model, tipe, warna, tahun);
    await this.setState({ resultSearch: this.props.receivedsearchproduct });
    this.setState({ loadingSearch: false });
  }

  //function for change current page Pagination
  onChange = page => {
    this.setState({
      current: page
    });
  };

  render() {
    return (
      <div>
        <Grid className="p-t-100 p-b-100" style={{ paddingTop: '3%', paddingBottom: '3%' }}>
          <Row>
            <Col md={12} className="searchPanel">
              <div className="body-header">
                <p className="title-section text-center">CARI MOBIL</p>
                <hr className="title-hr" />
              </div>
              <Row>
                <Col md={4}>
                  <p> Jenis Kendaraan</p>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    allowClear
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="mobil">Mobil</Option>
                  </Select>
                </Col>
                <Col md={4}>
                  <p> Merek </p>
                  <Select
                    showSearch
                    allowClear
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
                <Col md={4}>
                  <p> Model </p>
                  <Select
                    showSearch
                    allowClear
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={value => this.setState({ model: value })}
                  >
                    {this.state.merk === '' ? (
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
              </Row>
              <Row style={{ paddingTop: 10 }}>
                <Col md={4}>
                  <p> Tipe </p>
                  <Select
                    showSearch
                    allowClear
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={value => this.setState({ tipe: value })}
                  >
                    {this.state.model === '' ? (
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
                <Col md={4}>
                  <p> Tahun </p>
                  <Input width="100%" onChange={e => this.setState({ tahun: e.target.value })} />
                </Col>
                <Col md={4}>
                  <p> warna </p>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    optionFilterProp="children"
                    allowClear
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
                    {this.state.merk === '' &&
                    this.state.tahun === '' &&
                    this.state.warna === '' ? (
                      <Button type="primary" htmlType="submit" className="buttonSearch" disabled>
                        CARI
                      </Button>
                    ) : (
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="buttonSearch"
                        loading={this.state.loadingSearch}
                        onClick={() => this.handleSearch()}
                      >
                        CARI
                      </Button>
                    )}
                  </FormItem>
                </Col>
              </Row>
            </Col>
            <Col md={12}>
              <Row>
                {this.state.resultSearch === 'Not Yet Search' ? (
                  <Col md={12}>
                    <p style={{ fontWeight: 'bold' }}>Produk yang mungkin disukai</p>
                    <Row id="hasilPencarian">
                      {this.state.loadingCard ? (
                        <SkeletonLoader />
                      ) : this.props.receivedproductall == 0 ? (
                        <Col md={12}>
                          <div className="searchLelang" style={{ paddingBottom: 10 }}>
                            <Row
                              style={{
                                border: '1px solid #ccc',
                                padding: 10
                              }}
                            >
                              <Col md={12}>
                                <Row className="contentLelang">
                                  <Col xs={12} md={5}>
                                    <div
                                      style={{
                                        height: 100,
                                        backgroundColor: '#F5F5F5'
                                      }}
                                    />
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
                            <Row
                              style={{
                                border: '1px solid #ccc',
                                padding: 10
                              }}
                            >
                              <Col md={12}>
                                <Row className="contentLelang">
                                  <Col xs={12} md={5}>
                                    <div
                                      style={{
                                        height: 100,
                                        backgroundColor: '#F5F5F5'
                                      }}
                                    />
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
                      ) : (
                        paginate(
                          this.props.receivedproductall,
                          this.state.pageSize,
                          this.state.current
                        )
                          .slice(0, 10)
                          .map((data, Index) => (
                            <Col md={6} key={data.UnitKeyFinder} className="p-l-30 p-r-30">
                              <SearchLelang
                                number={'1'}
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
                ) : this.state.resultSearch != '' ? (
                  <Col md={12}>
                    <Row id="hasilPencarian">
                      <p style={{ fontWeight: 'bold', marginLeft: 10 }}> Hasil Pencarian </p>
                      {paginate(
                        this.state.resultSearch,
                        this.state.pageSize,
                        this.state.current
                      ).map((data, index) => (
                        <Col md={6} key={data.UnitKeyFinder} className="p-l-30 p-r-30">
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
                ) : (
                  <Col md={12}>
                    <Row id="hasilPencarian">
                      <p style={{ fontWeight: 'bold', marginLeft: 10 }}> Hasil Pencarian </p>
                    </Row>
                    <Row>
                      <Col xs={1} md={2} />
                      <Col xs={10} md={8}>
                        <p style={{ fontWeight: 'bold', marginTop: 10 }}>
                          mohon maaf untuk kendaraan masih belum tersedia. Daftarkan diri Anda{' '}
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
                )}
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  receivedbrand: state.receivedbrand,
  receivedproductall: state.receivedproductall,
  receivedsearchproduct: state.receivedsearchproduct
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
  fetchProductAll: tokenId => dispatch(fetchProductAll(tokenId)),
  fetchSearchProduct: (tokenId, merek, model, tipe, warna, tahun) =>
    dispatch(fetchSearchProduct(tokenId, merek, model, tipe, warna, tahun)),
  fetchBrand: tokenId => dispatch(fetchBrand(tokenId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
