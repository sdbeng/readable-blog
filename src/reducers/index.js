import {FETCH_POSTS, ADD_POST, REMOVE_POST, EDIT_POST,SET_TEXT_FILTER,SORT_BY_DATE,SORT_BY_VOTESCORE,
SELECT_CATEGORY, REFRESH_CATEGORY, REQUEST_POSTS, RECEIVED_POSTS } from '../actions'
import moment from 'moment'
import {combineReducers} from 'redux'

//categories reducer
const selectedCategory = (state='react', action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category
    default:
      return state
  }
}
//posts reducer
const postsDefaultState = {isFetching: false, didRefresh: false, items: []}

const posts = (state=postsDefaultState, action) => {
  console.log('log actions: ', action);
  switch(action.type){
    case REFRESH_CATEGORY:
    return {
      ...state,
      didRefresh: true
    }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didRefresh: false
      }
      case RECEIVED_POSTS:
        return {
          ...state,
          isFetching: false,
          didRefresh: false,
          items: action.posts
        }
    default:
      return state
  }
}

//post by category
const postsByCategory = (state = {}, action) => {
  switch (action.type) {
    case REFRESH_CATEGORY:
    case RECEIVED_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.category]: posts(state[action.category], action)
      }
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
          }else {
            return post
          }
        })
    default:
      return state
  }
}

//Filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy:'date'
}

//use SET_TEXT_FILTER to implement a filtered search - if have time

const filtersReducer = (state=filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      }
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date'
      }
    case SORT_BY_VOTESCORE:
      return {
        ...state,
        sortBy: 'voteScore'
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedCategory,
  postsByCategory,
})

export default rootReducer
