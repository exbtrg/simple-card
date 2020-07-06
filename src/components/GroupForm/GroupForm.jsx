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
import createNewGroup from '../../dataModel/createNewGroup'
import composeValidators from '../../utils/validators/composeValidators'
import required from '../../utils/validators/required'
import titleAvailable from '../../utils/validators/titleAvailable'
import titleValid from '../../utils/validators/titleValid'
import simpleMemoize from '../../utils/simpleMemoize'
import titleToUrl from '../../utils/titleToUrl'

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

const GroupForm = ({
  groups,
  type,
  itemData,
  addNewGroup,
  editGroupItem,
  handleClose,
}) => {
  const classes = useStyles()

  const mapping = {
    create: {
      title: 'Created group words',
      submit(values) {
        handleClose()
        addNewGroup(createNewGroup(values))
      },
      validators: composeValidators(
        required,
        titleValid,
        simpleMemoize(titleAvailable(groups))
      ),
    },
    edit: {
      title: 'Edit group words',
      submit(values) {
        handleClose()
        const newValues = {
          id: itemData.id,
          ...values,
          url: titleToUrl(values.title),
        }
        editGroupItem(newValues)
      },
      validators: composeValidators(required, titleValid),
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

            <Box pt={3} mb={3}>
              <Field
                name="title"
                validate={mapping[type].validators}
                initialValue={itemData.title}
              >
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    className={classes.textField}
                    placeholder="Title"
                    fullWidth
                    autoComplete="off"
                    error={meta.error && meta.touched}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            </Box>

            <Field
              name="description"
              validate={required}
              initialValue={itemData.description}
            >
              {({ input, meta }) => (
                <TextField
                  {...input}
                  className={classes.textField}
                  placeholder="Description"
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

GroupForm.defaultProps = {
  type: 'create',
  itemData: {
    id: null,
    title: '',
    description: '',
  },
}

export default GroupForm
