import { combineReducers } from 'redux'
import actionTypes from './actionTypes'

const deleteItemFromArray = (arr, id) => {
  const index = arr.findIndex((item) => item.id === id)
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

const activeGroup = (state, action) => {
  if (state === undefined) {
    return null
  }

  switch (action.type) {
    case actionTypes.SET_ACTIVE_GROUP:
      return action.payload

    default:
      return state
  }
}

const groups = (state, action) => {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case actionTypes.ADD_NEW_GROUP:
      return [...state, action.payload]

    case actionTypes.DELETE_ITEM_GROUP:
      return deleteItemFromArray(state, action.payload)

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

    case actionTypes.DELETE_ITEM_GROUP:
      const newState = state.filter(({ groupId }) => groupId !== action.payload)
      return newState

    default:
      return state
  }
}

const rootReducer = combineReducers({
  activeGroup,
  groups,
  words,
})

export default rootReducer
