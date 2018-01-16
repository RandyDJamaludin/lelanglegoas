import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

export class Index extends Component {
  render() { 
    return (
      <div className='wrap-tentangKamiPage'>
        <Grid>
          <Row>
            <Col xs={12} md={6} className='image-business'>
            </Col>
            <Col xs={12} md={6}>
              <div className='right-panel'>
                <p className='header'> Legoas </p>
                <p className='description'> Legoas adalah salah satu perusahaan yang menyelenggarakan penjualan asset dengan sistem lelang. <br/> <br/>
                Adapun konsep lelang adalah konsep dimana terjadi transparansi dan juga terbentuknya harga tertinggi sehingga asset dalam bentuk apapun dapat terjual dengan cepat dan harga tertinggi.   <br/> <br/>
                berdiri pada bulan desember 2017, legoas adalah penyelenggara lelang pertama yang mengandalkan konsep lelang melalui sistem yang dirancang menjadi terbaik diantara perusahaan lelang di Indonesia. <br/> <br/>
                Sistem yang diciptakan ini memungkinkan peserta lelang dapat mengikuti lelang melalui website dan mobile apps dan transaksi sudah diciptakan dengan cashless dan paperless..  <br/> <br/>
                dengan konsep yang sudah tercipta dengan baik, maka setiap barang/unit akan dilakukan sertifikasi oleh pihak-pihak yang berkompetensi dalam barang/unit tersebut.  <br/> <br/>
                Sistem lelang, administrasi, flow yang terintegrasi, serta sertifikasi unit lelang ini lah yang menjadi daya tarik beberapa perusahaan besar mempercayakan penjualan assetnya ke Legoas. </p>
              </div>
            </Col>
          </Row>
          <Row className='section-bottom'>
            
            <Col xs={4} md={4}>
              <div className='wrap-team'>
                <Image src='https://image.flaticon.com/icons/svg/138/138202.svg' width='100px'/>
                <p className='name'> Cara Lelang </p> 
                <p className='job'> Melihat unit/barang yang dilelang. sebelum mengikuti lelang, calon peserta dapat melihat barang/unit yang dilelang sewaktu Open house berjalan pada jam kerja.</p> 
              </div>
            </Col>
            <Col xs={4} md={4}>
              <div className='wrap-team'>
                <Image src='https://image.flaticon.com/icons/svg/138/138202.svg' width='100px'/>
                <p className='name'> Cara Lelang </p> 
                <p className='job'> Melihat unit/barang yang dilelang. sebelum mengikuti lelang, calon peserta dapat melihat barang/unit yang dilelang sewaktu Open house berjalan pada jam kerja.</p> 
              </div>
            </Col>
            <Col md={2}/>
            <Col xs={4} md={4}>
              <div className='wrap-team'>
                <Image src='https://image.flaticon.com/icons/svg/138/138202.svg' width='100px'/>
                <p className='name'> Cara Lelang </p> 
                <p className='job'> Melihat unit/barang yang dilelang. sebelum mengikuti lelang, calon peserta dapat melihat barang/unit yang dilelang sewaktu Open house berjalan pada jam kerja.</p> 
              </div>
            </Col>

          </Row>
        </Grid>
      </div>
    )
  }
}
 
export default Index;