import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { State } from './reducer'
import * as actions from './actions'
import ScoreItem from '../../components/score-item'

import { ApplicationRootState } from '../../index'

type DispatchProps = {
  dispatch: Dispatch<actions.Action>
}

type Props = State & DispatchProps

const View: React.FC<Props> = ({ userScores, quiz, dispatch }) => {
  React.useEffect(() => {
    dispatch(actions.loadUserScores())
  }, [dispatch])
  return (
    <div>
      <div className="screen-header">Your Scores</div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {userScores.map(({ score, date }, index) => (
          <ScoreItem key={index.toString()} order={index + 1} score={score} date={date} />
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: '10%', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button
            className="out-btn green"
            disabled={quiz != null}
            onClick={() => {
              dispatch(actions.startQuiz())
            }}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: ApplicationRootState): State => ({
  userScores: state.homeScreen.userScores.sort((x, y) => y.score - x.score).slice(0, 3),
  quiz: state.homeScreen.quiz,
})

const withConnect = connect(mapStateToProps)

export default withConnect(View)
