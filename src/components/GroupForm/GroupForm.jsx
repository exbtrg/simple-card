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
import createNewGroup from '../../dataModel/createNewGroup'
import composeValidators from '../../utils/validators/composeValidators'
import required from '../../utils/validators/required'
import titleAvailable from '../../utils/validators/titleAvailable'
import titleValid from '../../utils/validators/titleValid'
import simpleMemoize from '../../utils/simpleMemoize'
import titleToUrl from '../../utils/titleToUrl'
import { addNewGroup, editItemInGroup } from '../../redux/actions'

const GroupForm = ({
  groups,
  addNewGroupHandler,
  editItemGroupHandler,
  handleClose,
  isCreate,
  itemData,
}) => {
  const onSubmit = (values) => {
    handleClose()
    if (isCreate) {
      addNewGroupHandler(createNewGroup(values))
    } else {
      const newValues = {
        id: itemData.id,
        ...values,
        url: titleToUrl(values.title),
      }
      editItemGroupHandler(newValues)
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
                  validate={composeValidators(...getValidators())}
                  initialValue={itemData.title}
                >
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      placeholder="Title"
                      fullWidth
                      autoComplete="off"
                      error={meta.error && meta.touched}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  name="description"
                  validate={required}
                  initialValue={itemData.description}
                >
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

GroupForm.defaultProps = {
  isCreate: true,
  itemData: {
    id: null,
    title: '',
    description: '',
  },
}

const mapStateToProps = ({ groups }) => ({ groups })

const mapDispatchToProps = {
  addNewGroupHandler: addNewGroup,
  editItemGroupHandler: editItemInGroup,
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm)
