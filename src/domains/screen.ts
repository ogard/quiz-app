import { QuestionsAndAnswers } from './questionsAndAnswers'

export type Screen =
  | { type: 'HomeScreen' }
  | { type: 'QuizScreen'; questionsAndAnswers: QuestionsAndAnswers }
  | { type: 'ScoreScreen'; score: number }
