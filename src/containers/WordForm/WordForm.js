import React from 'react'
import { connect } from 'react-redux'
import { addNewWord, editWordItem } from '../../redux/actions'
import WordForm from '../../components/WordForm'

const WordFormContainer = (props) => <WordForm {...props} />

const mapStateToProps = ({ activeGroup }) => ({ activeGroup })

const mapDispatchToProps = {
  addNewWord,
  editWordItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(WordFormContainer)
