import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Collapse } from 'antd'
import FaRule from 'react-icons/lib/fa/cog'
const Panel = Collapse.Panel;

export class Index extends Component {
  
  render() { 
    return (
      <div className='wrap-peraturanLelangPage'>
        <Grid>
          <Row>
            <Col md={12}>
                <p className='header'><span className='orange'><FaRule/></span> Peraturan Lelang </p>
                <hr/>
                <Collapse defaultActiveKey={['1']} accordion>
                  <Panel header="1. Open house" key="1">
                    <div className='collapse-body'>
                      <p><span> 1.1 </span> Selama acara Open House peminat diberikan kesempatan untuk memeriksa fisik & dokumen unit yang akan di Lelang, pada hari Lelang tidak diperkenankan lagi untuk melihat objek lelang.</p>
                      <p><span> 1.2 </span> Pengunjung Open House dilarang mengambil atau merusak atau memindahkan atribut, nomor, tulisan atau tanda-tanda yang menempel pada objek lelang.  </p>
                    </div>
                  </Panel>
                  <Panel header="2. Kondisi obyek yang di lelang  " key="2">
                    <div className='collapse-body'>
                      <p><span> 2.1 </span> Peserta lelang memahami dan menyetujui bahwa unit yang di Lelang adalah“sebagaimana adanya”. </p>
                      <p><span> 2.2 </span> Peserta telah memeriksa/mengerti kondisi fisik unit dan dokumen objek lelang. Jika terdapat kekurangan atau cacat baik yang terlihat maupun tidak terlihat sepenuh nya menjadi menjadi resiko pemenang lelang.</p>
                      <p><span> 2.3 </span> Form penilaian kendaraan hanya berfungi untuk mempermudah calon pembeli untuk menilai kondisi kendaraan secara keseluruhan.</p>
                      <p><span> 2.4 </span> Untuk memudahkan pelaksanaan, panitia membuat daftar lot lelang.</p>
                      <p><span> 2.5 </span> Daftar lot lelang tidak bisa dijadikan dasar keberatan atau klaim atas unit yang telah dimenangkan. </p>
                    </div>
                  </Panel>
                  <Panel header="3. Sebelum mengikuti lelang" key="3">
                    <div className='collapse-body'>
                      <p><span> 3.1 </span> Peminat yang bermaksud mengikuti Lelang harus menyetor uang jaminan sebesar Rp 5.000.000,- (lima juta rupiah) / mobil dan melakukan pendaftaran Lelang. </p>
                      <p><span> 3.2 </span> Uang jaminan disetorkan ke Rekening PT ………….  yang harus sudah efektif pada saat pendaftaran peserta Lelang.  </p>
                      <p><span> 3.3 </span>Peserta dapat mendaftarkan diri sebagai peserta ke panitia lelang di masingmasing kota.  </p>
                    </div>
                  </Panel>


                  <Panel header="4. Pada saat mengikuti lelang" key="4">
                    <div className='collapse-body'> 
                      <p><span> 4.1 </span> Hanya peserta Lelang yang memiliki Token dan terdaftar di lelang bersangkutan saja yang bisa mengajukan penawaran. </p>
                      <p><span> 4.2 </span> Lelang akan dibuka dengan harga dasar dan kemudian bisa dinaikan dengan kelipatan Rp 500.000 ( Lima ratus ribu rupiah) atau disesuaikan dengan barang yang dilelang.</p>
                      <p><span> 4.3 </span> Pemenang Lelang adalah peserta yang mengajuan harga penawaran tertinggi.</p>
                      <p><span> 4.4 </span> Pemenang sepenuhnya bertanggung jawab atas apa yang ia tawar dan ia menangkan. </p>
                      <p><span> 4.5 </span> Peserta yang dinilai mengacaukan jalannya Lelang akan didiskualifikasi / dikeluarkan dari acara lelang.</p>
                    </div>
                  </Panel>

                  <Panel header="5. Sesudah lelang" key="5">
                    <div className='collapse-body'> 
                      <p><span> 5.1 </span> Pemenang Lelang dikerakan biaya administrasi sebesar Rp 1.500.000, (satu juta lima ratus ribu rupiah)  / unit Lelang yang dimenangkannya. </p>
                      <p><span> 5.2 </span> Pemenang Lelang harus melunasi total harga Lelang selambat- lambatnya 3 (tiga) hari kerja setelah tanggal pelaksanaan Lelang.  </p>
                      <p><span> 5.3 </span> Pemenang Lelang yang sudah membayar lunas harga Lelang dan efektif di rekening, dapat melakukan serah terima dokumen dan kendaraan dengan menunjukkan bukti transfer asli melalui mobile apps legoas.</p>
                      <p><span> 5.4 </span> Pemenang Lelang yang membatalkan diri pada unit yang dimenangkan atau tidak melunasi pembayaran sesuai dengan waktu yang telah ditetapkan, maka pemenang dinyatakan wanprestasi (kemenangannya batal) dan uang jaminan hangus.  </p>
                      <p><span> 5.5 </span> Pengembalian uang jaminan akan ditransfer ke rekening peserta sebagaimana tercantum dalam proses pendaftaran di awal.  </p>
                      <p><span> 5.6 </span> Apabila sampai dengan 2 hari kerja setelah batas pelunasan yang telah ditetapkan unit belum juga diambil pemenang, maka akan dikenakan biaya penitipan sebesar Rp 500.000 (Lima ratus ribu rupiah) per unit per hari keterlambatan, serta segala kerusakan dan kehilangan sepenuhnya menjadi tanggung jawab pemenang. </p> 
                    </div>
                  </Panel>

                  <Panel header="Fource Majoure" key="6">
                    <div className='collapse-body'>
                      <p>Apabila terjadi FORCE MAJOURE seperti bencana alam, kerusuhan masa dan tindakan pemerintah dalam bidang moneter, maka segala akibat dan atau kerugian yang timbul menjadi tanggung jawab pemenang. </p>
                    </div>
                  </Panel>

                  <Panel header="Ketentuan lain - lain " key="7">
                    <div className='collapse-body'>
                      <p><span> 1 </span> Biaya yang timbul dalam rangka peralihan hak atau pengembalian / pemindahan kendaraan menjadi tanggung jawab pemenang. </p>
                      <p><span> 2 </span> Objek lelang tidak bisa ditukar sebagian atau keseluruhan dengan objek lain manapun.</p>
                    </div>
                  </Panel>
                  
                </Collapse>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
 
export default Index;