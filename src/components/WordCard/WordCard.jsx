import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Link,
  Box,
} from '@material-ui/core'
import useStyles from './styles'

const WordCard = ({ id, word, countCycle, countRepeat }) => {
  const classes = useStyles()

  return (
    <Link href="#" underline="none">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            {word}
          </Typography>

          <Grid container justify="space-between">
            <Box pt={3}>
              <Typography
                variant="body1"
                component="p"
                className={classes.count}
              >
                Repeated: <span>{countRepeat}</span>
              </Typography>

              <Typography
                variant="body1"
                component="p"
                className={classes.count}
              >
                Cycles completed: <span>{countCycle}</span>
              </Typography>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  )
}

export default WordCard
