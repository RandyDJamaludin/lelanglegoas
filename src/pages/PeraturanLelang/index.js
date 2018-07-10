import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Collapse } from "antd";
import { BannerInfo } from "../Components/Partial";
import LogoImage from "../../assets/image/infolelang/aturan.png";
const Panel = Collapse.Panel;

export class Index extends Component {
  render() {
    return (
      <div className="wrap-peraturanLelangPage">
        <BannerInfo logo={LogoImage} title="PERATURAN LELANG" />
        <Grid style={{ paddingTop: "5%" }}>
          <Row>
            <Col md={12}>
              <Collapse defaultActiveKey={["1"]} accordion>
                <Panel header="1. Definisi" key="1">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      1.1) Mobile aplikasi LEGOAS adalah aplikasi milik PT. Digital Sarana Legoas (“LEGOAS”) yang dapat didownload melalui situs web resmi LEGOAS maupun media distribusi aplikasi/software resmi yang ditunjuk dan digunakan LEGOAS yang dimiliki oleh mobile operating system yang terdapat di handphone pelanggan untuk melakukan proses pendaftaran, pembelian token, hingga pelaksanaan lelang.
                    </p>
                    <p>
                      {" "}
                      1.2) Situs web LEGOAS adalah  layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.{" "}
                    </p>
                    <p>
                      {" "}
                      1.3)  Peserta Lelang adalah personal yang telah mendaftar melalui aplikasi dan website LEGOAS sesuai dengan persyaratan dan kewajiban yang telah ditentukan. Sesuai Syarat dan Ketentuan,  Peserta Lelang akan mendapatkan 1 (satu) akun yang terdaftar dalam situs dan aplikasi mobile LEGOAS (“Akun Peserta Lelang”). Untuk mengikuti lelang maka peserta lelang harus melakukan kewajibannya dalam memilih paket keanggotaan yang diingini. Dengan pendaftaran tersebut dan melewati tahap pemilihan paket keanggotaan maka Peserta Lelang dapat mengikuti proses lelang melalui aplikasi dan website Legoas. 
                    </p>
                    <p>
                      {" "}
                      1.4) Situs web LEGOAS adalah  layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.{" "}
                    </p>
                    <p>
                      {" "}
                      1.5) Situs web LEGOAS adalah  layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.{" "}
                    </p>
                    <p>
                      {" "}
                      1.6) Situs web LEGOAS adalah  layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.{" "}
                    </p>
                    <p>
                      {" "}
                      1.7) Situs web LEGOAS adalah  layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.{" "}
                    </p>
                    <p>
                      {" "}
                      1.8) Situs web LEGOAS adalah  layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.{" "}
                    </p>
                    <p>
                      {" "}
                      1.9) Situs web LEGOAS adalah  layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.{" "}
                    </p>
                    <p>
                      {" "}
                      1.10) Situs web LEGOAS adalah  layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.{" "}
                    </p>
                    <p>
                      {" "}
                      1.11) Situs web LEGOAS adalah  layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.{" "}
                    </p>
                    <p>
                      {" "}
                      1.12) Situs web LEGOAS adalah  layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.{" "}
                    </p>
                  </div>
                </Panel>
                <Panel header="2. Kondisi obyek yang di lelang  " key="2">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      2.1) Peserta lelang memahami dan menyetujui bahwa unit
                      yang di Lelang adalah“sebagaimana adanya”.{" "}
                    </p>
                    <p>
                      {" "}
                      2.2) Peserta telah memeriksa/mengerti kondisi fisik unit
                      dan dokumen objek lelang. Jika terdapat kekurangan atau
                      cacat baik yang terlihat maupun tidak terlihat sepenuh nya
                      menjadi menjadi resiko pemenang lelang.
                    </p>
                    <p>
                      {" "}
                      2.3) Form penilaian kendaraan hanya berfungi untuk
                      mempermudah calon pembeli untuk menilai kondisi kendaraan
                      secara keseluruhan.
                    </p>
                    <p>
                      {" "}
                      2.4) Untuk memudahkan pelaksanaan, panitia membuat daftar
                      lot lelang.
                    </p>
                    <p>
                      {" "}
                      2.5) Daftar lot lelang tidak bisa dijadikan dasar
                      keberatan atau klaim atas unit yang telah dimenangkan.{" "}
                    </p>
                  </div>
                </Panel>
                <Panel header="3. Sebelum mengikuti lelang" key="3">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      3.1) Peminat yang bermaksud mengikuti Lelang harus
                      menyetor uang jaminan sebesar Rp 5.000.000,- (lima juta
                      rupiah) / mobil dan melakukan pendaftaran Lelang.{" "}
                    </p>
                    <p>
                      {" "}
                      3.2) Uang jaminan disetorkan ke Rekening PT …………. yang
                      harus sudah efektif pada saat pendaftaran peserta Lelang.{" "}
                    </p>
                    <p>
                      {" "}
                      3.3) Peserta dapat mendaftarkan diri sebagai peserta ke
                      panitia lelang di masingmasing kota.{" "}
                    </p>
                  </div>
                </Panel>

                <Panel header="4. Pada saat mengikuti lelang" key="4">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      4.1) Hanya peserta Lelang yang memiliki Token dan
                      terdaftar di lelang bersangkutan saja yang bisa mengajukan
                      penawaran.{" "}
                    </p>
                    <p>
                      {" "}
                      4.2) Lelang akan dibuka dengan harga dasar dan kemudian
                      bisa dinaikan dengan kelipatan Rp 500.000 ( Lima ratus
                      ribu rupiah) atau disesuaikan dengan barang yang dilelang.
                    </p>
                    <p>
                      {" "}
                      4.3) Pemenang Lelang adalah peserta yang mengajuan harga
                      penawaran tertinggi.
                    </p>
                    <p>
                      {" "}
                      4.4) Pemenang sepenuhnya bertanggung jawab atas apa yang
                      ia tawar dan ia menangkan.{" "}
                    </p>
                    <p>
                      {" "}
                      4.5) Peserta yang dinilai mengacaukan jalannya Lelang akan
                      didiskualifikasi / dikeluarkan dari acara lelang.
                    </p>
                  </div>
                </Panel>

                <Panel header="5. Sesudah lelang" key="5">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      5.1) Pemenang Lelang dikerakan biaya administrasi sebesar
                      Rp 1.500.000, (satu juta lima ratus ribu rupiah) / unit
                      Lelang yang dimenangkannya.{" "}
                    </p>
                    <p>
                      {" "}
                      5.2) Pemenang Lelang harus melunasi total harga Lelang
                      selambat- lambatnya 3 (tiga) hari kerja setelah tanggal
                      pelaksanaan Lelang.{" "}
                    </p>
                    <p>
                      {" "}
                      5.3) Pemenang Lelang yang sudah membayar lunas harga
                      Lelang dan efektif di rekening, dapat melakukan serah
                      terima dokumen dan kendaraan dengan menunjukkan bukti
                      transfer asli melalui mobile apps legoas.
                    </p>
                    <p>
                      {" "}
                      5.4) Pemenang Lelang yang membatalkan diri pada unit yang
                      dimenangkan atau tidak melunasi pembayaran sesuai dengan
                      waktu yang telah ditetapkan, maka pemenang dinyatakan
                      wanprestasi (kemenangannya batal) dan uang jaminan hangus.{" "}
                    </p>
                    <p>
                      {" "}
                      5.5) Pengembalian uang jaminan akan ditransfer ke rekening
                      peserta sebagaimana tercantum dalam proses pendaftaran di
                      awal.{" "}
                    </p>
                    <p>
                      {" "}
                      5.6) Apabila sampai dengan 2 hari kerja setelah batas
                      pelunasan yang telah ditetapkan unit belum juga diambil
                      pemenang, maka akan dikenakan biaya penitipan sebesar Rp
                      500.000 (Lima ratus ribu rupiah) per unit per hari
                      keterlambatan, serta segala kerusakan dan kehilangan
                      sepenuhnya menjadi tanggung jawab pemenang.{" "}
                    </p>
                  </div>
                </Panel>

                <Panel header="Fource Majoure" key="6">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      Apabila terjadi FORCE MAJOURE seperti bencana alam,
                      kerusuhan masa dan tindakan pemerintah dalam bidang
                      moneter, maka segala akibat dan atau kerugian yang timbul
                      menjadi tanggung jawab pemenang.{" "}
                    </p>
                  </div>
                </Panel>

                <Panel header="Ketentuan lain - lain " key="7">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      1) Biaya yang timbul dalam rangka peralihan hak atau
                      pengembalian / pemindahan kendaraan menjadi tanggung jawab
                      pemenang.{" "}
                    </p>
                    <p>
                      {" "}
                      2) Objek lelang tidak bisa ditukar sebagian atau
                      keseluruhan dengan objek lain manapun.
                    </p>
                  </div>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Index;
