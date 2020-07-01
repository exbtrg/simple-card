import React from 'react'
import { func } from 'prop-types'
import { ButtonBase } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from './styles'

const DeliteButton = ({ handleOpen }) => {
  const classes = useStyles()

  return (
    <ButtonBase onClick={handleOpen}>
      <DeleteIcon className={classes.deleteIcon} />
    </ButtonBase>
  )
}

DeliteButton.propTypes = {
  handleOpen: func.isRequired,
}

export default DeliteButton
