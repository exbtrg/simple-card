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
  addNewGroup,
  editGroupItem,
  handleClose,
  isCreate,
  itemData,
}) => {
  const classes = useStyles()
  const onSubmit = (values) => {
    handleClose()
    if (isCreate) {
      addNewGroup(createNewGroup(values))
    } else {
      const newValues = {
        id: itemData.id,
        ...values,
        url: titleToUrl(values.title),
      }
      editGroupItem(newValues)
    }
  }

  const getValidators = () => {
    if (isCreate) {
      return [required, titleValid, simpleMemoize(titleAvailable(groups))]
    } else {
      return [required, titleValid]
    }
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit} className={classes.form}>
            <Box pt={3}>
              <Typography variant="h6" gutterBottom>
                Created group words
              </Typography>
            </Box>

            <Box pt={3} mb={3}>
              <Field
                name="title"
                validate={composeValidators(...getValidators())}
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
  isCreate: true,
  itemData: {
    id: null,
    title: '',
    description: '',
  },
}

export default GroupForm
