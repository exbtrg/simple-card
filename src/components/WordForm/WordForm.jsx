import React from 'react'
import { connect } from 'react-redux'
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
import createNewWord from '../../dataModel/createNewWord'
import required from '../../utils/validators/required'

const WordForm = ({ activeGroup, addNewWordHandler, setOpen }) => {
  const onSubmit = (values) => {
    setOpen(false)
    const groupId = activeGroup.id
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
                Created word
              </Typography>

              <Grid item xs={12} sm={6}>
                <Field name="word" validate={required}>
                  {({ input: { value, ...rest }, meta }) => (
                    <TextField
                      {...rest}
                      value={value}
                      placeholder="word"
                      fullWidth
                      autoComplete="off"
                      error={meta.error && meta.touched}
                      helperText={meta.touched && meta.error}
                    />
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
