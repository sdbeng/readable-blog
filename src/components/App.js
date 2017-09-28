import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import PostList from './PostList'
import * as actions from '../actions'
// import {Link} from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    console.log('this.props',this.props);
    console.log('this.props.posts',this.props.posts);//undefined
    return (
      <div className="App">
        <PostList />


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchingPosts: (data) => dispatch(fetchPosts(data))
//   }
// } //it give error: actions must be plain objects. Use custom middleware for async actions.

export default connect(mapStateToProps, actions)(App);
