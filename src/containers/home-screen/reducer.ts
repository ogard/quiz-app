import { Action } from './actions'
import { Action as AppAction } from '../app/actions'
import { Questions, UserScores } from '../../api'

export type State = {
  userScores: UserScores
  quiz:
    | null
    | { type: 'Starting' }
    | { type: 'StartedSuccess'; quesions: Questions }
    | { type: 'StartedFail'; error: string }
}

export const initialState: State = {
  userScores: [],
  quiz: null,
}

export default (state: State = initialState, action: Action | AppAction): State => {
  switch (action.type) {
    case 'LOAD_USER_SCORES_SUCCESS':
      return { ...state, userScores: action.payload }
    case 'START_QUIZ':
      return { ...state, quiz: { type: 'Starting' } }
    case 'START_QUIZ_SUCCESS':
      return { ...state, quiz: { type: 'StartedSuccess', quesions: action.payload } }
    case 'START_QUIZ_FAIL':
      return { ...state, quiz: { type: 'StartedFail', error: action.payload } }
    case 'RELAUNCH':
      return initialState
    default:
      return state
  }
}
