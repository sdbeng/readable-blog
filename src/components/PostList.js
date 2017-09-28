import React from 'react'
import {connect} from 'react-redux'
import PostListItem from './PostListItem'
import selectPosts from '../selectors'

const PostList = (props) => {

    return (
      <div>
        {/* List of posts */}

        {props.posts.map((post) => {
          return <PostListItem key={post.id} {...post} />
        })}
        <p>{props.posts.length} posts</p>
      </div>

    )
}

const mapStateToProps = (state) => {
  return {
    // posts: state.posts,
    // filters: state.filters
    posts: selectPosts(state.posts, state.filters)
  }
}

export default connect(mapStateToProps)(PostList)
