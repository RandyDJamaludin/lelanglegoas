import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing/index'
import Tata from './TataCara/index'
import Jadwal from './Jadwal/index'
import Lokasi from './Lokasi/index'
import Kontak from './Kontak/index'
import Login from './Login/index'
import Register from './Register/index'

export class Main extends Component {
    render() { 
        return ( 
          <main> 
          <Switch >
              <Route exact path="/" component={Landing}/>
              <Route exact path="/tatacara" component={Tata}/>
              <Route exact path="/jadwal" component={Jadwal}/>
              <Route exact path="/lokasi" component={Lokasi}/>
              <Route exact path="/kontak" component={Kontak}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
          </Switch>
          </main>
        )
    }
}
 
export default Main;