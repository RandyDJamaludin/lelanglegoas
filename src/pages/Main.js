import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing/index'
import Jadwal from './Jadwal/index'
import Lokasi from './Lokasi/index'

export class Main extends Component {
    render() { 
        return ( 
          <main> 
          <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/jadwal" component={Jadwal}/>
              <Route exact path="/lokasi" component={Lokasi}/>
          </Switch>
          </main>
        )
    }
}
 
export default Main;