import React from 'react'
import ReactDOM from 'react-dom'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import App from './index'

const mockStore = configureMockStore()

it('renders without crashing', () => {
  const div = document.createElement('div')
  const store = mockStore({ counter: { counterValue: 0, asyncTime: null } })
  const wrappedApp = (
    <Provider store={store}>
      <App />
    </Provider>
  )
  ReactDOM.render(<p />, div)
  ReactDOM.unmountComponentAtNode(div)
})
