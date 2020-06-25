import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumbs'

import AddedCards from '../routes/AddedCards'
import BaseCard from '../routes/BaseCards'

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

      <BreadCrumb />

      <AddedCards />

      <BaseCard />
    </ThemeProvider>
  </Router>
)

export default App
