import React from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { addPost } from '../actions'

//this page component will dispatch an action to the redux store
const AddPostPage = (props) => {
  return (
    <div>
      <h1>Add Post</h1>
      <PostForm
        onSubmit={(post) => {
          console.log(post);
          props.dispatch(addPost(post))
          //redirect to home page
          props.history.push('/')
        }}
      />
    </div>
  )
}

export default connect()(AddPostPage)
