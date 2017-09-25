import React, { Component } from 'react';
import '../App.css';
// import AppRouter from '../routers/AppRouter'
// import Header from './Header'
import PostList from './PostList'
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">


        <PostList />

      </div>
    );
  }
}

export default App;
