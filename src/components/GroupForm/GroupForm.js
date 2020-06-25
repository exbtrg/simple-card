import React from 'react'
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'

export default function AddressForm() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h6" gutterBottom>
        Created group words
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            autoComplete="off"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
            autoComplete="off"
          />
        </Grid>

        <Box mt={4}>
          <Button type="submit" color="primary" variant="contained">
            Save
          </Button>
        </Box>
      </Grid>
    </Container>
  )
}
