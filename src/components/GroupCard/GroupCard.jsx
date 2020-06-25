import React from 'react'
import { withRouter } from 'react-router-dom'
import { Card, CardContent, Typography, Link } from '@material-ui/core'
import useStyles from './styles'

const GroupCard = ({
  id,
  title,
  description,
  complitedCount,
  progressCount,
  history,
}) => {
  const classes = useStyles()

  const pageRoutingHandle = (e, id) => {
    e.preventDefault()
    history.push(`${id}`)
  }

  return (
    <Link href="#" underline="none" onClick={(e) => pageRoutingHandle(e, id)}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            {description}
          </Typography>

          <Typography variant="body2" component="p">
            {complitedCount}
          </Typography>

          <Typography variant="body2" component="p">
            {progressCount}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default withRouter(GroupCard)
