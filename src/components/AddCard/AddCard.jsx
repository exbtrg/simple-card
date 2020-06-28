import React from 'react'
import { node } from 'prop-types'
import { Paper, ButtonBase } from '@material-ui/core'
import useStyles from './styles'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

export default function AddCard({ component }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const Component = component

  return (
    <div className={classes.root}>
      <ButtonBase onClick={handleOpen} className={classes.button}>
        <Paper className={classes.paper}>
          <AddCircleIcon fontSize="large" />
        </Paper>
      </ButtonBase>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paperModal}>
            <Component setOpen={setOpen} />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

AddCard.propTypes = {
  children: node,
}
