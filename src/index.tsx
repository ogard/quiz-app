import * as React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import './styles/index.css'
import * as serviceWorker from './serviceWorker'

import appReducer from './containers/app/reducer'
import appSaga from './containers/app/saga'
import App from './containers/app'

import counterReducer from './containers/counter/reducer'
import counterSaga from './containers/counter/saga'

import homeScreenReducer from './containers/home-screen/reducer'
import homeScreenSaga from './containers/home-screen/saga'

import quizScreenReducer from './containers/quiz-screen/reducer'

const rootReducer = combineReducers({
  app: appReducer,
  counter: counterReducer,
  homeScreen: homeScreenReducer,
  quizScreen: quizScreenReducer,
})

function* rootSaga() {
  yield all([appSaga(), counterSaga(), homeScreenSaga()])
}

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

sagaMiddleware.run(rootSaga)

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
