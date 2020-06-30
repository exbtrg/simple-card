import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'
import { Form, Field } from 'react-final-form'
import { addNewWord } from '../../redux/actions'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const required = (value) => (value ? undefined : 'Required')
// const composeValidators = (...validators) => (value) =>
//   validators.reduce((error, validator) => error || validator(value), undefined)

const createNewWord = (
  groupId,
  { word, translate, imageUrl, inContextOriginal, inContextTranslate }
) => ({
  id: uuidv4(),
  groupId: groupId,
  word: word,
  translate: translate,
  imageUrl: imageUrl,
  inContextOriginal: inContextOriginal,
  inContextTranslate: inContextTranslate,
  status: 'progress',
  countCycle: 0,
  countRepeat: 0,
  dateToContinue: null,
})

const WordForm = ({ activeGroup, addNewWordHandler, setOpen }) => {
  const onSubmit = async (values) => {
    await sleep(300)
    setOpen(false)
    const groupId = activeGroup.id
    console.log(createNewWord(groupId, values))

    addNewWordHandler(createNewWord(groupId, values))
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, values }) => (
        <Container maxWidth="sm">
          <Grid container spacing={3}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" gutterBottom>
                Created group words
              </Typography>

              <Grid item xs={12} sm={6}>
                <Field name="word" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        placeholder="word"
                        fullWidth
                        autoComplete="off"
                        error={meta.error && meta.touched}
                        helperText={meta.touched && meta.error}
                      />
                    </>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field name="translate" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        placeholder="translate"
                        fullWidth
                        autoComplete="off"
                        error={meta.error && meta.touched}
                        helperText={meta.touched && meta.error}
                      />
                    </>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field name="imageUrl" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        placeholder="image url"
                        fullWidth
                        autoComplete="off"
                        error={meta.error && meta.touched}
                        helperText={meta.touched && meta.error}
                      />
                    </>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field name="inContextOriginal" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        placeholder="Word in context"
                        fullWidth
                        autoComplete="off"
                        error={meta.error && meta.touched}
                        helperText={meta.touched && meta.error}
                      />
                    </>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field name="inContextTranslate" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        placeholder="Word in context translate"
                        fullWidth
                        autoComplete="off"
                        error={meta.error && meta.touched}
                        helperText={meta.touched && meta.error}
                      />
                    </>
                  )}
                </Field>
              </Grid>

              <Box mt={4}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={submitting}
                >
                  Save
                </Button>
              </Box>

              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          </Grid>
        </Container>
      )}
    />
  )
}

const mapStateToProps = ({ activeGroup }) => ({ activeGroup })

const mapDispatchToProps = {
  addNewWordHandler: addNewWord,
}

export default connect(mapStateToProps, mapDispatchToProps)(WordForm)
