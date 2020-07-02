import React, { useState } from 'react'
import { elementType } from 'prop-types'
import { Modal, Backdrop, Fade } from '@material-ui/core'
import useStyles from './styles'

const ModalPopup = ({ openTrigerNode, modalNode }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const OpenTrigerNode = openTrigerNode
  const ModalNode = modalNode

  return (
    <div className={classes.root}>
      <OpenTrigerNode handleOpen={handleOpen} />

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
          <div p={3} className={classes.paperModal}>
            <ModalNode handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

ModalPopup.propTypes = {
  openTrigerNode: elementType,
  modalNode: elementType,
}

export default ModalPopup
