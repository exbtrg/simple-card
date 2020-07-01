import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import CardGrid from '../containers/CardGrid'
import GroupCard from '../containers/GroupCard'
import WordCard from '../containers/WordCard'
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

      <Route path="/" exact>
        <Redirect to="/added-cards/" />
      </Route>
    </>
  )
}

const mapStateToProps = ({ activeGroup, groups, words }) => ({
  activeGroup,
  groups,
  words,
})

export default connect(mapStateToProps)(AddedCards)
