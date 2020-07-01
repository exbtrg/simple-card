import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette }) => {
  return createStyles({
    deleteIcon: {
      '&:hover': {
        color: palette.warning.dark,
      },
    },
  })
})

export default useStyles
