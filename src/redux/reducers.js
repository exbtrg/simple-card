import { combineReducers } from 'redux'
import actionTypes from './actionTypes'

const getIndex = (arr, id) => arr.findIndex((item) => item.id === id)

const deleteItemFromArray = (arr, id) => {
  const index = getIndex(arr, id)
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

const editItemInArray = (arr, payload) => {
  const { id, ...newData } = payload
  const index = getIndex(arr, id)
  const newItem = {
    ...arr[index],
    ...newData,
  }

  return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)]
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

    case actionTypes.DELETE_GROUP_ITEM:
      return deleteItemFromArray(state, action.payload)

    case actionTypes.EDIT_GROUP_ITEM:
      return editItemInArray(state, action.payload)

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

    case actionTypes.DELETE_GROUP_ITEM:
      return state.filter(({ groupId }) => groupId !== action.payload)

    case actionTypes.DELETE_WORD_ITEM:
      return deleteItemFromArray(state, action.payload)

    case actionTypes.EDIT_WORD_ITEM:
      return editItemInArray(state, action.payload)

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
