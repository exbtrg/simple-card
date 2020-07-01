import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteItemFromGroup, setActiveGroup } from '../../redux/actions'
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
import GroupForm from '../GroupForm'
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
  deleteItemFromGroup,
  setActiveGroup,
}) => {
  const classes = useStyles()
  const itemData = { id, title, description }

  const pageRoutingHandler = (url) => {
    history.push(url)
    setActiveGroup({ id, url, title })
  }

  const deleteItemHandler = (id) => {
    deleteItemFromGroup(id)
  }

  const DeleteDialog = (props) => (
    <DeleteWarning deleteAction={() => deleteItemHandler(id)} {...props} />
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

          <Box>
            <Modal openTrigerNode={EditButton} modalNode={EditDialog} />
            <Modal openTrigerNode={DeleteButton} modalNode={DeleteDialog} />
          </Box>
        </Grid>

        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>

        <Grid container justify="space-between">
          <Box>
            <Typography variant="body2" component="p">
              {complitedCount}
            </Typography>

            <Typography variant="body2" component="p">
              {progressCount}
            </Typography>
          </Box>

          <Button
            type="submit"
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

const mapDispatchToProps = {
  deleteItemFromGroup,
  setActiveGroup,
}

export default connect(null, mapDispatchToProps)(withRouter(GroupCard))
