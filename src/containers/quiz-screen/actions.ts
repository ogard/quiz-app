import { createAction, ActionType } from 'typesafe-actions'

export const makeAnswer = createAction('MAKE_ANSWER', action => (isCorrect: boolean) => action(isCorrect))

export const nextQuestion = createAction('NEXT_QUESTION')

export const finishQuiz = createAction('FINISH_QUIZ', action => (score: number) => action(score))

const actions = { makeAnswer, nextQuestion, finishQuiz }

export type Action = ActionType<typeof actions>
