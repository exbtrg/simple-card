import React from 'react'
import { withRouter } from 'react-router-dom'
import { func, array, node } from 'prop-types'
import { Grid, Container, Box, Button, Typography } from '@material-ui/core'
import AddCard from '../AddCard'
import { dataGroup } from '../../services/dummyData'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import GroupForm from '../GroupForm'

const CardGrid = ({ cardAddHandler, cardList, component, match, history }) => {
  const CardComponent = component
  const currentId = match.params.id
  const isWordsPage = currentId !== undefined

  return (
    <Container>
      <Box pt={{ xs: 4, sm: 6 }}>
        <Box mb={{ xs: 2, sm: 4 }}>
          <Grid container alignItems="center" justify="space-between">
            {isWordsPage ? (
              <>
                <Typography variant="h4" component="h2">
                  {dataGroup.find(({ url }) => url === currentId).title}
                </Typography>

                <Button
                  color="primary"
                  variant="contained"
                  onClick={history.goBack}
                >
                  <ArrowBackIcon />
                  {`    `}BACK
                </Button>
              </>
            ) : (
              <Typography variant="h4" component="h2">
                Words by Group
              </Typography>
            )}
          </Grid>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AddCard onClick={cardAddHandler}>
              {isWordsPage ? <GroupForm /> : <GroupForm />}
            </AddCard>
          </Grid>

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
}

export default withRouter(CardGrid)
