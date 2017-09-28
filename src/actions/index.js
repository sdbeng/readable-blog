import uuid from 'uuid'
import moment from 'moment'
import axios from 'axios'

//define some constants
export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const SORT_BY_DATE = 'SORT_BY_DATE'
export const SORT_BY_VOTESCORE = 'SORT_BY_VOTESCORE'
export const INCREMENT_VOTESCORE = 'INCREMENT_VOTESCORE'
export const SET_TEXT_FILTER = 'SET_TEXT_FILTER'
//
export const CREATE_POST = 'CREATE_POST'


//action creators
export const fetchPostSuccess = (posts) => {
  return {
    type:FETCH_POSTS,
    posts
  }
}

//an alternative to addPost action - see which one is more convenient
// export const createPostSuccess = (post) => {
//   return {
//     type: CREATE_POST:
//     post
//   }
// }

export const fetchPosts = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:3001/posts',{ headers: { 'Authorization': '123react' }})
      .then(response => dispatch(fetchPostSuccess(response.data)))
  }
}
// export const fetchPosts = () => {
//   return (dispatch) => {
//     axios
//       .get('http://localhost:3001/posts',{ headers: { 'Authorization': '123react' }})
//       .then(res => dispatch({ type: FETCH_POSTS, payload: res.data }))
//   }
// }

//This action creator will create a new post in the server
export const addNewPost = (post) => {
  return (dispatch) => {
    return axios.posts('/posts', { headers: { 'Authorization': '123react' }}, post)
      .then(response => {
        dispatch(addPost(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

//destructuring values coming in from user, then attach them to the post object
export const addPost = ({title='',body='',author='',category='',timestamp= moment().format(), voteScore=1, deleted=false} = {}) => ({
  type: ADD_POST,
  post: {
    id: uuid(),
    title,
    body,
    timestamp,
    author,
    category,
    voteScore,
    deleted
  }
})

export const removePost = ({id} = {}) => ({
  type: REMOVE_POST,
  id
})

export const editPost = (id, updates) => ({
  type: EDIT_POST,
  id,
  updates
})

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})
export const sortByVoteScore = () => ({
  type: 'SORT_BY_VOTESCORE'
})

/* NOTE: create the case for the INCREMENT_VOTESCORE in the incrementVoteScore action creator */
//
