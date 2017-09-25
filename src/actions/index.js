import uuid from 'uuid'
import moment from 'moment'

//define some constants
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const SORT_BY_DATE = 'SORT_BY_DATE'
export const SORT_BY_VOTESCORE = 'SORT_BY_VOTESCORE'
export const INCREMENT_VOTESCORE = 'INCREMENT_VOTESCORE'
export const SET_TEXT_FILTER = 'SET_TEXT_FILTER'

//action creators
//destructuring values coming in from user, then attach them to the post object
export const addPost = ({title='Default Title',body='',author='Default Author',category='General',createdAt= 0, voteScore=1,deleted=false} = {}) => ({
  type: ADD_POST,
  post: {
    id: uuid(),
    title,
    body,
    createdAt,
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
