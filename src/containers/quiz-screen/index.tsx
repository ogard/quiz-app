import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { State as StateProps } from './reducer'
import * as actions from './actions'

import { ApplicationRootState } from '../../index'
import { QuestionsAndAnswers } from '../../domains/questionsAndAnswers'

interface DispatchProps {
  dispatch: Dispatch<actions.Action>
}

interface OwnProps {
  questionsAndAnswers: QuestionsAndAnswers
}

type Props = StateProps & DispatchProps & OwnProps

const View: React.FC<Props> = ({ currentScore, questionNumber, userAnswer, questionsAndAnswers, dispatch }) => {
  return (
    <div>
      <div className="screen-header">
        Question {questionNumber.toString()} of {questionsAndAnswers.length.toString()}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={questionsAndAnswers[questionNumber - 1].image}
          width="100%"
          height={200}
          alt={questionsAndAnswers[questionNumber - 1].continent}
          style={{ marginBottom: 20 }}
        />
        {questionsAndAnswers[questionNumber - 1].answers.map((answer, index) => (
          <button
            style={{ width: 300, marginBottom: 10 }}
            className={`out-btn orange ${(() => {
              if (answer === questionsAndAnswers[questionNumber - 1].continent) {
                if (userAnswer === 'Correct') return 'correct'
                return 'incorrect'
              }
              return ''
            })()}`}
            key={index.toString()}
            disabled={userAnswer !== 'Pending'}
            onClick={() => dispatch(actions.makeAnswer(answer === questionsAndAnswers[questionNumber - 1].continent))}
          >
            {answer}
          </button>
        ))}
        {userAnswer !== 'Pending' && (
          <div style={{ position: 'absolute', bottom: '10%', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button
                className="fil-btn green"
                onClick={() =>
                  dispatch(
                    questionNumber === questionsAndAnswers.length
                      ? actions.finishQuiz(currentScore)
                      : actions.nextQuestion(),
                  )
                }
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state: ApplicationRootState, ownProps: OwnProps): StateProps => ({
  currentScore: state.quizScreen.currentScore,
  questionNumber: state.quizScreen.questionNumber,
  userAnswer: state.quizScreen.userAnswer,
})

const mapDispatchToProps = (dispatch: Dispatch<actions.Action>, ownProps: OwnProps): DispatchProps => ({
  dispatch,
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default withConnect(View)
