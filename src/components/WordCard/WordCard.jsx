import React from 'react'
import { connect } from 'react-redux'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
} from '@material-ui/core'
import useStyles from './styles'
import { deleteWordItem } from '../../redux/actions'
import DeleteButton from '../DeleteButton'
import Modal from '../Modal'
import DeleteWarning from '../DeleteWarning'

const WordCard = ({
  id,
  groupId,
  word,
  translate,
  inContextOriginal,
  inContextTranslate,
  status,
  countCycle,
  countRepeat,
  dateToContinue,
  deleteWordItem,
}) => {
  const classes = useStyles()

  const DeleteDialog = (props) => (
    <DeleteWarning deleteAction={() => deleteWordItem(id)} {...props} />
  )

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="space-between" className={classes.headBox}>
          <Typography variant="h5" component="h2">
            {word}
          </Typography>

          <Box>
            <Modal openTrigerNode={DeleteButton} modalNode={DeleteDialog} />
          </Box>
        </Grid>

        <Typography className={classes.pos} color="textSecondary">
          {inContextOriginal}
        </Typography>

        <Grid container justify="space-between">
          <Box>
            <Typography variant="body2" component="p">
              {countCycle}
            </Typography>

            <Typography variant="body2" component="p">
              {countRepeat}
            </Typography>
          </Box>

          <Button
            type="button"
            color="primary"
            variant="contained"
            onClick={() => {}}
          >
            Open card
          </Button>
        </Grid>
      </CardContent>
    </Card>
  )
}

const mapDispatchToProps = {
  deleteWordItem,
}

export default connect(null, mapDispatchToProps)(WordCard)
