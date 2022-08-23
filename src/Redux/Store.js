import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { RootReducer } from './reducer/RootReducer'

import { RootSaga } from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const Middleware = [thunk, sagaMiddleware]

export const store = createStore(
  RootReducer,
  applyMiddleware(...Middleware)
)

sagaMiddleware.run(RootSaga)
