import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { added } from './routeNames'
import CardGrid from '../containers/CardGrid'
import GroupCard from '../containers/GroupCard'
import WordCard from '../containers/WordCard'
import filterWordByGroup from '../selectors/filterWordByGroup'

const AddedCards = ({ activeGroup, groups, words }) => {
  return (
    <>
      <Route
        path={added}
        render={() => <CardGrid cardList={groups} component={GroupCard} />}
        exact
      />

      <Route
        path={`${added}:id`}
        render={({ match }) => {
          //toDo need to process non-existing pages
          //this is temporary solution
          const { id } = match
          const existingId = groups.map(({ id }) => id)
          if (!existingId.includes(id)) {
            return null
          }
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
