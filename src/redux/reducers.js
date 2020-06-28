import { combineReducers } from 'redux'
import actionTypes from './actionTypes'

const groups = (state, action) => {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case actionTypes.ADD_NEW_GROUP:
      return [...state, action.payload]

    default:
      return state
  }
}

const words = (state, action) => {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case actionTypes.ADD_NEW_WORD:
      return [...state, action.payload]

    default:
      return state
  }
}

const rootReducer = combineReducers({
  groups,
  words,
})

export default rootReducer
