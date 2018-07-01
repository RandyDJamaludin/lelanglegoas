import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Redirect } from "react-router-dom"
import { DataCardCarousel } from '../AllData/DataCard' 
import { CardCarousel } from '../Components/Card'
import AliceCarousel from 'react-alice-carousel'
import Map from '../Components/Map'
import { connect } from 'react-redux'
import { fetchBrand } from "../../actions/getBrand"

class Index extends Component {
  
  constructor() {
    super()

    this.state = {
      isAuth: null
    }
  }

  componentDidMount = async() => {
    if(this.props.sessionPersistance.tokenId != null){
      this.setState({isAuth: this.props.sessionPersistance})
    }
    await this.props.fetchBrand(this.props.sessionPersistance.tokenId)
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
          this.props.sessionPersistance.tokenId == null ? (
            <Redirect
                to={{
                  pathname: "/login",
                  state: { from: this.props.location }
                }}
              />
            ) : (
            <div className='page-lokasi' style={{paddingBottom:'3%'}}>
              <Map/>

              <Grid className="wrap-cardCarousel">
                <Row>
                  <p className='titleHeader'> REKOMENDASI MOBIL / MOTOR </p>
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
                    {/* {this.props.receivedbrand.slice(0,5).map((data, Index) => (
                      data.models.filter(model => model.parentId === data.id).slice(0,1).map(model => (
                        model.tipes.filter(tipe => tipe.parentId === model.id).slice(0,1).map(tipe => (
                          <Col xs={12} md={12}>
                          <CardCarousel
                          key={tipe.id}
                          nameBrand={data.value}
                          image={"http://moziru.com/images/lamborghini-clipart-cool-car-19.png"}
                          merek={data.value}
                          model={model.value}
                          tipe={tipe.value}
                          at_mt={"---"}
                          color={"---"}
                          price={"---"}
                          />
                          </Col>
                        ))
                      ))
                    ))} */}
                    {DataCardCarousel.map((data, index) => (
                      <Col xs={12} md={12} key={data.key}>
                        <CardCarousel
                          name={data.name}
                          image={data.image}
                          color={data.color}
                          lastBid={data.lastBid}
                          openhouse={data.openhouse}
                        />
                      </Col>
                    ))}
                  </AliceCarousel>
                </Row>
              </Grid>

              <Grid className='wrap-cardCarouselMobile'>
                <Row>
                  <AliceCarousel
                      duration={400}
                      autoPlay={true}
                      infinite={false}
                      startIndex = {1}
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
                    {DataCardCarousel.map((data, index) => (
                      <Col xs={12} md={12} key={data.key}>  
                        <CardCarousel
                          name={data.name}
                          image={data.image}
                          color={data.color}
                          lastBid={data.lastBid}
                          openhouse={data.openhouse}
                        />
                      </Col>
                    ))}
                  </AliceCarousel>
                </Row>
              </Grid>
            </div>
            )
        )
    }
}
 
const mapStateToProps = state => ({
  receivedbrand: state.receivedbrand,
  sessionPersistance: state.sessionPersistance
});

const mapDispatchToProps = dispatch => ({
  fetchBrand: (tokenId) => dispatch(fetchBrand(tokenId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);