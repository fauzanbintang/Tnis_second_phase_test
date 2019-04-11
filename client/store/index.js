import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// reducers
import user from './reducers/user'

const store = createStore(
  combineReducers({ user }),
  applyMiddleware(thunk))

export default store
