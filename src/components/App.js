import React, { Component } from 'react';
import '../App.css';
import AppRouter from '../routers/AppRouter'
import Header from './Header'
import Page1 from './Page1'
import PostList from './PostList'

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
