import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ breakpoints, spacing, shadows, palette }) => {
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
    root: {
      minHeight: 64,
    },
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
    btnText: {
      display: 'none',
      [breakpoints.up('sm')]: {
        display: 'inline',
      },
    },
    icon: {
      [breakpoints.up('sm')]: {
        marginRight: spacing(2),
      },
    },
  }
})

export default useStyles
