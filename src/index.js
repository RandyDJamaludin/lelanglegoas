import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/index.css'
import 'antd/dist/antd.css'
import App from './App'
import {registerServiceWorker, unregister} from './registerServiceWorker';

const store = createStore(rootReducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,document.getElementById('root'));
unregister();
