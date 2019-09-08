import { createAction, ActionType } from 'typesafe-actions'
import { Questions, UserScores } from '../../api'

export const loadUserScores = createAction('LOAD_USER_SCORES')

export const loadUserScoresSuccess = createAction('LOAD_USER_SCORES_SUCCESS', action => (userScores: UserScores) =>
  action(userScores),
)

export const startQuiz = createAction('START_QUIZ')

export const startQuizSuccess = createAction('START_QUIZ_SUCCESS', action => (questions: Questions) =>
  action(questions),
)

export const startQuizFail = createAction('START_QUIZ_FAIL', action => (error: string) => action(error))

const actions = { loadUserScores, loadUserScoresSuccess, startQuiz, startQuizSuccess, startQuizFail }

export type Action = ActionType<typeof actions>
