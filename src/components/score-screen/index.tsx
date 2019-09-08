import * as React from 'react'
import logo from '../../assets/logo.svg'

type Props = {
  score: number
  relaunch: () => void
}

const ScoreScreen: React.FC<Props> = ({ score, relaunch }) => {
  return (
    <div>
      <div className="screen-header">Results</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src={logo} width={200} height={200} className="App-logo" alt="logo" />
        <div className="screen-header">Your score:</div>
        <div style={{ fontSize: 26, marginBottom: 10 }}>{score} pts</div>
        <button className="out-btn blue" onClick={relaunch}>
          Finish
        </button>
      </div>
    </div>
  )
}

export default ScoreScreen
