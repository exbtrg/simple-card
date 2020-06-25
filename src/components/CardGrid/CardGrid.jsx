import React from 'react'
import { func, array, node, bool } from 'prop-types'
import { Grid, Container, Box } from '@material-ui/core'
import AddCard from '../AddCard'

export default function CardGrid({
  cardAddHandler,
  cardList,
  component,
  shouldBeAddBtn,
}) {
  const CardComponent = component

  return (
    <Container>
      <Box pt={{ xs: 4, sm: 6 }}>
        <Grid container spacing={3}>
          {shouldBeAddBtn && (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <AddCard onClick={cardAddHandler} />
            </Grid>
          )}

          {cardList.map((data) => (
            <Grid key={data.id} item xs={12} sm={6} md={4} lg={3}>
              <CardComponent {...data} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

CardGrid.protoTypes = {
  cardAddHandler: func,
  cardList: array,
  component: node,
  shouldBeAddBtn: bool,
}

CardGrid.defaultProps = {
  shouldBeAddBtn: true,
}
