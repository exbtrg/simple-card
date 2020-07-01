import React from 'react'
import { connect } from 'react-redux'
import { addNewGroup, editGroupItem } from '../../redux/actions'
import GroupForm from '../../components/GroupForm'

const GroupFormContainer = (props) => <GroupForm {...props} />

const mapStateToProps = ({ groups }) => ({ groups })

const mapDispatchToProps = {
  addNewGroup,
  editGroupItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupFormContainer)
