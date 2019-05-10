import React, { Fragment, Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { SkeletonImg, Skeleton } from "react-js-skeleton";
import AliceCarousel from "react-alice-carousel";
// import { dataAdins } from "../AllData/DataCard"; //data For Testing
import { CardCarousel } from "../Components/Card";
import { connect } from "react-redux";
import { fetchProductRecomended } from "../../actions/getProduct";
import { login } from "../../actions/login";

class Index extends Component {
  constructor() {
    super();

    this.state = {
      session: {},
      loadingRecomended: true,
      loadingCard: true,
      loadingJadwal: true,
      resultSearch: "Not Yet Search",
      pageSize: 2,
      current: 1,
      video: true
    };
  }

  async componentDidMount() {
    await this.props.login("TELECREATIVE", "01042018");
    const session = JSON.parse(localStorage.getItem("session"));
    await this.setState({ session });

    await this.props.fetchProductRecomended(session.tokenId);
    this.setState({ loadingRecomended: false });
  }

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
      <Fragment>
        <Grid className="wrap-cardCarousel" style={{ paddingBottom: "2%" }}>
          <div className="body-header">
            <p className="title-section text-center">REKOMENDASI</p>
            <hr className="title-hr" />
          </div>
          <Row>
            {this.state.loadingRecomended ? (
              <Row>
                <Col md={4}>
                  <div className="background-cardCarousel">
                    <center>
                      <SkeletonImg heightSkeleton={175} />
                      <br />
                      <br />
                      <h3>
                        <Skeleton width={200} />
                      </h3>
                      <p>
                        <Skeleton width={250} />
                      </p>
                      <p className="color">
                        {" "}
                        <Skeleton width={100} />{" "}
                      </p>
                      <p>
                        <Skeleton width={200} />
                      </p>
                    </center>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="background-cardCarousel">
                    <center>
                      <SkeletonImg heightSkeleton={175} />
                      <br />
                      <br />
                      <h3>
                        <Skeleton width={200} />
                      </h3>
                      <p>
                        <Skeleton width={250} />
                      </p>
                      <p className="color">
                        {" "}
                        <Skeleton width={100} />{" "}
                      </p>
                      <p>
                        <Skeleton width={200} />
                      </p>
                    </center>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="background-cardCarousel">
                    <center>
                      <SkeletonImg heightSkeleton={175} />
                      <br />
                      <br />
                      <h3>
                        <Skeleton width={200} />
                      </h3>
                      <p>
                        <Skeleton width={250} />
                      </p>
                      <p className="color">
                        {" "}
                        <Skeleton width={100} />{" "}
                      </p>
                      <p>
                        <Skeleton width={200} />
                      </p>
                    </center>
                  </div>
                </Col>
              </Row>
            ) : this.props.receivedproductrecomend == 0 ? (
              <Row>
                <Col md={12}>
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
                    <Col
                      key={Index}
                      xs={12}
                      md={
                        this.props.receivedproductrecomend.length === 1
                          ? 4
                          : this.props.receivedproductrecomend.length === 2
                          ? 8
                          : 12
                      }
                      lg={
                        this.props.receivedproductrecomend.length === 1
                          ? 4
                          : this.props.receivedproductrecomend.length === 2
                          ? 10
                          : 12
                      }
                      lgOffset={
                        this.props.receivedproductrecomend.length === 2 ? 1 : 0
                      }
                    >
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
          <div className="body-header">
            <p className="title-section text-center">REKOMENDASI</p>
            <hr className="title-hr" />
          </div>
          <Row>
            {this.state.loadingRecomended ? (
              <Row>
                <Col md={4}>
                  <div className="background-cardCarousel">
                    <center>
                      <SkeletonImg heightSkeleton={175} />
                      <br />
                      <br />
                      <h3>
                        <Skeleton width={200} />
                      </h3>
                      <p>
                        <Skeleton width={250} />
                      </p>
                      <p className="color">
                        {" "}
                        <Skeleton width={100} />{" "}
                      </p>
                      <p>
                        <Skeleton width={200} />
                      </p>
                    </center>
                  </div>
                </Col>
              </Row>
            ) : this.props.receivedproductrecomend == 0 ? (
              <Row>
                <Col md={4}>
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
                    <Col
                      key={Index}
                      xs={12}
                      md={
                        this.props.receivedproductrecomend.length === 1
                          ? 4
                          : this.props.receivedproductrecomend.length === 2
                          ? 8
                          : 12
                      }
                      lg={
                        this.props.receivedproductrecomend.length === 1
                          ? 4
                          : this.props.receivedproductrecomend.length === 2
                          ? 10
                          : 12
                      }
                      lgOffset={
                        this.props.receivedproductrecomend.length === 2 ? 1 : 0
                      }
                    >
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
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  receivedproductrecomend: state.receivedproductrecomend
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
  fetchProductRecomended: tokenId => dispatch(fetchProductRecomended(tokenId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
