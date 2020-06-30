import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette }) => {
  return createStyles({
    root: {
      minWidth: 275,
    },
    headBox: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    deleteIcon: {
      '&:hover': {
        color: palette.warning.dark,
      },
    },
  })
})

export default useStyles
