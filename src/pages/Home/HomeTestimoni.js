import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import img1 from '../../assets/image/testimoni/img1.jpg';
import img2 from '../../assets/image/testimoni/img2.jpg';
import img3 from '../../assets/image/testimoni/img3.jpg';
import img4 from '../../assets/image/testimoni/img4.jpg';
import img5 from '../../assets/image/testimoni/img5.jpg';
import img6 from '../../assets/image/testimoni/img6.jpg';
import img7 from '../../assets/image/testimoni/img7.jpg';
import img8 from '../../assets/image/testimoni/img8.jpg';

const dataTestimony = [
  {
    img: img1,
    description:
      'Baru pertama mencoba transaksi dengan lelang, rasanya luar biasa. Sebagai generasi milenial kita harus mengikuti perkembangan jaman. Jadi sistem lelang dengan aplikasi ini sangat amat membantu di era globalisasi ini'
  },
  {
    img: img2,
    description:
      'Pertama kali ikut lelang'
  },
  {
    img: img3,
    description:
      'Test'
  },
  {
    img: img4,
    description:
      'Test'
  },
  {
    img: img5,
    description:
      'Test'
  },
  {
    img: img6,
    description:
      'Test'
  },
  {
    img: img7,
    description:
      'Test'
  },
  {
    img: img8,
    description:
      'Test'
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
            duration={500}
            autoPlay={true}
            infinite={true}
            startIndex={0}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            responsive={responsive}
            autoPlayInterval={3000}
            autoPlayActionDisabled={true}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
          >
            {dataTestimony.map((data, i) => (
              <Col md={12} xs={12} key={i} style={{ padding: 5 }}>
                <div style={{ background: '#F1F1F1', padding: 15 }} className="box-shadow">
                  <img src={data.img} className="img m-t-15" style={{ width: '100%' }} />
                  <p className="m-t-15 base-color">
                  {data.description}
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
