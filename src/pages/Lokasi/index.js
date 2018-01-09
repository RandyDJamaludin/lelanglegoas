import React, { Component } from 'react'
import Map from '../Components/Map'
import { Footer } from '../Components/Footer';
import { Adsense } from '../Components/Adsense';

export class Index extends Component {
    render() { 
        return (
            <div className='page-lokasi'>
              <Map/>
              <Adsense/>
              <Footer/>
            </div>
        )
    }
}
 
export default Index;