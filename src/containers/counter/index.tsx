import * as React from 'react'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { State, initialState } from './reducer'
import saga from './saga'
import * as actions from './actions'

import { ApplicationRootState } from '../../index'

type StateProps = {
  currentValue: number
  currentTime: null | number
}

type DispatchProps = {
  dispatch: Dispatch<actions.Action>
}

type Props = StateProps & DispatchProps

const View: React.FC<Props> = ({ currentValue, currentTime, dispatch }) => {
  return (
    <div>
      <div>Current couter value: {currentValue}</div>
      <hr />
      <button
        onClick={() => {
          dispatch(actions.increment())
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(actions.decrement())
        }}
      >
        Decrement
      </button>
      <br />
      <input
        value={currentTime ? currentTime.toString() : ''}
        onChange={event => {
          const eventValue = event.target.value
          dispatch(actions.changeAsyncTime(eventValue.length > 0 ? parseInt(eventValue, 10) : null))
        }}
      />
      <button
        disabled={!currentTime}
        onClick={() => {
          if (currentTime) {
            dispatch(actions.incrementAsyncAfter(currentTime))
          }
        }}
      >
        Increment after [seconds]
      </button>
    </div>
  )
}

// Map RootState to your StateProps
const mapStateToProps = (state: ApplicationRootState): StateProps => ({
  currentValue: state.counter.counterValue,
  currentTime: state.counter.asyncTime,
})

const withConnect = connect(mapStateToProps)

export default compose(
  withConnect,
  React.memo,
)(View) as React.ComponentType
