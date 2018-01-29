import React, { Component } from 'react'
import 'antd/lib/date-picker/style/css'
import { Navigation, Footer } from './pages/Components/Partial'
import { BackTop } from 'antd'
import Main from './pages/Main'
import FaTop from 'react-icons/lib/fa/chevron-circle-up'

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
