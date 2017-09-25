import React, {Component} from 'react'
import {connect} from 'react-redux'
import PostForm from './PostForm'
import {editPost} from '../actions'

const EditPostPage = (props) => {
console.log('edit page props',props);
    return (
      <div>
        <h1>EditPost Page</h1>
        <PostForm
          post={props.post}
          onSubmit={(post) => {
            //dispatch action to edit post
            props.dispatch(editPost(props.post.id, post))
            // redirect to /
            props.history.push('/')
            console.log('updated post', post);
          }}
        />
        <button>
          Remove
        </button>



        <p>editing post with id of {props.match.params.id}</p>
      </div>
    )
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find((post) => {
      return post.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditPostPage)
