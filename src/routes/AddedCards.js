import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import CardGrid from '../components/CardGrid'
import GroupCard from '../components/GroupCard'
import WordCard from '../components/WordCard'
import filterWordByGroup from '../selectors/filterWordByGroup'

const AddedCards = ({ activeGroup, groups, words }) => {
  return (
    <>
      <Route
        path="/added-cards"
        render={() => <CardGrid cardList={groups} component={GroupCard} />}
        exact
      />

      <Route
        path="/added-cards/:id"
        render={() => {
          return (
            <CardGrid
              cardList={filterWordByGroup(activeGroup.id, words)}
              component={WordCard}
            />
          )
        }}
      />

      <Redirect to="/added-cards/" />
    </>
  )
}

const mapStateToProps = ({ activeGroup, groups, words }) => ({
  activeGroup,
  groups,
  words,
})

export default connect(mapStateToProps)(AddedCards)
