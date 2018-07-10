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
                      1.4)  Situs web LEGOAS adalah  layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.{" "}
                    </p>
                    <p>
                      {" "}
                      1.5) Token adalah hak peserta lelang berupa deposito sebagai jaminan keikutsertaan peserta lelang dan dapat dikembalikan (refund) jika tidak menang atau kewajiban sebagai pemenang telah dipenuhi. Token pada umumnya disebut dengan Nomor Peserta Lelang pada pelaksanaan lelang secara umum. 1 Token hanya untuk memenangkan 1 unit kendaraan.
                    </p>
                    <p>
                      {" "}
                      1.6) Biaya administrasi adalah kewajiban dari peserta lelang yang harus dipenuhi hanya kepada peserta lelang memenangkan unit/produk yang diingini. Besaran uang administrasi sebesar Rp. 1.500.000 per unit kendaraan mobil atau disesuaikan dengan masa-masa jika promosi. Biaya administrasi selalu diinformasikan pada lelang yang akan dipilih.
                      </p>
                    <p>
                      {" "}
                      1.7) Penawaran LEGOAS adalah semua pengajuan harga pada penjualan melalui lelang secara onsite dan atau online yang dilakukan oleh LEGOAS melalui aplikasi mobile dan situs web LEGOAS.                   
                    </p>
                    <p>
                      {" "}
                      1.8) Pemenang Lelang adalah peserta lelang yang telah mengajukan harga tertinggi atas produk/barang yang dilelang hingga masa lelang atas Lot tersebut berakhir. 
                    </p>
                    <p>
                      {" "}
                      1.9)  Lelang LEGOAS adalah seluruh proses dan pelaksanaan lelang yang dilakukan oleh LEGOAS penyelenggara lelang melalui aplikasi mobile dan situs web LEGOAS secara terbuka, telah melalui persyaratan penyelenggaraan lelang di Indonesia. 
                    </p>
                    <p>
                      {" "}
                      1.10)  GRADE kendaraan adalah sertifikasi yang dilakukan oleh tim LEGOAS atas unit yang dilelang untuk menunjukkan kondisi kendaraan secara keseluruhan dan dinilai atas body, interior, surat, kondisi global mesin dan bagian bawah kendaraan. 
                    </p>
                    <p>
                      {" "}
                      1.11)  Situs web LEGOAS adalah  layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.{" "}
                    </p>
                    <p>
                      {" "}
                      1.12)  Penitip Lelang adalah pemilik barang yang sah dan telah setuju untuk menitipkan assetnya untuk dilelang melalui LEGOAS sesuai dengan kesepakatan yang telah disetujui keduabelah pihak menyangkut hak dan kewajiban. 
                    </p>
                  </div>
                </Panel>
                <Panel header="2.  Penggunaan Umum dan Akses atas Platform " key="2">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      2.1) Pengguna dan atau Peserta Lelang menyetujui seluruh kegiatan transaksi dilakukan dalam Lelang LEGOAS  melalui mobile aplikasi dan situs web LEGOAS dan tidak diperbolehkan melanggar peraturan perundang-undangan yang berlaku di Indonesia. Atas pelanggaran yang dilakukan maka Peserta Lelang akan dikenakan sanksi sesuai peraturan perundang-undangan dan tidak diperkenankan mengikuti lelang selanjutnya.
                    </p>
                    <p>
                      {" "}
                      2.2) Pengguna dan Peserta Lelang tunduk dan taat pada semua peraturan yang berlaku di Indonesia yang berhubungan dengan penggunaan jaringan dan komunikasi data, baik di wilayah Negara Kesatuan Republik Indonesia maupun dari dan keluar wilayah Negara Kesatuan Republik Indonesia.
                    </p>
                    <p>
                      {" "}
                      2.3) Waktu yang diakui dan digunakan adalah waktu yang tercantum pada server yang digunakan dalam Lelang LEGOAS.
                    </p>
                    <p>
                      {" "}
                      2.4) Peserta Lelang wajib merahasiakan  Kode Akses (password) dengan cara:
                          <ul>
                            <li class="Tabs"> 
                              {" "}
                              a)  Tidak memberitahukan kode akses kepada orang lain termasuk kepada anggota atau orang terdekat Peserta Lelang. 
                            </li>
                            <li class="Tabs"> 
                              {" "}
                              b)  Tidak menyimpan password, benda-benda lainnya atau sarana apapun lainnya yang memungkinkan password diketahui orang lain. 
                            </li>
                            <li class="Tabs"> 
                              {" "}
                              c)   Berhati-hati dalam menggunakan Password agar tidak terlihat orang lain. 
                            </li>
                            <li class="Tabs"> 
                              {" "}
                              d)  Tidak menggunakan alamat email dan kode akses yang ditentukan atau dipilihkan oleh orang lain, atau yang mudah diterka seperti tanggal lahir atau kombinasiny dan nomor telp.
                            </li>
                            <li class="Tabs"> 
                              {" "}
                              e)  Segala penyalahgunaan username dan password merupakan tanggung jawab pelanggan lelang sepenuhnya. Peserta lelang dengan ini membebaskan LEGOAS dari segala tuntutan yang timbul, baik dari pihak lain maupun Peserta Lelang sendiri sebagai akibat penyalahgunaan.
                            </li>
                            <li class="Tabs"> 
                              {" "}
                              f)   Penggunaan akses masuk dan kode akses( Password) dan menyangkut proses didalamnya mempunyai kekuatan hukum yang sama dengan perintah tertulis yang ditandatangani oleh Peserta Lelang.
                            </li>
                            <li class="Tabs"> 
                              {" "}
                              g)   Peserta Lelang dapat setiap saat dapat mengubah Kata Sandi (password). Peserta Lelang harus memberitahukan kepada LEGOAS jika ada kemungkinan terjadi kesalahgunaan akses dan kata sandi yang dimiliki untuk dilakukan pemblokiran. 
                            </li>
                          </ul>
                    </p>
                    <p>
                      {" "}
                      2.5) Keterangan yang tercantum di setiap produk/barang yang dilelang adalah berupa acuan namun tidak bertanggungjawab atas jaminan bahwa keterangan tersebut akurat, terkini atau bebas dari kesalahan.{" "}
                    </p>
                    <p>
                      {" "}
                      2.6) Dengan menggunakan aplikasi dan atau situs web Legoas, maka pengguna setuju :
                            <ul>
                              <li class="Tabs">
                              {" "}
                              a)  untuk selalu mengakses dan/atau menggunakan Layanan hanya untuk tujuan yang tidak melanggar hukum, dan dengan cara yang sah dan selanjutnya setuju untuk melakukan kegiatan yang berkaitan dengan Layanan dengan itikad baik.
                              </li>
                              <li class="Tabs">
                              {" "}
                              b) memastikan bahwa setiap informasi atau data yang Peserta Lelang berikan/umumkan/posting atau yang dimunculkan di Platform sehubungan dengan Layanan adalah akurat dan setuju untuk bertanggung jawab atas informasi dan data tersebut. 
                              </li>
                              <li class="Tabs">
                              {" "}
                              c)  Tidak menggunakan seluruh atau sebagian materi yang ada dalam situs dan aplikasi untuk/kepada pihak ke 3 secara langsung maupun tidak langsung.
                              </li>
                              <li class="Tabs">
                              {" "}
                              d)  Segala transaksi yang dilakukan oleh Peserta Lelang melalui situs web dan aplikasi mobile LEGOAS tidak dapat dibatalkan dengan alasan apapun
                              </li>
                            </ul>
                      {" "}
                    </p>
                    <p>
                      {" "}
                      2.7) Konten yang ditampilkan melalui layanan Penawaran LEGOAS memungkinkan berisi ketidakakuratan dan kesalahan ketik dan LEGOAS tidak menjamin keakuratan atau kelengkapan konten atau bahwa setiap cacat akan diperbaiki. Ketergantungan pada konten, saran, pernyataan, atau informasi lainnya adalah berupa risiko Peserta Lelang sendiri. LEGOAS berhak, atas kebijakan LEGOAS sendiri, untuk memperbaiki kesalahan atau kelalaian di bagian layanan Penawaran LEGOAS mana pun dan untuk membuat perubahan pada fitur, fungsi, atau konten layanan Penawaran LEGOAS kapan saja.{" "}
                    </p>
                    <p>
                      {" "}
                      2.8) LEGOAS tidak bertanggung jawab atas kegagalan atau penundaan dalam pelaksanaan penawaran atau kesalahan yang terdapat dalam penawaran yang dilakukan melalui layanan Penawaran LEGOAS.{" "}
                    </p>
                    <p>
                      {" "}
                      2.9) LEGOAS menyediakan layanan Penawaran LEGOAS "apa adanya" dan tanpa jaminan atau kondisi apapun, tersurat, tersirat maupun pernyataan. Tanpa membatasi, LEGOAS  tidak bertanggung jawab atas kegagalan, penundaan, atau kesalahan yang disebabkan oleh gangguan terhadap ketersediaan layanan atau layanan web LEGOAS atau kesalahan atau kesalahan dalam konten atau fungsionalitasnya, perangkat lunak apapun dan / atau kerusakan hardware (Peserta Lelang atau LEGOAS) dan / atau masalah koneksi internet (Peserta Lelang atau LEGOAS), dan LEGOAS tidak menyatakan atau menjamin bahwa layanan Penawaran LEGOAS atau situs web akan bebas error,  bebas dari virus atau komponen berbahaya lainnya, atau bahwa setiap defeksi akan diperbaiki.
                    </p>
                  </div>
                </Panel>
                <Panel header="3. Peserta Lelang" key="3">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      3.1) Peserta Lelang yang masuk dalam proses pembelian keanggotaan dan Penawaran LEGOAS melakukan sepenuhnya atas risiko Peserta Lelang sendiri. Akses dan penggunaan Penawaran LEGOAS tergantung pada, antara lain, ketersediaan internet dan kecepatan dan kualitas koneksi internet, dan karenanya Peserta Lelang diharuskan untuk memastikan kembali koneksi internet, terpenuhinya baterai, dan kesiapan alat yang digunakan. Legoas tidak bertanggungjawab atas akses, penggunaan dan atau ketidakmampuan peserta menggunakan platform atau layanan; system, server atau koneksi yang gagal, kesalahan, kelalaian, gangguan, keerlambataan dalam transmisi, virus computer atau kode berbahaya, merugikan, merusak lainnya,  atau macros.{" "}
                    </p>
                    <p>
                      {" "}
                      3.2) Peserta menerima bahwa setiap resiko kesalahpahaman, kesalahan, kerusakan, biaya atau kerugian yang diakibatkan dari penggunaan platform, adalah sepenuhnya resiko Peserta sendiri.{" "}
                    </p>
                    <p>
                      {" "}
                      3.4) Peserta Lelang wajib merahasiakan kerahasiaan Akun Peserta Lelang beserta data yang tercantum didalamnya dan tidak boleh mengizinkan pihak ketiga untuk menggunakan atau mengakses Akun Peserta Lelang atau sebaliknya.{" "}
                    </p>
                    <p>
                      {" "}
                      3.5) Setiap tindakan, transaksi dan Penawaran LEGOAS yang dilakukan Peserta Lelang melalui situs dan aplikasi mobile LEGOAS bersifat final dan mengikat seketika.
                    </p>
                    <p>
                      {" "}
                      3.6) Hasil Penawaran LEGOAS akan ditampilkan di layar Peserta Lelang selama pelaksanaan Lelang LEGOAS berlangsung sesuai jenis dan nomor lot lelang yang diikuti.
                    </p>
                    <p>
                      {" "}
                      3.7)  LEGOAS berhak menolak pendaftaran untuk mengajukan Penawaran LEGOAS, menarik izin bagi Peserta Lelang untuk menggunakan Penawaran LEGOAS, atau menghentikan Akun Peserta Lelang, dengan alasan apapun kapanpun, selama atau setelah Penjualan.
                    </p>
                    <p>
                      {" "}
                      3.8) Peserta Lelang bertanggung jawab penuh atas semua tawaran yang diajukan melalui Akun Peserta Lelang termasuk kewajiban untuk membayar secara penuh beserta biaya administrasinya dan tepat waktu sesuai dengan Ketentuan Pembayaran untuk setiap jenis Lelang LEGOAS dari Penawaran LEGOAS yang sukses diajukan dari Akun Peserta lelang.
                    </p>
                    <p>
                      {" "}
                      3.9) Peserta Lelang melakukan Penawaran LEGOAS secara sadar tanpa paksaan dari pihak mana pun dan Penawaran LEGOAS tersebut bersifat mengikat dan sah.
                    </p>
                    <p>
                      {" "}
                      3.10) Peserta Lelang dianggap sungguh-sungguh telah mengetahui apa yang ditawar/dibeli. Apabila terdapat kekurangan/kerusakan baik yang terlihat ataupun tidak terlihat, maka Peserta Lelang tidak berhak untuk menolak atau menarik kembali setelah pemenang disahkan dan melepaskan segala hak untuk meminta kerugian atas sesuatu apapun juga.
                    </p>
                    <p>
                      {" "}
                      3.11)  Penggunaan layanan Penawaran LEGOAS setiap saat tunduk pada Ketentuan Penggunaan Situs Web dan aplikasi LEGOAS.
                    </p>
                    <p>
                      {" "}
                      3.12)  Peserta lelang dapat memeriksa hasil pengumuman yang dipublikasikan oleh LEGOAS setelah pelaksanaan Lelang LEGOAS untuk mengetahui status keberhasilan Peserta lelang dalam Penawaran LEGOAS dan notifikasi yang dikirimkan pada email yang didaftarkan oleh Peserta Lelang dan melalui aplikasi  yang diunduh oleh Peserta Lelang.
                    </p>
                  </div>
                </Panel>

                <Panel header="4. Pemenang Lelang" key="4">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      4.1) Pemenang Lelang ditentukan berdasarkan harga tertinggi yang diajukan oleh Peserta Lelang atas Lot yang diikuti setelah waktu lelang berakhir pada Lot tersebut.
                      {" "}
                    </p>
                    <p>
                      {" "}
                      4.2)Peserta Lelang harus melakukan pembayaran atas Penawaran LEGOAS untuk nomor Lot Lelang LEGOAS yang berhasil dimenangkan dan diajukan oleh Peserta Lelang dari Akun Peserta lelang sesuai dengan Ketentuan Pembayaran dan beserta Uang Administrasi.
                    </p>
                    <p>
                      {" "}
                      4.3)Pemenang Lelang  bertanggung jawab sepenuhnya atas pelunasan kewajiban pembayaran lelang sejumlah Penawaran di platform LEGOAS yang dimenangkan, biaya administrasi, dan biaya-biaya resmi lainnya berdasarkan peraturan perundang-undangan yang berlaku.
                    </p>
                    <p>
                      {" "}
                      4.4) Pemenang Lelang yang tidak melunasi kewajiban pembayaran lelang sesuai Ketentuan Pembayaran, maka pada hari kerja berikutnya pengesahannya sebagai Pemenang Lelang dibatalkan oleh LEGOAS, tanpa mengindahkan ketentuan sebagaimana dimaksud dalam Pasal 1266 dan Pasal 1267 KUH Perdata dan dapat dituntut ganti rugi oleh LEGOAS berupa uang jaminan melalui paket keanggotaan yang dibeli tidak dapat dikembalikan..{" "}
                    </p>
                    <p>
                      {" "}
                      4.5) Pemenang Lelang tidak diperkenankan mengambil/menguasai barang yang dimenangi sebelum memenuhi kewajiban pelunasan lelang. Apabila Pemenang Lelang melanggar ketentuan ini, maka dianggap telah melakukan suatu tindak kejahatan yang dapat dilaporkan kepada aparat penegak hukum.
                    </p>
                    <p>
                      {" "}
                      4.6) Pemenang Lelang tunduk pada hukum perdata dan hukum dagang yang berlaku di Indonesia .
                    </p>
                    <p>
                      {" "}
                      4.7) Pada saat produk/barang telah berpindah tangan dari Legoas kepada pemenang atau orang lain yang mewakili pemenang, maka resiko kerusakan, hilang, cacat Produk/barang berada pada Pemenang.
                    </p>
                    <p>
                      {" "}
                      4.8) Legoas berhak untuk menagih biaya perawatan/parkir jika produk/barang yang sudah dilunasi tidak diambil oleh Pemenang lelang.
                    </p>
                  </div>
                </Panel>

                <Panel header="5. Ketentuan Pembayaran" key="5">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      5.1) Pembayaran paket deposit untuk mengikuti setiap Penawaran LEGOAS dilakukan melalui Rekening Pembayaran sesuai dengan jumlah dan nilai paket yang ditentukan oleh LEGOAS dan dipilih oleh peserta.{" "}
                    </p>
                    <p>
                      {" "}
                      5.2) Pemenang Lelang dapat melihat total jumlah kewajiban yang harus dilunasi melalui aplikasi mobile dan situs web LEGOAS..{" "}
                    </p>
                    <p>
                      {" "}
                      5.3) LEGOAS akan mengirimkan korespodensi berupa email notifikasi dan kode billing kepada Pemenang Lelang untuk Pembayaran atas Penawaran LEGOAS yang berhasil dimenangkan kepada Pemenang Lelang.
                    </p>
                    <p>
                      {" "}
                      5.4) Pembayaran atas Penawaran LEGOAS oleh Pemenang Lelang diproses melalui transaksi transfer sesuai yang terdapat di email sejumlah total nilai yang tercantum dalam email notifikasi pembayaran lelang yang akan dikirimkan oleh LEGOAS ke email yang didaftarkan oleh Peserta Lelang.{" "}
                    </p>
                    <p>
                      {" "}
                      5.5)    peserta lelang menjamin nomor /data rekening yang dicantum sewaktu pendaftaran adalah benar dan bertanggungjawab atas segala kejadian yang terjadi. Legoas tidak bertanggungjawab atas efek yang terjadi atas kesalahan pencantuman nomor rekening dan seluruh transaksi yang mengacu pada nomor/data rekening tersebut..{" "}
                    </p>
                    <p>
                      {" "}
                      5.6)Pemenang Lelang wajib membayar dalam jangka waktu terhitung sejak tanggal pengumuman Pemenang Lelang dan kode billing dikirimkan.{" "}
                    </p>
                    <p>
                      {" "}
                      5.7) Apabila Pemenang Lelang yang tidak melunasi kewajiban pembayaran lelang sejumlah kewajibannya tersebut dalam jangka waktu yang telah ditentukan di atas, maka pada hari kerja berikutnya LEGOAS berhak untuk membatalkan pengesahannya sebagai Pemenang Lelang, dan uang jaminannya akan menjadi hak LEGOAS sesuai dengan fungsinya..{" "}
                    </p>
                    <p>
                      {" "}
                      5.8) LEGOAS berhak untuk mengetahui data pribadi Pemenang Lelang terkait dengan proses pengkreditan dana deposit ke rekening Pemenang Lelang. Data pribadi tersebut digunakan terkait dengan proses pengkreditan dana dan untuk mengidentifikasi apabila diduga terdapat aktifitas illegal atau fraud.{" "}
                    </p>
                    <p>
                      {" "}
                      5.9) Beberapa fungsi atau fitur dalam aplikasi dari Rekening Pembayaran memerlukan Pemenang Lelang untuk memilih untuk mendapatkan kode notifikasi yang akan dikirimkan ke alamat email Pemenang Lelang. Pemenang Lelang dengan ini menyatakan bertanggung jawab penuh atas penggunaan kode notifkasi tersebut dan membebaskan LEGOAS dari tuntutan apapun terkait penggunaan kode notifikasi tersebut..{" "}
                    </p>

                  </div>
                </Panel>

                <Panel header="Kekayaan Intelektual" key="6">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      6.1) Kepemilikan: Kekayaan Intelektual (HAKI) dalam atau atas Platform serta atas setiap Materi, dimiliki, atau berlisensi atau dikuasai oleh LEGOAS, atau pemberi lisensi LEGOAS atau penyedia layanan LEGOAS..{" "}
                    </p>
                    <p>
                      {" "}
                      6.2) Penggunaan Terbatas: Tidak ada bagian-bagian dari Platform atau Material yang dapat direproduksi, direkayasa, decompiled, dibongkar, dipisahkan, diubah, didistribusikan, republished, ditampilkan, disiarkan, ditautkan (hyperlinked), direfleksikan (mirrored), disusun (framed), ditransfer atau dikirim dengan cara apapun atau disimpan/dipasang dalam suatu sistem pencarian informasi atau dipasang pada suatu server, sistem atau peralatan, tanpa izin tertulis sebelumnya dari kami atau dari pemilik hak cipta yang bersangkutan.{" "}
                    </p>
                    <p>
                      {" "}
                      6.3) Merek Dagang (Trademarks): Trademarks yang terdaftar dan yang tidak terdaftar atas nama kami atau atas nama pihak ketiga. Tidak ada pada Platform dan Syarat Penggunaan ini yang bisa ditafsirkan sebagai pemberian, secara tersirat atau tidak, atau di tafsirkan sebagai lisensi atau hak untuk menggunakan (termasuk atas meta tautan "hot" link ke website lain) setiap Trademarks yang ditampilkan pada Layanan, tanpa izin tertulis dari kami atau pemilik Trade lain yang berlaku.{" "}
                    </p>
                    <p>
                      {" "}
                      6.4) Syarat dan Ketentuan Penawaran Umum dipublikasikan diketentuan dan peraturan untuk Penjualan dan / atau di situs web serta aplikasi mobile LEGOAS, dan di media resmi lainnya. Informasi tambahan yang berlaku untuk Lelang LEGOAS mungkin juga tercantum dalam katalog, di situs LEGOAS, dan merupakan tanggung jawab Peserta Lelang untuk meninjau informasi tersebut..{" "}
                    </p>
                    <p>
                      {" "}
                      6.5)  Pengumuman yang mempengaruhi Lelang LEGOAS juga dapat dilakukan secara lisan sebelum dan selama Lelang LEGOAS berlangsung tanpa pemberitahuan sebelumnya. Saat mendaftar untuk mengajukan Penawaran LEGOAS pada setiap jenis Lelang LEGOAS, Peserta lelang menyetujui Syarat dan Ketentuan yang berlaku.
                      {" "}
                    </p>

                  </div>
                </Panel>

                <Panel header="Perubahan terhadap Syarat dan Ketentuan LEGOAS " key="7">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      LEGOAS berhak membuat perubahan pada syarat dan ketentuan ini sewaktu-waktu. Setiap perubahan akan diposting di situs LEGOAS di www.legoas.co.id  dan akan  dilengkapi dengan pemberitahuan dan tautan ke persyaratan yang direvisi di situs web LEGOAS. Peserta Lelalang diwajibkan selalu meninjau syarat dan ketentuan ini secara teratur untuk memastikan Peserta Lelang mengetahui adanya perubahan yang dilakukan oleh LEGOAS. Jika Peserta Lelang menggunakan Penawaran LEGOAS setelah perubahan telah dilakukan dan diposting, Peserta Lelang akan dianggap telah menyetujui perubahan tersebut. Jika Peserta Lelang tidak menyetujui perubahan tersebut, sebaiknya Peserta Lelang tidak menggunakan LEGOAS untuk berikutnya.{" "}
                    </p>
                  </div>
                </Panel>

                <Panel header="Force Majuer " key="8">
                  <div className="collapse-body">
                    <p>
                      {" "}
                      Dalam hal LEGOAS tidak dapat melakukan proses dan pelaksanaan lelang baik sebagian maupun seluruhnya karena kejadian=kejadian atau hal-hal diluar kekuasaan maupun kemampuan LEGOAS, termasuk namun tidak terbatas pada bencana alam, perang, huru-hara, peralatan/system/transmisi dalam keadaan tidak berfungsi, terjadinya gangguan listrik, gangguan telekomunikasi, adanya kebijakan pemerintah yang melarang LEGOAS memberikan layanan, serta kejadian-kejadian atau hal-hal lain di luar kekuasaan atau kemampuan LEGOAS, maka Peserta Lelang dengan ini membebaskan LEGOAS dari segala macam tuntutan apa pun dan dalam bentuk apapun terkait dengan hal tersebut. .{" "}
                    </p>
                  </div>
                </Panel>
              </Collapse>
              <p class="Text">
                {" "}
                Dalam hal LEGOAS tidak dapat melakukan proses dan pelaksanaan lelang baik sebagian maupun seluruhnya karena kejadian=kejadian atau hal-hal diluar kekuasaan maupun kemampuan LEGOAS, termasuk namun tidak terbatas pada bencana alam, perang, huru-hara, peralatan/system/transmisi dalam keadaan tidak berfungsi, terjadinya gangguan listrik, gangguan telekomunikasi, adanya kebijakan pemerintah yang melarang LEGOAS memberikan layanan, serta kejadian-kejadian atau hal-hal lain di luar kekuasaan atau kemampuan LEGOAS, maka Peserta Lelang dengan ini membebaskan LEGOAS dari segala macam tuntutan apa pun dan dalam bentuk apapun terkait dengan hal tersebut. .{" "}
              </p>
      
            </Col>
          </Row>
        </Grid>
      </div>
      
    );
  }
}

export default Index;
