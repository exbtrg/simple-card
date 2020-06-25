import React from 'react'
import cn from 'clsx'
import { Link as RouterLink, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Box,
  Button,
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
  const routesUrl = {
    added: '/added-cards/',
    base: '/base-cards/',
  }

  const classes = useStyles()
  const {
    location: { pathname },
  } = props

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar disableGutters>
            <Container maxWidth="lg" className={classes.wrapper}>
              <Box className={classes.box}>
                <Typography variant="h6" className={classes.spacing}>
                  Scroll to Hide App Bar
                </Typography>

                <RouterLink to={routesUrl.added}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={cn(classes.spacing, {
                      [classes.active]: pathname.search(routesUrl.added) >= 0,
                    })}
                  >
                    Added Cards
                  </Button>
                </RouterLink>

                <RouterLink to={routesUrl.base}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={cn({
                      [classes.active]: pathname.search(routesUrl.base) >= 0,
                    })}
                  >
                    Base Cards
                  </Button>
                </RouterLink>
              </Box>

              <Typography variant="h6">UserBar</Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  )
}

export default withRouter(Header)
