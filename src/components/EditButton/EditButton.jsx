import React from 'react'
import { func } from 'prop-types'
import { ButtonBase } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import useStyles from './styles'

const DeliteButton = ({ handleOpen }) => {
  const classes = useStyles()

  return (
    <ButtonBase onClick={handleOpen}>
      <EditIcon className={classes.deleteIcon} />
    </ButtonBase>
  )
}

DeliteButton.propTypes = {
  handleOpen: func.isRequired,
}

export default DeliteButton
