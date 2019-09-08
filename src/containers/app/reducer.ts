import { Action } from './actions'
import { Screen } from '../../domains/screen'

export type State = {
  currentScreen: Screen
}

export const initialState: State = {
  currentScreen: { type: 'HomeScreen' },
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'CHANGE_SCREEN':
      return { ...state, currentScreen: action.payload }
    default:
      return state
  }
}
