import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { func, array, node } from 'prop-types'
import { Grid, Container, Box, Button, Typography } from '@material-ui/core'
import AddCard from '../AddCard'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import GroupForm from '../GroupForm'
import WordForm from '../WordForm'

const CardGrid = ({ cardList, groups, component, match, history }) => {
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
                  {groups.find(({ url }) => url === currentId).title}
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
            <AddCard component={isWordsPage ? WordForm : GroupForm} />
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

const mapStateToProps = ({ groups }) => ({ groups })

export default withRouter(connect(mapStateToProps)(CardGrid))
