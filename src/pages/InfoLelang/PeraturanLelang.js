import React, { Component } from 'react';
import linejpg from '../../assets/image/line.jpg';
import { Collapse } from 'antd';
import Logo1 from '../../assets/image/home/aset-01.png';

const Panel = Collapse.Panel;

const arr = [
  {
    key: '1',
    img: Logo1,
    title: 'Definisi',
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
    title: 'Penggunaan Umum dan Akses atas Platform',
    content: () => (
      <p>
        Lelang adalah proses membeli dan menjual barang atau jasa dengan cara mena- warkan kepada
        penawar, peserta lelang memberikan penawaran harga lebih tinggi, dan kemudian barang terjual
        kepada penawar harga tertinggi.
      </p>
    )
  }
];

function callback(key) {
  console.log(key);
}

class PeraturanLelang extends Component {
  render() {
    return (
      <div className="info-content">
        <div className="body-header text-center">
          <h3 className="base-color w900">PERATURAN LELANG</h3>
          <img src={linejpg} alt="" />
        </div>

        <div className="m-t-30 m-b-30 ct-content container-fluid">
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            {arr.map(data => (
              <Panel
                header={
                  <div className="accordion-flex">
                    <img width={75} src={data.img} />
                    <h4 className="base-color w900">{data.title}</h4>
                  </div>
                }
                key={data.key}
              >
                {data.content()}
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    );
  }
}

export default PeraturanLelang;
