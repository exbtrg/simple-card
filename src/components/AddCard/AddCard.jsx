import React from 'react'
import { func } from 'prop-types'
import { Paper, ButtonBase } from '@material-ui/core'
import useStyles from './styles'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const AddCard = ({ handleOpen }) => {
  const classes = useStyles()

  return (
    <ButtonBase onClick={handleOpen} className={classes.button}>
      <Paper className={classes.paper}>
        <AddCircleIcon fontSize="large" />
      </Paper>
    </ButtonBase>
  )
}

AddCard.propTypes = {
  handleOpen: func,
}

export default AddCard
