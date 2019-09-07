import * as React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import './index.css'
import App from './app'
import * as serviceWorker from './serviceWorker'
import counterReducer, { State as CounterState } from './containers/counter/reducer'
import counterSaga from './containers/counter/saga'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export type ApplicationRootState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const enhancers = [applyMiddleware(...middlewares)]

declare interface IWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}
declare const window: IWindow

const composeEnhancers =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const store = createStore(rootReducer, composeEnhancers(...enhancers))

const mountNode = document.getElementById('root') as HTMLElement

sagaMiddleware.run(counterSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
