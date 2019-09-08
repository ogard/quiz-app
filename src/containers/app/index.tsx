import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import '../../styles/app.css'

import * as actions from './actions'
import { State } from './reducer'

import HomeScreen from '../home-screen'
import QuizScreen from '../quiz-screen'
import ScoreScreen from '../../components/score-screen'
import Header from '../../components/header'

import { ApplicationRootState } from '../../index'

interface DispatchProps {
  readonly dispatch: Dispatch<actions.Action>
}

type Props = State & DispatchProps

const App: React.FC<Props> = ({ currentScreen, dispatch }) => {
  return (
    <div className="app">
      <Header />
      {(() => {
        switch (currentScreen.type) {
          case 'HomeScreen':
            return <HomeScreen />
          case 'QuizScreen':
            return <QuizScreen questionsAndAnswers={currentScreen.questionsAndAnswers} />
          case 'ScoreScreen':
            return <ScoreScreen score={currentScreen.score} relaunch={() => dispatch(actions.relaunch())} />
          default:
            return <div />
        }
      })()}
    </div>
  )
}

const mapStateToProps = (state: ApplicationRootState): State => ({
  currentScreen: state.app.currentScreen,
})

const withConnect = connect(mapStateToProps)

export default withConnect(App)
