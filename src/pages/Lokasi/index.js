import React, { Component } from 'react'
import Map from '../Components/Map'
import { Footer } from '../Components/Footer';
import { Adsense } from '../Components/Adsense';

export class Index extends Component {
    render() { 
        return (
            <div>
              <div style={{padding:'8%'}}>
                <Map/>
              </div>
              
              <Adsense/>
              <Footer/>
            </div>
        )
    }
}
 
export default Index;