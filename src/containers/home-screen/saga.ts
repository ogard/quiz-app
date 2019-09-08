import { put, takeLatest } from 'redux-saga/effects'
import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'
import { getUserScores, UserScores, getQuestions, Questions } from '../../api'

export default function* homeScreenSaga() {
  yield takeLatest(getType(actions.loadUserScores), onLoadUserScores)
  yield takeLatest(getType(actions.startQuiz), onStartQuiz)
}

function* onLoadUserScores(action: ActionType<typeof actions.loadUserScores>) {
  const userScores: UserScores = yield getUserScores()
  yield put(actions.loadUserScoresSuccess(userScores))
}

function* onStartQuiz(action: ActionType<typeof actions.startQuiz>) {
  try {
    const questions: Questions = yield getQuestions()
    yield put(actions.startQuizSuccess(questions))
  } catch (error) {
    yield put(actions.startQuizFail(error))
  }
}
