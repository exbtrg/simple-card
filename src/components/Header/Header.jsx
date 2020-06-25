import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Container,
  Slide,
} from '@material-ui/core'

import useStyles from './styles'

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

const Header = (props) => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar disableGutters>
            <Container maxWidth="lg" className={classes.wrapper}>
              <Box className={classes.box}>
                <Typography variant="h6" className={classes.spacing}>
                  Simple Cards
                </Typography>
              </Box>
              <Typography variant="h6">UserBar</Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  )
}

export default Header
