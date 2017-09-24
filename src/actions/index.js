import uuid from 'uuid'
import moment from 'moment'

//define some constants
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'

//action creators
//destructuring values coming in from user, then attach them to the post object
export const addPost = ({title='',body='',author='Asimov',category='science fiction',createdAt= moment().format('MMMM Do YYYY, h:mm:ss a'), voteScore=1,deleted=false} = {}) => ({
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
