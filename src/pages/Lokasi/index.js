import React, { Component } from "react";
// import { Grid, Row, Col } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
// import { DataCardCarousel } from "../AllData/DataCard";
// import { CardCarousel } from "../Components/Card";
// import AliceCarousel from "react-alice-carousel";
// import Map from "../Components/Map";
import { connect } from "react-redux";
import { fetchBrand } from "../../actions/getBrand";

class Index extends Component {
  constructor() {
    super();

    this.state = {
      isAuth: null
    };
  }

  componentDidMount = async () => {
    if (this.props.sessionPersistance.tokenId != null) {
      this.setState({ isAuth: this.props.sessionPersistance });
    }
    await this.props.fetchBrand(this.props.sessionPersistance.tokenId);
  };

  render() {
    // const responsive = {
    //   0: {
    //     items: 1
    //   },
    //   600: {
    //     items: 2
    //   },
    //   1024: {
    //     items: 3
    //   }
    // };
    return (
      <div className="page-lokasi" style={{ paddingBottom: "3%" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2205989328704!2d106.6434728149142!3d-6.234625762790542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbef3f4d0beb%3A0x78078e91a74fd969!2sPT+Artha+Guna+Sejati!5e0!3m2!1sen!2sid!4v1521549590794" title="map" style={{marginLeft:"10%", width:"80%", height:"100%"}} frameborder="0" allowfullscreen></iframe>

        {/* <Grid className="wrap-cardCarousel">
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
        </Grid> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  receivedproductrecomend: state.receivedproductrecomend,
  sessionPersistance: state.sessionPersistance
});

const mapDispatchToProps = dispatch => ({
  fetchBrand: tokenId => dispatch(fetchBrand(tokenId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
