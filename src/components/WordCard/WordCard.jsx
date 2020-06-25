import React from 'react'
import { Card, CardContent, Typography, Link } from '@material-ui/core'
import useStyles from './styles'

export default function WordCard({
  id,
  groupId,
  word,
  translate,
  status,
  countCycle,
  countRepeat,
  dateToContinue,
}) {
  const classes = useStyles()

  return (
    <Link href="#" underline="none">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {word}
          </Typography>

          <Typography variant="body2" component="p">
            {countCycle}
          </Typography>

          <Typography variant="body2" component="p">
            {countRepeat}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
