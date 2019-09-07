import { Action } from './actions'

export type State = {
  counterValue: number
  asyncTime: null | number
}

export const initialState: State = {
  counterValue: 0,
  asyncTime: null,
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counterValue: state.counterValue + 1 }
    case 'DECREMENT':
      return { ...state, counterValue: state.counterValue - 1 }
    case 'CHANGE_ASYNC_TIME':
      return { ...state, asyncTime: action.payload }
    default:
      return state
  }
}
