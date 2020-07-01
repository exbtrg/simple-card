import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { func, array, object, elementType } from 'prop-types'
import { Grid, Container, Box, Button, Typography } from '@material-ui/core'
import Modal from '../Modal'
import AddCard from '../AddCard'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import GroupForm from '../../containers/GroupForm'
import WordForm from '../../containers/WordForm'

const CardGrid = ({
  cardList,
  component,
  setActiveGroup,
  activeGroup,
  match,
  history,
}) => {
  const CardComponent = component
  const isWordsPage = match.params.id !== undefined

  useEffect(() => {
    if (!isWordsPage) {
      setActiveGroup(null)
    }
  }, [isWordsPage, setActiveGroup])

  const backToGroupHandler = () => {
    history.goBack()
  }

  return (
    <Container>
      <Box pt={{ xs: 4, sm: 6 }}>
        <Box mb={{ xs: 2, sm: 4 }}>
          <Grid container alignItems="center" justify="space-between">
            {isWordsPage ? (
              <>
                <Typography variant="h4" component="h2">
                  {activeGroup.title}
                </Typography>

                <Button
                  color="primary"
                  variant="contained"
                  onClick={backToGroupHandler}
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
            <Modal
              openTrigerNode={AddCard}
              modalNode={isWordsPage ? WordForm : GroupForm}
            />
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
  cardList: array,
  component: elementType,
  setActiveGroup: func,
  activeGroup: object,
  match: object,
  history: object,
}

export default withRouter(CardGrid)
