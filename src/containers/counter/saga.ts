import { put, takeEvery } from 'redux-saga/effects'
import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'

function* onIncrementAsyncAfter(action: ActionType<typeof actions.incrementAsyncAfter>) {
  yield new Promise(resolve => {
    const delay = action.payload * 1000
    setTimeout(() => {
      console.log(`custom promise just to pause executin for ${delay}`)
      resolve(undefined)
    }, delay)
  })

  yield put(actions.increment())
}

const targetAction = getType(actions.incrementAsyncAfter)

export default function* counterSaga() {
  yield takeEvery(targetAction, onIncrementAsyncAfter)
}
