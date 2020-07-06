import React from 'react'
import { connect } from 'react-redux'
import { deleteWordItem, editWordItem } from '../../redux/actions'
import WordCard from '../../components/WordCard'

const WordCardContainer = (props) => <WordCard {...props} />

const mapDispatchToProps = {
  deleteWordItem,
  editWordItem,
}

export default connect(null, mapDispatchToProps)(WordCardContainer)
