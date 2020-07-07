import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing, shadows, palette }) => {
  const flexCenter = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const activeStyle = {
    pointerEvents: 'none',
    '& button': {
      boxShadow: shadows[0],
      backgroundColor: palette.success.dark,
    },
  }

  return {
    wrapper: {
      ...flexCenter,
      '& a': {
        textDecoration: 'none',
      },
    },
    box: {
      ...flexCenter,
    },
    spacing: {
      marginRight: spacing(3),
    },
    active: {
      ...activeStyle,
      cursor: 'default',
      '&:hover': {
        ...activeStyle,
      },
    },
    btn: {
      boxShadow: 'none',
    },
    btnOne: {
      marginRight: spacing(2),
    },
  }
})

export default useStyles
