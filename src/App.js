import React, { Component } from 'react'
import 'antd/lib/date-picker/style/css'
import Navigation from './pages/Components/Navigation'
import Main from './pages/Main'
import { BackTop } from 'antd'
import FaTop from 'react-icons/lib/fa/chevron-circle-up'
import Footer from './pages/Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Main/>
        <BackTop>
          <div className="ant-back-top-inner">
            <p className='backTop'><FaTop/></p>
          </div>
        </BackTop>
        <Footer/>
      </div>
    );
  }
}

export default App;
