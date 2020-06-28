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
  CircularProgress,
} from '@material-ui/core'
import { Form, Field } from 'react-final-form'
import titleToUrl from '../../utils/titleToUrl'
import { addNewGroup } from '../../redux/actions'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const required = (value) => (value ? undefined : 'Required')
// const composeValidators = (...validators) => (value) =>
//   validators.reduce((error, validator) => error || validator(value), undefined)

const simpleMemoize = (fn) => {
  let lastArg
  let lastResult
  return (arg) => {
    if (arg !== lastArg) {
      lastArg = arg
      lastResult = fn(arg)
    }
    return lastResult
  }
}

const createNewGroup = ({ title, description }) => ({
  id: uuidv4(),
  title: title,
  url: titleToUrl(title),
  description: description,
  complitedCount: 0,
  progressCount: 0,
})

const AddressForm = ({ groups, addNewGroupHandler, setOpen }) => {
  const onSubmit = async (values) => {
    await sleep(300)
    setOpen(false)
    console.log(createNewGroup(values))

    addNewGroupHandler(createNewGroup(values))
  }

  const titleAvailable = simpleMemoize(async (value) => {
    if (!value) {
      return 'Required'
    }
    await sleep(400)
    if (~groups.indexOf(value && value.toLowerCase())) {
      return 'Title taken!'
    }
  })

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
                <Field name="title" validate={titleAvailable}>
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        placeholder="Title"
                        fullWidth
                        autoComplete="off"
                        error={meta.error && meta.touched}
                      />
                      {meta.validating && <CircularProgress />}
                    </>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field name="description" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        placeholder="Description"
                        fullWidth
                        autoComplete="off"
                        error={meta.error && meta.touched}
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

const mapStateToProps = ({ groups }) => ({ groups })

const mapDispatchToProps = {
  addNewGroupHandler: addNewGroup,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm)
