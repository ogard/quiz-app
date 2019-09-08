import { Action } from './actions'
import { Action as AppAction } from '../app/actions'

export interface State {
  currentScore: number
  questionNumber: number
  userAnswer: 'Pending' | 'Correct' | 'Incorrect'
}

export const initialState: State = {
  currentScore: 0,
  questionNumber: 1,
  userAnswer: 'Pending',
}

export default (state: State = initialState, action: Action | AppAction): State => {
  switch (action.type) {
    case 'MAKE_ANSWER':
      return {
        ...state,
        currentScore: state.currentScore + (action.payload ? 750 : 0),
        userAnswer: action.payload ? 'Correct' : 'Incorrect',
      }
    case 'NEXT_QUESTION':
      return { ...state, questionNumber: state.questionNumber + 1, userAnswer: 'Pending' }
    case 'RELAUNCH':
      return initialState
    default:
      return state
  }
}
