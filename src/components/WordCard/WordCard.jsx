import React from 'react'
import { Card, CardContent, Typography, Grid, Box } from '@material-ui/core'
import useStyles from './styles'
import Modal from '../Modal'
import DeleteButton from '../DeleteButton'
import EditButton from '../EditButton'
import WordForm from '../../containers/WordForm'
import DeleteWarning from '../DeleteWarning'

const WordCard = ({
  id,
  groupId,
  word,
  translate,
  imageUrl,
  inContextOriginal,
  inContextTranslate,
  status,
  countCycle,
  countRepeat,
  dateToContinue,
  deleteWordItem,
}) => {
  const classes = useStyles()

  const itemData = {
    id,
    groupId,
    word,
    translate,
    imageUrl,
    inContextOriginal,
    inContextTranslate,
    status,
    countCycle,
    countRepeat,
    dateToContinue,
  }

  const DeleteDialog = (props) => (
    <DeleteWarning deleteAction={() => deleteWordItem(id)} {...props} />
  )

  const EditDialog = (props) => (
    <WordForm type="edit" itemData={itemData} {...props} />
  )

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container justify="space-between" className={classes.headBox}>
          <Typography variant="h5" component="h2" align="center">
            {word}
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

        <Grid container justify="space-between" className={classes.textBox}>
          <Box pt={3}>
            <Typography variant="body1" component="p" className={classes.count}>
              Repeated: <span>{countRepeat}</span>
            </Typography>

            <Typography variant="body1" component="p" className={classes.count}>
              Cycles completed: <span>{countCycle}</span>
            </Typography>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default WordCard
