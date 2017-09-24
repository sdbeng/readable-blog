import React from 'react'
import {Link} from 'react-router-dom'

const PostListItem = ({ id, title, body, author, createdAt, category, voteScore}) => (
  <div>
    {/* <Link to={}> */}
      <h3>{title}</h3>
    {/* </Link> */}
    <p>{body}</p>
    <p>{author} - {category}</p>
    <p>score: {voteScore}- date: {createdAt}</p>
  </div>
)

export default PostListItem
