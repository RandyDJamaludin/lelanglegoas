import React, { Component } from 'react';
import linejpg from '../../assets/image/line.png';
import { Row, Col } from 'react-bootstrap';
import Logo1 from '../../assets/image/home/aset-34.png';
import Logo2 from '../../assets/image/home/aset-35.png';
import Logo3 from '../../assets/image/home/aset-36.png';

const arr = [
  {
    key: '1',
    img: Logo1,
    title: 'Download Apps',
    content: () => (
      <p>
        Penjualan barang/unit dapat mendownload mobile apps LEGOAS. Penjual dapat
        melakukan pendaftaran sesuai dengan langkah-langkah yang sudah disiapkan di mobile Apps.
      </p>
    )
  },
  {
    key: '2',
    img: Logo2,
    title: 'Penjual Melakukan Persetujuan',
    content: () => (
      <p>
        Atas term dan condition yang berlaku bagi penjual termasuk fee yang dikenakan,
        ketika tim LEGOAS sudah melakukan approval untuk kondisi unit dan surat-surat resmi.
        Penjual dapat memilih waktu yang ditentukan serta harga dasar unit tersebut.
      </p>
    )
  },
  {
    key: '3',
    img: Logo3,
    title: 'Jika Unit Penjual Terjual',
    content: () => (
      <p>
        Melalui lelang maka penjual akan ditransfer nilai unit/barang sesuai harga terbentuk
        max 5 hari setelah hari lelang dan dikurangi biaya yang dikenakan serta ditransfer ke 
        rekening sesuai data sewaktu
      </p>
    )
  }
];

class BeliMobil extends Component {
  render() {
    return (
      <div className="info-content">
        <div className="body-header text-center">
          <h3 className="base-color w900">BELI MOBIL</h3>
          <img style={{marginTop:'-3%'}} src={linejpg} alt="" />
        </div>

        <div className="m-t-30 ct-content container-fluid">
          {arr.map(data => (
            <Row key={data.key} className="m-b-10">
              <Col md="1" className="text-center">
                <img width={75} src={data.img} />
              </Col>
              <Col md="11" className="p-t-15">
                <h4 className="base-color w900">{data.title}</h4>
                <p style={{font:'Overpass', textAlign:'Justify'}}>
                {data.content()}
                </p>
              </Col>
            </Row>
          ))}
        </div>
      </div>
    );
  }
}

export default BeliMobil;
