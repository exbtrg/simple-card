import React from 'react'
import { Route } from 'react-router-dom'
import CardGrid from '../components/CardGrid'
import GroupCard from '../components/GroupCard'
import WordCard from '../components/WordCard'

const AddedCards = () => {
  return (
    <>
      <Route
        path="/added-cards"
        render={() => (
          <CardGrid
            cardList={[...new Array(8)]}
            component={GroupCard}
            shouldBeAddBtn
          />
        )}
      />

      <Route
        path="/added-cards/:id"
        render={() => (
          <CardGrid
            cardList={[...new Array(8)]}
            component={WordCard}
            shouldBeAddBtn
          />
        )}
      />
    </>
  )
}

export default AddedCards
