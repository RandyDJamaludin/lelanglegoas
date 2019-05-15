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
import img9 from '../../assets/image/testimoni/img9.jpeg';
import img10 from '../../assets/image/testimoni/img10.jpg';

const dataTestimony = [
  {
    img: img1,
    description:
      <p>"Baru pertama mencoba transaksi dengan lelang, rasanya 
        luar biasa. Sebagai generasi milenial kita harus mengikuti
        perkembangan jaman. Jadi sistem lelang dengan aplikasi 
        ini sangat amat membantu di era globalisasi ini"
        -
        Terima kasih pada Bapak Saji Purwanto yang telah memenangkan Honda BRV
      #LelangBebasRibet LEGOAS.
      </p>
    },
  {
    img: img2,
    description:
      <p>
        "Pertama kali ikut lelang tapi sudah terkesan dengan pelayanannya
        yang sangat ramah dan karyawannya sigap membantu jika ada kesulitan. Kalo ditanya
        mau ikut lelang lagi apa nggak? Pastinya dong. Saya akan melakukan 
        transaksi kembali melalui aplikasi Legoas jika ada keperluan
        untuk membeli atau menjual unit nanti."
        -
        Terima kasih Bapak Muhammad Azis dari Cilincing yang telah memenangkan Nissan March
        dari #LelangBebasRibet di LEGOAS. Apakah kamu sedang mencari mobil impian dengan harga
        kompetitif dengan kualitas OK? Yuk cek legoas.co.id untuk ikut lelangnya.  
      
      </p>
  },
  {
    img: img3,
    description:
      <p>
        "Saya udah rencana beli mobil ini sudah lama, tapi sayang waktu itu
        belum kebeli karena mahal. Kemarin kebetulan ikut #LelangBebasRibet di
        LEGOAS atas saran teman saya. Tinggal lewat aplikasi, pantau lelangnya 
        dirumah, syukurlah saya menang dapat Agya, sesuai budget lagi harganya.
        LEGOAS terpercaya dan mantaplah!"
        -
        Selamat kepada Bapak Randi Nurmarrandi berhasil membawa pulang mobil idamannya Agya.
      </p>
  },
  {
    img: img4,
    description:
      <p>
        "Udah lama saya mencari mobil yang pas untuk anak saya yang sesuai
        dengan budget yang saya siapkan. Syukurlah saya menemukan balai 
        lelang seperti Legoas yang lelangnya mudah bisa melalui 
        handphone, memiliki banyak pilihan mobil dan lelangnya setiap 
        hari jadi saya ga perlu menunggu lama untuk bertemu dengan 
        mobil idaman. Terima kasih banyak Legoas, saya jadi bisa 
        memberikan hadiah mobil Honda City spesial untuk Adit anak saya. 
        Pokoknya Legoas recommended banget!".
        -
        Selamat kepada Bapak Agus yang berhasil memenangkan Honda City di #LelangBebasRibet Legoas.
      </p>
  },
  {
    img: img5,
    description:
      <p>
        “Cari mobil mudah itu nyata, lho. Buktinya saya nggak perlu repot ke showroom untuk dapat mobil idaman. Cukup ikut #LelangBebasRibet di aplikasi LEGOAS, sambil duduk santai di rumah, eh nggak taunya menang. Terima kasih LEGOAS!”
-
Selamat kepada Bapak Deni Ardie berhasil membawa pulang mobil idaman Proton Saga Brand New 2013.
      </p>
  },
  {
    img: img6,
    description:
      <p>
        “Baru kali ini saya merasa sangat puas ikutan lelang mobil lewat aplikasi Legoas. Caranya mudah dan pelayanannya dari karyawan Legoas ramah dan sangat membantu. Meskipun sudah berhasil menemukan mobil impian, saya masih terus pantau lelangnya, lho. Kalau ada mobil dengan harga yang pas, saya pasti akan ikut lelangnya lagi. Terima kasih Legoas.”
-
Selamat kepada Bapak Hendri yang berhasil memenangkan unit Toyota Avanza 1,3 GMT tahun 2013 di #LelangBebasRibet Legoas.
      </p>
  },
  {
    img: img7,
    description:
      <p>
        “Awalnya saya ragu mau ikut lelang lewat aplikasi, tapi setelah dengar temen ada yang menang bidding mobil dengan harga terjangkau, saya jadi tertarik. Akhirnya, saya ikutan #LelangBebasRibet di LEGOAS. Iseng daftar, top up keanggotaan, lalu ikut bidding. Nggak disangka saya menang Toyota Veloz. Super efisien! Highly recommended lah LEGOAS.”
-
Selamat kepada Bapak Rulianto Tarigan yang berhasil memenangkan Toyota Veloz.
      </p>
  },
  {
    img: img8,
    description:
      <p>
        Baru kali ini saya menemukan balai lelang mobil yang sangat memudahkan para peserta lelang terutama yang dari luar kota seperti saya yang berdomisili di kota Bandung. Prosesnya ga ribet lagi, daftar, beli membership, pilih dan lihat kondisi mobil hingga ikutan lelang semuanya lewat layer HP. Mudah, ga ribet dan bisa ikutan lelang dimana saja. Terima kasih LEGOAS, saya jadi bisa bertemu mobil idaman saya, Toyota Yaris. Ayo, ikutan lelang di LEGOAS! Highly recommended.”

Selamat kepada Bapak Chandra Juliansyah dari Bandung yang berhasl memenangkan Toyota Yaris.
      </p>
  },
  {
    img: img9,
    description:
      <p>
        "Transaksi bisa sangat mudah karena dapat dilakukan dirumah. LEGOAS juga sangat enak karena bisa melakukan pengecekan unit tiap
        hari. Jadwal lelangnya pun sama setiap harinya. Saya pasti akan melakukan transaksi kembali dengan LEGOAS".
        Selamat kepada Bapak Fitra Aprilia Susanto yang berhasil memenangkan Daihatsu Xenia.
      </p>
  },
  {
    img: img10,
    description:
      <p>
        "Transaksi kedua saya di LEGOAS. LEGOAS juga sangat enak karena bisa melakukan pengecekan unit tiap hari. Jadwal lelang pun
        sama setiap harinnya. Saya pasti akan melakukan transaksi kembali dengan LEGOAS".
        Selamat kepada Bapak Fitra Aprilia Susanto yang berhasil memenangkan Daihatsu Xenia.
      </p>
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
            autoPlayInterval={2800}
            autoPlayActionDisabled={true}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
          >
            {dataTestimony.map((data, i) => (
              <Col md={12} xs={12} key={i} style={{ padding: 5 }}>
                <div style={{ background: '#005991', padding: 15 }} className="box-shadow">
                  <img src={data.img} className="img m-t-15" style={{ width: '100%' }} />
                  <p className="m-t-15 base-color" style={{ font: 'Overpass', textAlign: 'Justify', color:'white'}}>
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
