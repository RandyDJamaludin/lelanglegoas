import React, { Component } from 'react';
import linejpg from '../../assets/image/line.jpg';
import { Row, Col } from 'react-bootstrap';
import Logo1 from '../../assets/image/home/aset-01.png';

const arr = [
  {
    key: '1',
    img: Logo1,
    content: () => (
      <p>
        Lelang adalah proses membeli dan menjual barang atau jasa dengan cara mena- warkan kepada
        penawar, peserta lelang memberikan penawaran harga lebih tinggi, dan kemudian barang terjual
        kepada penawar harga tertinggi.
      </p>
    )
  },
  {
    key: '2',
    img: Logo1,
    content: () => (
      <p>
        Lelang adalah proses membeli dan menjual barang atau jasa dengan cara mena- warkan kepada
        penawar, peserta lelang memberikan penawaran harga lebih tinggi, dan kemudian barang terjual
        kepada penawar harga tertinggi.
      </p>
    )
  }
];

class PengertianLelang extends Component {
  render() {
    return (
      <div className="info-content">
        <div className="body-header text-center">
          <h3 className="base-color w900">PENGERTIAN LELANG</h3>
          <h4 className="base-color text-center w900">APA ITU LELANG</h4>
          <img src={linejpg} alt="" />
        </div>

        <div className="m-t-30 ct-content container-fluid">
          {arr.map(data => (
            <Row key={data.key} className="m-b-10">
              <Col md="1" className="text-center">
                <img width={75} src={data.img} />
              </Col>
              <Col md="11" className="p-t-15">
                {data.content()}
              </Col>
            </Row>
          ))}
        </div>
      </div>
    );
  }
}

export default PengertianLelang;
