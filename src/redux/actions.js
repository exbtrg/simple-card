import actionTypes from './actionTypes'

const setActiveGroup = (obj) => ({
  type: actionTypes.SET_ACTIVE_GROUP,
  payload: obj,
})

const addNewGroup = (newItem) => ({
  type: actionTypes.ADD_NEW_GROUP,
  payload: newItem,
})

const addNewWord = (newItem) => ({
  type: actionTypes.ADD_NEW_WORD,
  payload: newItem,
})

const deleteItemFromGroup = (index) => ({
  type: actionTypes.DELETE_ITEM_GROUP,
  payload: index,
})

export { addNewGroup, addNewWord, deleteItemFromGroup, setActiveGroup }
