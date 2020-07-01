import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, shadows }) => {
  return createStyles({
    root: {
      minWidth: 275,
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
