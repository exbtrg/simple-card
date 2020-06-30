import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, shadows }) => {
  const fullSize = {
    width: '100%',
    height: '100%',
  }

  return createStyles({
    button: {
      ...fullSize,
      minHeight: 148,
      '&:hover': {
        backgroundColor: `${palette.action.hover}`,
        boxShadow: `${shadows[5]}`,
        '& svg': {
          fill: `${palette.success.dark}`,
        },
      },
    },
    paper: {
      ...fullSize,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
})

export default useStyles
