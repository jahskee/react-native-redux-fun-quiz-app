import {combineReducers} from 'redux'

import {
  UPDATE_CATEGORIES, 
  UPDATE_QUIZ,
  UPDATE_TIMER,
  UPDATE_STATE,
} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_QUIZ:
      return merge(state, action.payload)
    case UPDATE_CATEGORIES:
      return merge(state, {categories: action.payload})
    default:
      return state
  }
}

const categoriesReducer = (state = [], action) => {
  if (action.type === UPDATE_CATEGORIES) return [...state, ...action.payload]
  return state
}

const quizReducer = (state = {}, action) => {
  if (action.type === UPDATE_QUIZ) return merge(state, action.payload)
  return state 
}

const timerReducer = (state = {}, action) => {
  if (action.type === UPDATE_TIMER) return merge(state, action.payload)
  return state
}

const stateReducer = (state = {}, action) => {
  if (action.type === UPDATE_STATE) return merge(state, action.payload)
  return state
}


const reducer = combineReducers({
  categories: categoriesReducer,
  quiz: quizReducer, 
  timer: timerReducer,
  state: stateReducer, 

})

export default reducer