import React, { Component } from 'react'
import 'antd/lib/date-picker/style/css'
import Navigation from './pages/Components/Navigation'
import Landing from './pages/Landing/index'
import { BackTop } from 'antd'
import FaTop from 'react-icons/lib/fa/chevron-circle-up'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Landing/>
        <BackTop>
          <div className="ant-back-top-inner">
            <p className='backTop'><FaTop/></p>
          </div>
        </BackTop>
      </div>
    );
  }
}

export default App;
