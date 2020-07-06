import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, shadows }) => {
  return createStyles({
    root: {
      width: '100%',
    },
    headBox: {
      display: 'flex',
      justifyContent: 'space-between',
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
    textBox: {
      textAlign: 'left',
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
