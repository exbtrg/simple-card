import React from 'react'
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Form, Field } from 'react-final-form'
import createNewWord from '../../dataModel/createNewWord'
import required from '../../utils/validators/required'

const useStyles = makeStyles({
  form: {
    minWidth: 190,
  },
  textField: {
    position: 'relative',
    '& > p': {
      position: 'absolute',
      bottom: -24,
    },
  },
})

const WordForm = ({
  activeGroup,
  type,
  addNewWord,
  editWordItem,
  itemData,
  handleClose,
}) => {
  const classes = useStyles()

  const {
    id,
    groupId,
    status,
    word,
    translate,
    imageUrl,
    inContextOriginal,
    inContextTranslate,
    countCycle,
    countRepeat,
    dateToContinue,
  } = itemData

  const mapping = {
    create: {
      title: 'Created word',
      submit(values) {
        handleClose()
        addNewWord(createNewWord(activeGroup.id, values))
      },
    },
    edit: {
      title: 'Edit word',
      submit(values) {
        handleClose()

        const newValues = {
          id: id,
          groupId: groupId,
          ...values,
          status: status,
          countCycle: countCycle,
          countRepeat: countRepeat,
          dateToContinue: dateToContinue,
        }
        editWordItem(newValues)
      },
    },
  }

  return (
    <Form
      onSubmit={mapping[type].submit}
      render={({ handleSubmit, submitting }) => (
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit} className={classes.form}>
            <Box pt={3}>
              <Typography variant="h6" gutterBottom>
                {mapping[type].title}
              </Typography>
            </Box>

            <Box pt={2} mb={2}>
              <Field name="word" validate={required} initialValue={word}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    className={classes.textField}
                    label="Word"
                    placeholder="Word"
                    fullWidth
                    autoComplete="off"
                    error={meta.error && meta.touched}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            </Box>

            <Box pt={2} mb={2}>
              <Field
                name="translate"
                validate={required}
                initialValue={translate}
              >
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    className={classes.textField}
                    placeholder="Translate"
                    label="Translate"
                    fullWidth
                    autoComplete="off"
                    error={meta.error && meta.touched}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            </Box>

            <Box pt={2} mb={2}>
              <Field
                name="imageUrl"
                validate={required}
                initialValue={imageUrl}
              >
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    placeholder="Image url"
                    label="Image url"
                    fullWidth
                    autoComplete="off"
                    error={meta.error && meta.touched}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            </Box>

            <Box pt={2} mb={2}>
              <Field
                name="inContextOriginal"
                validate={required}
                initialValue={inContextOriginal}
              >
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    className={classes.textField}
                    placeholder="Word in context"
                    label="Word in context"
                    fullWidth
                    autoComplete="off"
                    error={meta.error && meta.touched}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            </Box>

            <Field
              name="inContextTranslate"
              validate={required}
              initialValue={inContextTranslate}
            >
              {({ input, meta }) => (
                <TextField
                  {...input}
                  className={classes.textField}
                  placeholder="Word in context translate"
                  label="Word in context translate"
                  fullWidth
                  autoComplete="off"
                  error={meta.error && meta.touched}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>

            <Box mt={6} pb={3}>
              <Grid container justify="space-between">
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={submitting}
                >
                  Save
                </Button>
                <Button
                  type="button"
                  color="default"
                  variant="contained"
                  disabled={submitting}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Box>
          </form>
        </Container>
      )}
    />
  )
}

WordForm.defaultProps = {
  type: 'create',
  itemData: {
    id: null,
    groupId: null,
    status: 'progress',
    countCycle: 0,
    countRepeat: 0,
    dateToContinue: null,
  },
}

export default WordForm
