import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing/index';
import Home from './Home/Home';
import Tata from './TataCara/index';
import Jadwal from './Jadwal/Jadwal';
import ListLelang from './ListLelang/index';
import ViewCar from './ViewCar/index';
import Lokasi from './Lokasi/index';
import PengertianLelang from './PengertianLelang/index';
import PeraturanLelang from './PeraturanLelang/index';
import TentangKami from './TentangKami/index';
import Jual from './Jual/index';
import Jual2 from './Jual/index2';
import CariMobil from './CariMobil/CariMobil';
import Produk from './Produk/Produk';
// import Kontak from "./Kontak/index";
// import Login from "./Login/index";
// import RegisterChoose from "./RegisterChoose/index";
// import Register from "./Register/index";

//Register list route
export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pengertian-lelang" component={PengertianLelang} />
          <Route exact path="/peraturan-lelang" component={PeraturanLelang} />
          <Route exact path="/tatacara-lelang" component={Tata} />
          <Route exact path="/jadwal" component={Jadwal} />
          <Route exact path="/lokasi" component={Lokasi} />
          <Route exact path="/list-lelang/:id" component={ListLelang} />
          <Route exact path="/view-car/:id" component={ViewCar} />
          <Route exact path="/tentang-kami" component={TentangKami} />
          <Route exact path="/jual" component={Jual} />
          <Route exact path="/jual2" component={Jual2} />
          <Route exact path="/cari-mobil" component={CariMobil} />
          <Route exact path="/produk" component={Produk} />
          {/* <Route exact path="/kontak" component={Kontak} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/register-choose" component={RegisterChoose} /> */}
          {/* <Route exact path="/register" component={Register} /> */}
          <Route component={noMatch} />
        </Switch>
      </main>
    );
  }
}

//func redirect to home when link is invalid
const noMatch = ({ location }) => (
  <Redirect
    to={{
      pathname: '/'
    }}
  />
);

export default Main;
