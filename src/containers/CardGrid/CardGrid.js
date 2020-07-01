import React from 'react'
import { connect } from 'react-redux'
import { setActiveGroup } from '../../redux/actions'
import CardGrid from '../../components/CardGrid'

const CardGridContainer = (props) => <CardGrid {...props} />

const mapStateToProps = ({ activeGroup }) => ({ activeGroup })

const mapDispatchToProps = {
  setActiveGroup,
}

export default connect(mapStateToProps, mapDispatchToProps)(CardGridContainer)
