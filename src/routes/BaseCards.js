import React from 'react'
import { Route } from 'react-router-dom'
import CardGrid from '../components/CardGrid'
import GroupCard from '../components/GroupCard'
import WordCard from '../components/WordCard'
import { dataGroup, dataWord } from '../services/dummyData'
import filterWordByGroup from '../selectors/filterWordByGroup'

const BaseCards = () => {
  return (
    <>
      <Route
        path="/base-cards"
        render={() => (
          <CardGrid
            cardList={dataGroup}
            component={GroupCard}
            shouldBeAddBtn={false}
          />
        )}
        exact
      />

      <Route
        path="/base-cards/:id"
        render={({ match }) => {
          const id = match.params.id

          return (
            <CardGrid
              cardList={filterWordByGroup(id, dataWord)}
              component={WordCard}
              shouldBeAddBtn={false}
            />
          )
        }}
      />
    </>
  )
}

export default BaseCards
