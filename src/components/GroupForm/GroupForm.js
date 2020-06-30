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
import composeValidators from '../../utils/validators/composeValidators'
import required from '../../utils/validators/required'
import titleAvailable from '../../utils/validators/titleAvailable'
import titleValid from '../../utils/validators/titleValid'
import titleToUrl from '../../utils/titleToUrl'
import simpleMemoize from '../../utils/simpleMemoize'
import { addNewGroup } from '../../redux/actions'

const createNewGroup = ({ title, description }) => ({
  id: uuidv4(),
  title: title,
  url: titleToUrl(title),
  description: description,
  complitedCount: 0,
  progressCount: 0,
})

const GroupForm = ({ groups, addNewGroupHandler, setOpen }) => {
  const onSubmit = (values) => {
    setOpen(false)
    addNewGroupHandler(createNewGroup(values))
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
                <Field
                  name="title"
                  validate={composeValidators(
                    required,
                    titleValid,
                    simpleMemoize(titleAvailable(groups))
                  )}
                >
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        placeholder="Title"
                        fullWidth
                        autoComplete="off"
                        error={meta.error && meta.touched}
                        helperText={meta.touched && meta.error}
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

const mapStateToProps = ({ groups }) => ({ groups })

const mapDispatchToProps = {
  addNewGroupHandler: addNewGroup,
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm)
