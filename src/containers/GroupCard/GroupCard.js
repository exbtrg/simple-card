import React from 'react'
import { connect } from 'react-redux'
import { setActiveGroup, deleteGroupItem } from '../../redux/actions'
import GroupCard from '../../components/GroupCard'

const GroupCardContainer = (props) => <GroupCard {...props} />

const mapDispatchToProps = {
  deleteGroupItem,
  setActiveGroup,
}

export default connect(null, mapDispatchToProps)(GroupCardContainer)
