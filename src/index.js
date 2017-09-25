import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import {addPost} from './actions'
import {postsReducer, filtersReducer} from './reducers'
import getVisiblePosts from './selectors'


const store = createStore(
  combineReducers({
    posts: postsReducer,
    filters: filtersReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//populate some data
store.dispatch((addPost({title:'React Air Force', body:'Learning to fly'})))
store.dispatch((addPost({title:'Wolverines', body:'Defend our land at all cost.', voteScore: 5})))
store.dispatch((addPost({title:'Pray to God', body:'Pray with all your heart.', voteScore:10, author:'JC', category:'Main'})))

// console.log('index.js main store: ', store.getState());
const state = store.getState()
const visiblePosts = getVisiblePosts(state.posts, state.filters)
console.log('visiblePosts', visiblePosts);

ReactDOM.render(
  <Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));
registerServiceWorker();
