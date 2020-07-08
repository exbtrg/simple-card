import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { orange } from '@material-ui/core/colors'
import store from '../redux/store'
import Header from '../components/Header'

import AddedCards from '../routes/AddedCards'
import LearningWords from '../routes/LearningWords'

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    type: 'dark',
  },
})

const App = () => (
  <StoreProvider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        {console.log(theme)}

        <Header />

        <Box pt={{ xs: 8, sm: 6 }}>
          <AddedCards />
          <LearningWords />
        </Box>
      </ThemeProvider>
    </Router>
  </StoreProvider>
)

export default App
