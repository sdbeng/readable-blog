import React from 'react'
import {connect} from 'react-redux'
import PostListItem from './PostListItem'


const PostList = (props) => {

    return (
      <div>
        <h1>Posts List </h1>
        <p>{props.posts.length} posts</p>

        {props.posts.map((post) => {
          return <PostListItem key={post.id} {...post} />
        })}

      </div>

    )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList)
