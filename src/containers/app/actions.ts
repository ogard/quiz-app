import { createAction, ActionType } from 'typesafe-actions'
import { Screen } from '../../domains/screen'

export const changeScreen = createAction('CHANGE_SCREEN', action => (screen: Screen) => action(screen))

export const relaunch = createAction('RELAUNCH')

const actions = { changeScreen, relaunch }

export type Action = ActionType<typeof actions>
