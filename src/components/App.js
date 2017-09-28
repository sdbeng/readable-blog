import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import PostList from './PostList'
import * as actions from '../actions'
import {Link} from 'react-router-dom'
// import AddPostPage from './AddPostPage'
import moment from 'moment'

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    console.log('relative time ', moment().startOf('hour').fromNow());
    console.log('Now time ', moment().format());
    console.log('this.props',this.props);
    console.log('this.props.posts',this.props.posts);//now they have data fetched from server!!

    return (
      <div className="App">
        <Link to='/add'>
          Add new post
        </Link>

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
