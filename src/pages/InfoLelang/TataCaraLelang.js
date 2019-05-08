import React, { Component } from 'react';
import linejpg from '../../assets/image/line.png';
import { Row, Col } from 'react-bootstrap';
import Logo1 from '../../assets/image/home/aset-14.png';
import Logo2 from '../../assets/image/home/aset-15.png';
import Logo3 from '../../assets/image/home/aset-16.png';
import Logo4 from '../../assets/image/home/aset-17.png';
import Logo5 from '../../assets/image/home/aset-18.png';
import Logo6 from '../../assets/image/home/aset-20.png';
import Logo7 from '../../assets/image/home/aset-18.png';
import Logo8 from '../../assets/image/home/aset-21.png';
import Logo9 from '../../assets/image/home/aset-22.png';
import Logo10 from '../../assets/image/home/aset-23.png';

const arr = [
  {
    key: '1',
    img: Logo1,
    title: 'Media Lelang',
    content: () => (
      <p>
        Seluruh proses pra lelang dan pelaksanaan lelang Legoas sepenuhnya menggunakan 
        mobile apps dan atau website legoas. Sebelum menjadi anggota, 
        peserta harus menyetujui syarat dan ketentuan Legoas.
      </p>
    )
  },
  {
    key: '2',
    img: Logo2,
    title: 'Jadwal Lelang',
    content: () => (
      <p>
        Peserta dapat melihat jadwal lelang yang akan ditampilkan oleh legoas melalui 
        media website, mobile apps, atau surat kabar.
      </p>
    )
  },
  {
    key: '3',
    img: Logo3,
    title: 'Daftar Lot',
    content: () => (
      <p>
        Sebelum dilakukan lelang, maka Legoas akan mengeluarkan daftar barang/produk 
        yang akan dilelang dengan jadwal tertentu. Peserta lelang dapat mencari informasi 
        dan memanfaatkan daftar lot ini untuk mendapatkan seluruh informasi dan 
        kondisi pada unit/produk yang diingini.
      </p>
    )
  },
  {
    key: '4',
    img: Logo4,
    title: 'Melihat Unit',
    content: () => (
      <p>
       Sebelum mengikuti lelang, calon peserta dapat melihat barang/unit yang 
       dilelang sewaktu Open house berjalan pada jam kerja sesuai informasi yang 
       tertera pada setiap jadwal lelang. Akan tetapi biasanya open house dilakukan 
       2 hari sebelum pelaksanaan lelang. Informasi dan penailain kendaraan juga dapat 
       diperoleh peserta lelang dengan mengakses melalui mobile apps dan atau website 
       Legoas. Penilaian dan keterangan yang ada merupakan informasi. Peserta diharapkan 
       dapat melakukan pengecekan kembali atas unit yang diminati.
      </p>
    )
  },
  {
    key: '5',
    img: Logo5,
    title: 'Pendaftaran keanggotaan',
    content: () => (
      <p>
        Jika ada barang/produk yang diminati, maka calon peserta dapat mendaftar terlebih 
        dahulu sebagai peserta lelang dengan melakukan proses pendaftaran di website dan mob apps 
        legoas dan membayar kewajiban atas paket keanggotaan yang diingini.
      </p>
    )
  },
  {
    key: '6',
    img: Logo6,
    title: 'Paket Silver',
    content: () => (
      <p>
       Sangat cocok bagi peserta yang memiliki rencana hanya membeli 1 unit kendaraan dan 
       atau dibawah 5 unit. Selain tidak memberatkan dalam jumlah uang jaminan, kebutuhan 
       ini memang diperuntukkan bagi Anda yang merencanakan memiliki unit untuk digunakan 
       sendiri.
      </p>
    )
  },
  {
    key: '7',
    img: Logo7,
    title: 'Paket Platinum',
    content: () => (
      <p>
      Dipersembahkan bagi pelanggan loyal LEGOAS yang membutuhkan flexibilitas dalam membeli 
      dalam jumlah banyak dan atau rutin dalam pembelian setiap bulannya.
      </p>
    )
  },
  {
    key: '8',
    img: Logo8,
    title: 'Cara mengikuti lelang',
    content: () => (
      <p>
      Ketika sudah menjadi peserta lelang, maka peserta dapat masuk kedalam lelang yang diingini/dituju 
      sesuai jadwal yang sudah diinformasikan. Ketika Lelang dimulai, rasakan sensasi dalam mengikuti lelang.
      </p>
    )
  },
  {
    key: '9',
    img: Logo9,
    title: 'Peserta menang lelang',
    content: () => (
      <p>
      Peserta yang telah memenangkan nomor Lot tertentu memiliki kewajiban untuk membayar sesuai nominal yang telah 
      disubmit dan membayar biaya administrasi sesuai ketentuan dan jangka waktu yang telah ditentukan.
      </p>
    )
  },
  {
    key: '10',
    img: Logo10,
    title: 'Peserta tidak menang lelang',
    content: () => (
      <p>
      Bagi peserta yang tidak memenangkan barang/produk yang diinginkan di lelang bersangkutan. Maka dapat melakukan 
      request untuk pengembalian uang deposit tanpa dikenakan biaya sama sekali atau tetap menggunakan keanggotaan dan 
      paket yang dimiliki untuk mengikuti lelang-lelang yang akan datang.
      </p>
    )
  }
];

class TataCaraLelang extends Component {
  render() {
    return (
      <div className="info-content">
        <div className="body-header text-center">
          <h3 className="base-color w900">TATA CARA LELANG</h3>
          <img src={linejpg} alt="" />
        </div>

        <div className="m-t-30 ct-content container-fluid">
          {arr.map(data => (
            <Row key={data.key} className="m-b-10">
              <Col md="1" className="text-center">
                <img width={75} src={data.img} />
              </Col>
              <Col md="11" className="p-t-15">
                <h4 className="base-color w900">{data.title}</h4>
                {data.content()}
              </Col>
            </Row>
          ))}
        </div>
      </div>
    );
  }
}

export default TataCaraLelang;
