import React from 'react'
import { Card, CardContent, Typography, Link } from '@material-ui/core'
import useStyles from './styles'

export default function SimpleCard() {
  const classes = useStyles()

  return (
    <Link href="#" underline="none">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Title Card
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Typography>

          <Typography variant="body2" component="p">
            Done 20
          </Typography>

          <Typography variant="body2" component="p">
            In progress 30
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
