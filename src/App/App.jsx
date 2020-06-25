import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { orange } from '@material-ui/core/colors'
import Header from '../components/Header'

import AddedCards from '../routes/AddedCards'

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    type: 'dark',
  },
})

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      {console.log(theme)}

      <Header />

      <Box pt={{ xs: 4, sm: 6 }}>
        <AddedCards />
      </Box>
    </ThemeProvider>
  </Router>
)

export default App
