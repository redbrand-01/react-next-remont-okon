import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { app } from './reduser/app'

const rootReducer = combineReducers({
  app
})

export const initializeStore = (initialState) => {
  return createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)))
}