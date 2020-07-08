import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, shadows, spacing }) => {
  return createStyles({
    mb: {
      marginBottom: spacing(2),
    },
    buttons: {
      display: 'flex',
    },
    card: {
      minWidth: 275,
      width: '100%',
      minHeight: 148,
      '&:hover': {
        backgroundColor: `${palette.action.hover}`,
        boxShadow: `${shadows[5]}`,
      },
    },
    count: {
      '& span': {
        color: palette.success.dark,
        fontWeight: 'bold',
      },
    },
  })
})

export default useStyles
