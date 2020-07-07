import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Container,
  Slide,
  Button,
  Grid,
} from '@material-ui/core'
import { added, learning } from '../../routes/routeNames'

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
  const { pathname } = useLocation()

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar disableGutters>
            <Container maxWidth="lg" className={classes.wrapper}>
              <Grid container wrap="nowrap" justify="space-between">
                <Box className={classes.box}>
                  <Typography variant="h6" className={classes.spacing}>
                    Simple Cards
                  </Typography>
                  <Box>
                    <Link
                      to={added}
                      className={clsx({
                        [classes.active]: pathname.includes(added),
                      })}
                    >
                      <Button
                        variant="contained"
                        className={clsx(classes.btn, classes.btnOne)}
                      >
                        Added words
                      </Button>
                    </Link>
                    <Link
                      to={learning}
                      className={clsx({
                        [classes.active]: pathname.includes(learning),
                      })}
                    >
                      <Button variant="contained" className={classes.btn}>
                        Learning words
                      </Button>
                    </Link>
                  </Box>
                </Box>
                <Typography variant="h6">UserBar</Typography>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  )
}

export default Header
