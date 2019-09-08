import { put, takeLatest } from 'redux-saga/effects'
import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'
import { setUserScore } from '../../api'
import { startQuizSuccess } from '../home-screen/actions'
import { finishQuiz } from '../quiz-screen/actions'
import { getAnswers } from '../../domains/continent'
import { getRandomArrayElements } from '../../utils'

export default function* appSaga() {
  yield takeLatest(getType(startQuizSuccess), onStartQuizSuccess)
  yield takeLatest(getType(finishQuiz), onFinishQuiz)
  yield takeLatest(getType(actions.relaunch), onRelaunch)
}

function* onStartQuizSuccess(action: ActionType<typeof startQuizSuccess>) {
  const uniqueRandomQuestions = getRandomArrayElements(action.payload, 5)
  const questionsAndAnswers = uniqueRandomQuestions.map(question => ({
    ...question,
    answers: getAnswers(question.continent),
  }))
  yield put(actions.changeScreen({ type: 'QuizScreen', questionsAndAnswers }))
}

function* onFinishQuiz(action: ActionType<typeof finishQuiz>) {
  const score = action.payload
  yield setUserScore({ score, date: new Date() })
  yield put(actions.changeScreen({ type: 'ScoreScreen', score }))
}

function* onRelaunch(action: ActionType<typeof actions.relaunch>) {
  yield put(actions.changeScreen({ type: 'HomeScreen' }))
}
