import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, shadows, spacing }) => {
  const fullSize = {
    width: '100%',
    height: '100%',
  }

  return createStyles({
    root: {
      ...fullSize,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paperModal: {
      backgroundColor: palette.background.paper,
      border: '2px solid #000',
      boxShadow: shadows[5],
      padding: spacing(2, 4, 3),
    },
  })
})

export default useStyles
