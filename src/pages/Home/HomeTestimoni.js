import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import img1 from '../../assets/image/testimoni/img1.jpg';

const dataTestimony = [
  {
    img: img1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
  },
  {
    img: img1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
  },
  {
    img: img1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
  }
];

class HomeTestimoni extends Component {
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
      <Grid className="testimony-slider">
        <div className="body-header">
          <p className="title-section text-center">TESTIMONI</p>
          <hr className="title-hr" />
        </div>
        <Row>
          <AliceCarousel
            duration={400}
            autoPlay={true}
            infinite={true}
            startIndex={0}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            responsive={responsive}
            autoPlayInterval={2000}
            autoPlayActionDisabled={true}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
          >
            {dataTestimony.map((data, i) => (
              <Col md={12} xs={12} key={i} style={{ padding: 5 }}>
                <div style={{ background: '#F1F1F1', padding: 15 }} className="box-shadow">
                  <img src={img1} className="img m-t-15" style={{ width: '100%' }} />
                  <p className="m-t-15 base-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,{' '}
                  </p>
                </div>
              </Col>
            ))}
          </AliceCarousel>
        </Row>
      </Grid>
    );
  }
}

export default HomeTestimoni;
