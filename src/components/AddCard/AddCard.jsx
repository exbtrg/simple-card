import React from 'react'
import { node } from 'prop-types'
import { Paper, ButtonBase } from '@material-ui/core'
import useStyles from './styles'
import AddCircleIcon from '@material-ui/icons/AddCircle'

export default function AddCard({ handleOpen }) {
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
  children: node,
}
