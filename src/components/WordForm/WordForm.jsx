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

const WordForm = ({ activeGroup, addNewWordHandler, handleClose }) => {
  const classes = useStyles()
  const onSubmit = (values) => {
    handleClose()
    const groupId = activeGroup.id
    addNewWordHandler(createNewWord(groupId, values))
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit} className={classes.form}>
            <Box pt={3}>
              <Typography variant="h6" gutterBottom>
                Created word
              </Typography>
            </Box>

            <Box pt={2} mb={2}>
              <Field name="word" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    className={classes.textField}
                    placeholder="word"
                    fullWidth
                    autoComplete="off"
                    error={meta.error && meta.touched}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            </Box>

            <Box pt={2} mb={2}>
              <Field name="translate" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    className={classes.textField}
                    placeholder="translate"
                    fullWidth
                    autoComplete="off"
                    error={meta.error && meta.touched}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            </Box>

            <Box pt={2} mb={2}>
              <Field name="imageUrl" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    placeholder="image url"
                    fullWidth
                    autoComplete="off"
                    error={meta.error && meta.touched}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            </Box>

            <Box pt={2} mb={2}>
              <Field name="inContextOriginal" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    className={classes.textField}
                    placeholder="Word in context"
                    fullWidth
                    autoComplete="off"
                    error={meta.error && meta.touched}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            </Box>

            <Field name="inContextTranslate" validate={required}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  className={classes.textField}
                  placeholder="Word in context translate"
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

export default WordForm
