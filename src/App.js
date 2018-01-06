import React, { Component } from 'react'
import 'antd/lib/date-picker/style/css'
import './App.css'
import Navigation from './pages/Components/Navigation'
import Landing from './pages/Landing/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Landing/>
      </div>
    );
  }
}

export default App;
