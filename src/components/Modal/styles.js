import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, shadows, spacing }) => {
  return createStyles({
    root: {
      height: '100%',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'auto',
    },
    paperModal: {
      backgroundColor: palette.background.paper,
      border: '2px solid #000',
      boxShadow: shadows[5],
      padding: spacing(3),
    },
  })
})

export default useStyles
