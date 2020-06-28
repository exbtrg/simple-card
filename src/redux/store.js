import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const isDevMode = process.env.NODE_ENV === 'development'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const middleWares = [thunk]

const devExtensions = () => {
  if (isDevMode) {
    middleWares.push(logger)
    return composeEnhancers(applyMiddleware(...middleWares))
  }
  return applyMiddleware(...middleWares)
}

const preloadedState = JSON.parse(localStorage.getItem('dictionary'))

const store = preloadedState
  ? createStore(rootReducer, preloadedState, devExtensions())
  : createStore(rootReducer, devExtensions())

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('dictionary', JSON.stringify(state))
})

export default store
