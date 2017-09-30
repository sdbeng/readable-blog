import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import {selectCategory, fetchPosts, addPost, fetchPostsIfNeeded} from './actions'
import rootReducer from './reducers'
import reduxThunk from 'redux-thunk'
// import axios from 'axios'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(reduxThunk),
    // logger
  )
)

console.log('store.getState() at indexjs:',store.getState())
//populate some data
store.dispatch(selectCategory('react'))
store.dispatch(fetchPostsIfNeeded('react'))
   .then(() => console.log('after fetch',store.getState()))

// console.log('index.js main store: ', store.getState());
// const state = store.getState()


ReactDOM.render(
  <Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));
registerServiceWorker();
