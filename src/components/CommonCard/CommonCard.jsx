import React from 'react'
import { oneOf, string, number, func, bool, elementType } from 'prop-types'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
} from '@material-ui/core'
import useStyles from './styles'
import DeleteButton from '../DeleteButton'
import EditButton from '../EditButton'
import Modal from '../Modal'
import DeleteWarning from '../DeleteWarning'

const CommonCard = ({
  type,
  id,
  title,
  firsCount,
  secondCount,
  isEditPage,
  EditDialog,
  deleteItem,
  onHandleClick,
}) => {
  const classes = useStyles()

  const textByType = {
    word: {
      firstCountLabel: 'Repeated:',
      secondCountLabel: 'Cycles completed:',
      buttonLabel: isEditPage ? 'Preview' : 'Go to learn',
    },
    group: {
      firstCountLabel: 'Complited:',
      secondCountLabel: 'Progress:',
      buttonLabel: 'Go to group',
    },
  }

  const DeleteDialog = (props) => (
    <DeleteWarning deleteAction={() => deleteItem(id)} {...props} />
  )

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
          <Typography variant="h5" component="h2" className={classes.mb}>
            {title}
          </Typography>
        </Grid>

        <Grid container className={classes.mb}>
          <Box mr={2}>
            <Typography variant="body1" component="p" className={classes.count}>
              {textByType[type].firstCountLabel} <span>{firsCount}</span>
            </Typography>
          </Box>

          <Typography variant="body1" component="p" className={classes.count}>
            {textByType[type].secondCountLabel} <span>{secondCount}</span>
          </Typography>
        </Grid>

        <Grid container justify="space-between" alignItems="center">
          {isEditPage && (
            <Box className={classes.buttons}>
              <Box mr={2}>
                <Modal openTrigerNode={EditButton} modalNode={EditDialog} />
              </Box>
              <Box>
                <Modal openTrigerNode={DeleteButton} modalNode={DeleteDialog} />
              </Box>
            </Box>
          )}

          <Button
            type="button"
            color="primary"
            variant="contained"
            onClick={onHandleClick}
          >
            {textByType[type].buttonLabel}
          </Button>
        </Grid>
      </CardContent>
    </Card>
  )
}

CommonCard.propTypes = {
  type: oneOf(['word', 'group']).isRequired,
  title: string,
  firsCount: number,
  secondCount: number,
  url: string,
  isEditPage: bool,
  EditDialog: elementType,
  deleteItem: func,
  onHandleClick: func,
}

export default CommonCard
