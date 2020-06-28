import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteItemFromGroup } from '../../redux/actions'
import {
  Card,
  CardContent,
  Typography,
  Link,
  ButtonBase,
  Box,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from './styles'

const GroupCard = ({
  id,
  title,
  url,
  description,
  complitedCount,
  progressCount,
  history,
  deleteItemFromGroup,
}) => {
  const classes = useStyles()

  const pageRoutingHandle = (e, url) => {
    e.preventDefault()
    history.push(url)
  }

  const deleteItemHandler = (e, id) => {
    e.stopPropagation()
    deleteItemFromGroup(id)
  }

  return (
    <Link href="#" underline="none" onClick={(e) => pageRoutingHandle(e, url)}>
      <Card className={classes.root}>
        <CardContent>
          <Box className={classes.headBox}>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>

            <ButtonBase onClick={(e) => deleteItemHandler(e, id)}>
              <DeleteIcon />
            </ButtonBase>
          </Box>

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

const mapDispatchToProps = {
  deleteItemFromGroup,
}

export default connect(null, mapDispatchToProps)(withRouter(GroupCard))
