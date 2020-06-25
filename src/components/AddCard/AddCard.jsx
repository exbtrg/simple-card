import React from 'react'
import { func } from 'prop-types'
import { Paper, ButtonBase } from '@material-ui/core'
import useStyles from './styles'
import AddCircleIcon from '@material-ui/icons/AddCircle'

export default function CardAdd({ onClick }) {
  const classes = useStyles()

  return (
    <ButtonBase onClick={onClick} className={classes.root}>
      <Paper className={classes.paper}>
        <AddCircleIcon fontSize="large" />
      </Paper>
    </ButtonBase>
  )
}

CardAdd.defaultProps = {
  onClick: () => {},
}

CardAdd.propTypes = {
  onClick: func,
}
