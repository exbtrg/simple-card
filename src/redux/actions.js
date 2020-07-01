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

const deleteGroupItem = (index) => ({
  type: actionTypes.DELETE_GROUP_ITEM,
  payload: index,
})

const editGroupItem = (obj) => ({
  type: actionTypes.EDIT_GROUP_ITEM,
  payload: obj,
})

const deleteWordItem = (index) => ({
  type: actionTypes.DELETE_WORD_ITEM,
  payload: index,
})

const editWordItem = (obj) => ({
  type: actionTypes.EDIT_WORD_ITEM,
  payload: obj,
})

export {
  setActiveGroup,
  addNewGroup,
  addNewWord,
  deleteGroupItem,
  editGroupItem,
  deleteWordItem,
  editWordItem,
}
