import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
} from '@material-ui/core'

function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

const BreadCrumbs = (props) => {
  console.log(props)
  return (
    <Container>
      <Box pt={{ xs: 10, sm: 12 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
          </Link>
          <Link
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
          >
            Core
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
      </Box>
    </Container>
  )
}

export default withRouter(BreadCrumbs)
