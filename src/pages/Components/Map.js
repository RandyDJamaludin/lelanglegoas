import React, { Component } from 'react'
import { compose, withProps } from "recompose"
import { Grid, Row, Col } from 'react-bootstrap'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MdLocationOn from 'react-icons/lib/md/location-on'

const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -6.1596475, lng: 106.8830528 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -6.1596475, lng: 106.8830528 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
  )
  
export class Map extends Component {   
  constructor(){
    super()
    this.state = {
      isMarkerShown: false,
    }
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }
  render() { 
      return (
          <div>
              <div className='location-lelang'>
              <Grid>
                <div className='body-header'>
                  <p><MdLocationOn id='date'/> LOKASI LELANG</p>
                  <hr/>
                </div>
                <Row>
                  <Col xs={12} md={12}>
                      <MyMapComponent
                        isMarkerShown={this.state.isMarkerShown}
                        onMarkerClick={this.handleMarkerClick}
                    />
                    <div className='wrap-location'>
                      <p className='sub-location'>PT Digital Saran Legoas </p>
                    </div>
                    <div className='body-location'>
                      <p>Jl. Raya Kaliabang no. 45</p>
                      <p>Bekasi, 13132</p>
                      <p>Indonesia</p>
                      <p>cs@legoas.co.id </p>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </div>

          </div>
      )
  }
}
 
export default Map;