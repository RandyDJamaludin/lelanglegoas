import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { BannerInfo } from '../Components/Banner'

export class Index extends Component {
  render() { 
    return (
      <div className='wrap-tentangKamiPage'>
        <BannerInfo title='Pengertian Lelang'/>
      
        <section id="about">
          <h4 className="title">LEGOAS</h4>
          <div className="content">
            <Grid>
              <Row>
                  <Col md={2}/>
                  <Col md={8}>
                    <p className="text-center">
                      Legoas adalah salah satu perusahaan yang menyelenggarakan penjualan asset dengan sistem lelang.
                      Adapun konsep lelang adalah konsep dimana terjadi transparansi dan juga terbentuknya harga tertinggi sehingga asset dalam bentuk apapun dapat terjual dengan cepat dan harga tertinggi.  
                      berdiri pada bulan desember 2017, legoas adalah penyelenggara lelang pertama yang mengandalkan konsep lelang melalui sistem yang dirancang menjadi terbaik diantara perusahaan lelang di Indonesia.
                      Sistem yang diciptakan ini memungkinkan peserta lelang dapat mengikuti lelang melalui website dan mobile apps dan transaksi sudah diciptakan dengan cashless dan paperless.. 
                      dengan konsep yang sudah tercipta dengan baik, maka setiap barang/unit akan dilakukan sertifikasi oleh pihak-pihak yang berkompetensi dalam barang/unit tersebut. 
                      Sistem lelang, administrasi, flow yang terintegrasi, serta sertifikasi unit lelang ini lah yang menjadi daya tarik beberapa perusahaan besar mempercayakan penjualan assetnya ke Legoas.
                    </p>
                  </Col>
                  <Col md={2}/>
              </Row>
            </Grid> 
          </div>
        </section>
      </div>
    )
  }
}
 
export default Index;