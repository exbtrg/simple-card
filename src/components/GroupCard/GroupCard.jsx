import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
} from '@material-ui/core'
import DeleteButton from '../DeleteButton'
import EditButton from '../EditButton'
import Modal from '../Modal'
import GroupForm from '../../containers/GroupForm'
import DeleteWarning from '../DeleteWarning'
import useStyles from './styles'

const GroupCard = ({
  id,
  title,
  url,
  description,
  complitedCount,
  progressCount,
  history,
  deleteGroupItem,
  setActiveGroup,
}) => {
  const classes = useStyles()
  const itemData = { id, title, description }

  const pageRoutingHandler = (url) => {
    history.push(url)
    setActiveGroup({ id, url, title })
  }

  const DeleteDialog = (props) => (
    <DeleteWarning deleteAction={() => deleteGroupItem(id)} {...props} />
  )

  const EditDialog = (props) => (
    <GroupForm isCreate={false} itemData={itemData} {...props} />
  )

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="space-between" className={classes.headBox}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>

          <Box className={classes.buttons}>
            <Box mr={2}>
              <Modal openTrigerNode={EditButton} modalNode={EditDialog} />
            </Box>
            <Box>
              <Modal openTrigerNode={DeleteButton} modalNode={DeleteDialog} />
            </Box>
          </Box>
        </Grid>

        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>

        <Grid container justify="space-between">
          <Box>
            <Typography variant="body2" component="p">
              Complited: {complitedCount}
            </Typography>

            <Typography variant="body2" component="p">
              Progress: {progressCount}
            </Typography>
          </Box>

          <Button
            type="button"
            color="primary"
            variant="contained"
            onClick={() => pageRoutingHandler(url)}
          >
            Go to group
          </Button>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default withRouter(GroupCard)
