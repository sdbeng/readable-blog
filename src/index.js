import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'

ReactDOM.render(
  <Provider><AppRouter /></Provider>, document.getElementById('root'));
registerServiceWorker();
