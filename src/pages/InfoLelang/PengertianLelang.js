import React, { Component } from 'react';
import linejpg from '../../assets/image/line.jpg';
import { Row, Col } from 'react-bootstrap';
import Logo1 from '../../assets/image/home/aset-09.png';
import Logo2 from '../../assets/image/home/aset-10.png';
import Logo3 from '../../assets/image/home/aset-11.png';
import Logo4 from '../../assets/image/home/aset-12.png';
import Logo5 from '../../assets/image/home/aset-13.png';

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
    img: Logo2,
    content: () => (
      <p>
      Sejarah lelang di Indonesia dimulai oleh East India Company yang menyelenggarakan lelang untuk
      teh (1750) dah masih bertahan sampai sekarang di London. Ada juga lelang tembakau Indonesia yang
      masih bertahan di Bremen, Jerman. Sehingga dunia lelang sebenarnya tidak terlalu asing di Indonesia.
      Hanya saja keterbatasan pelaksanaan lelang saja yang membuat proses lelang di Indonesia tidak terlalu
      dikenal.
      </p>
    )
  },
  {
    key: '3',
    img: Logo3,
    content: () => (
      <p>
      Saat ini lelang di Indonesia digunakan sebagai alternatif penjualan kendaraan, property, dan komoditi.
      Pada dasarnya semua barang dapat dilakukan lelang. Ketika ada kebutuhan atas penjualan dengan cepat 
      dan harga tertinggi dan atau penjualan dalam skala banyak, maka penjualan melalui lelang adalah cara 
      yang paling tepat.
      </p>
    )
  },
  {
    key: '4',
    img: Logo4,
    content: () => (
      <p>
      Pelaksanaan lelang yang dilakukan biasanya saat ini adalah dengan menghadiri/datang ke tempat lelang,
      melakukan proses administrasi yang rumit, dan mengikuti pelaksanaan lelang di lokasi dengan konsep
      mengacungkan tangan/NPL (nomor peserta lelang) untuk menunjukkan keikutsertaannya.
      </p>
    )
  },
  {
    key: '5',
    img: Logo5,
    content: () => (
      <p>
      Legoas mengadakan lelang dengan berbasis digital membuat pelaksanaan lelang tidak dibatasi jarak dan waktu. 
      Peserta lelang dapat melihat unit, mendaftar, dan mengikuti lelang melalui website dan atau mobile 
      apps milik Legoas. Peserta dapat mengikuti lelang dimanapun dan tanpa mengganggu aktifitas utamanya 
      untuk mendapatkan produk/barang sesuai keinginannya. Dengan system online ini pula lah, peserta 
      tidak perlu diburu oleh waktu untuk hadir ke tempat lelang.
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
