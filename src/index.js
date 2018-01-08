import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
