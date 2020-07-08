import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ breakpoints, palette, shadows, spacing }) => {
  return createStyles({
    root: {
      height: '100%',
    },
    modal: {
      [breakpoints.down('sm')]: {
        padding: spacing(2),
      },
      [breakpoints.up('sm')]: {
        padding: spacing(8),
      },
      overflow: 'auto',
    },
    paperModal: {
      backgroundColor: palette.background.paper,
      border: '2px solid #000',
      boxShadow: shadows[5],
      padding: spacing(3),
      maxWidth: spacing(70),
      margin: '0 auto',
    },
  })
})

export default useStyles
