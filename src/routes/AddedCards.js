import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import CardGrid from '../components/CardGrid'
import GroupCard from '../components/GroupCard'
import WordCard from '../components/WordCard'
// import { dataGroup, dataWord } from '../services/dummyData'
import filterWordByGroup from '../selectors/filterWordByGroup'

const AddedCards = ({ groups, words }) => {
  return (
    <>
      <Route
        path="/added-cards"
        render={() => <CardGrid cardList={groups} component={GroupCard} />}
        exact
      />

      <Route
        path="/added-cards/:id"
        render={({ match }) => {
          const id = match.params.id

          return (
            <CardGrid
              cardList={filterWordByGroup(id, words)}
              component={WordCard}
            />
          )
        }}
      />

      <Redirect to="/added-cards/" />
    </>
  )
}

const mapStateToProps = ({ groups, words }) => ({ groups, words })

export default connect(mapStateToProps)(AddedCards)
