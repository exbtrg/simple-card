import React from 'react'
import { Container, Box, Typography, Button } from '@material-ui/core'

const DeleteWarning = ({ deleteAction, handleClose }) => (
  <Container maxWidth="sm">
    <Box p={3}>
      <Box mb={6}>
        <Typography variant="h4" component="p">
          Are you sure?
        </Typography>
      </Box>
      <Button variant="contained" onClick={deleteAction}>
        Delite
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Cancel
      </Button>
    </Box>
  </Container>
)

export default DeleteWarning
