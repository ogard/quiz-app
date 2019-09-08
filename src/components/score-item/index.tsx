import * as React from 'react'

interface Props {
  readonly order: number
  readonly score: number
  readonly date: Date
}

const ScoreItem: React.FC<Props> = ({ order, score, date }) => (
  <div style={{ display: 'flex', flexWrap: 'nowrap', marginBottom: 10 }}>
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: 30,
        height: 30,
        padding: 14,
        border: '2px solid #89481a',
        borderRadius: 14,
        color: '#89481a',
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 15,
        textAlign: 'center',
      }}
    >
      #{order}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ color: 'rgba(27, 31, 35, 0.5)', fontSize: 14, marginBottom: 4 }}>
        on {new Date(date).toLocaleDateString()}
      </div>
      <div style={{ color: 'rgba(27, 31, 35, 0.8)', fontSize: 18, fontWeight: 'bold' }}>{score} pts</div>
    </div>
  </div>
)

export default ScoreItem
