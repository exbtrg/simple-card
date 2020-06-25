import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import CardGrid from '../components/CardGrid'
import GroupCard from '../components/GroupCard'
import WordCard from '../components/WordCard'
import { dataGroup, dataWord } from '../services/dummyData'
import filterWordByGroup from '../selectors/filterWordByGroup'

const AddedCards = () => {
  return (
    <>
      <Route
        path="/added-cards"
        render={() => <CardGrid cardList={dataGroup} component={GroupCard} />}
        exact
      />

      <Route
        path="/added-cards/:id"
        render={({ match }) => {
          const id = match.params.id

          return (
            <CardGrid
              cardList={filterWordByGroup(id, dataWord)}
              component={WordCard}
            />
          )
        }}
      />

      <Redirect to="/added-cards/" />
    </>
  )
}

export default AddedCards
