import {ADD_POST, REMOVE_POST, EDIT_POST } from '../actions'
import moment from 'moment'

//demo data

const demoState = {
  posts: [{
    id: 'ihweoehorh8f48fh48', //later it will be from uuid later
    title: 'React is awesome', //later will be coming from an user <input>
    body: 'You can build complex apps using React - Redux',
    createdAt: 0, //it will be generated from moment or Date.now()
    author: 'Francis Hope',//later will be coming from an user <input>
    category: 'react', //for now, it will be one of the defined categories from api
    voteScore: 1, //votes post received, default =1
    deleted: false, //flag if post has been deleted, default=false
  }],
  comments: [{
    id: '4gt5itihjkhg8', //later it will be from uuid later
    parentId: 0, //id of parent post ??
    createdAt: 0, //it will be generated from moment or Date.now()
    body: 'In my opinion I say Redux is...',
    author: 'Alan Touring',//later will be coming from an user <input>
    voteScore: 1, //votes comment received, default =1
    deleted: false, //flag if post has been deleted, default=false
    parentDeleted: false, //flag for when the parent post has been deleted, not the comment
  }],
  filters: {
    sortBy: 'date', //date or voteScore
  }
}

//Posts reducer
const postsReducerDefaultState = []

export const postsReducer = (state=postsReducerDefaultState, action) => {
  switch(action.type){
    case ADD_POST:
      return [
        ...state,
        action.post
      ]
    case REMOVE_POST:
      return state.filter(({ id }) => {
        return id !== action.id
      })
    case EDIT_POST:
      return state.map((post) => {
        if(post.id === action.id) {
          return {
            ...post,
            ...action.updates
          }
        }
      })
    default:
      return state
  }
}
