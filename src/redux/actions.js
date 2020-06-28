import actionTypes from './actionTypes'

const addNewGroup = (newItem) => ({
  type: actionTypes.ADD_NEW_GROUP,
  payload: newItem,
})

const addNewWord = (newItem) => ({
  type: actionTypes.ADD_NEW_WORD,
  payload: newItem,
})

export { addNewGroup, addNewWord }
