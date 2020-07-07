import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { learning } from './routeNames'
import filterWordByGroup from '../selectors/filterWordByGroup'
import CardGrid from '../containers/CardGrid'
import WordCard from '../containers/WordCard'
import GroupCard from '../containers/GroupCard'

const AddedCards = ({ activeGroup, groups, words }) => {
  return (
    <>
      <Route
        path={learning}
        render={() => <CardGrid cardList={groups} component={GroupCard} />}
        exact
      />

      <Route
        path={`${learning}:id`}
        render={() => {
          return (
            <CardGrid
              cardList={filterWordByGroup(activeGroup.id, words)}
              component={WordCard}
            />
          )
        }}
      />
    </>
  )
}

const mapStateToProps = ({ activeGroup, groups, words }) => ({
  activeGroup,
  groups,
  words,
})

export default connect(mapStateToProps)(AddedCards)
