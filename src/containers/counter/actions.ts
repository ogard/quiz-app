import { createAction, ActionType } from 'typesafe-actions'

export const increment = createAction('INCREMENT')

export const decrement = createAction('DECREMENT')

export const incrementAsyncAfter = createAction('INCREMENT_ASYNC_AFTER', action => (duration: number) =>
  action(duration),
)

export const changeAsyncTime = createAction('CHANGE_ASYNC_TIME', action => (asyncTime: null | number) =>
  action(asyncTime),
)

const actions = { increment, decrement, incrementAsyncAfter, changeAsyncTime }

export type Action = ActionType<typeof actions>
