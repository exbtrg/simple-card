import React from 'react'
import { Route } from 'react-router-dom'
import CardGrid from '../components/CardGrid'
import GroupCard from '../components/GroupCard'
import WordCard from '../components/WordCard'

const BaseCards = () => {
  return (
    <>
      <Route
        path="/base-cards"
        render={() => (
          <CardGrid
            cardList={[...new Array(8)]}
            component={GroupCard}
            shouldBeAddBtn={false}
          />
        )}
      />

      <Route
        path="/base-cards/:id"
        render={() => (
          <CardGrid
            cardList={[...new Array(8)]}
            component={WordCard}
            shouldBeAddBtn={false}
          />
        )}
      />
    </>
  )
}

export default BaseCards
