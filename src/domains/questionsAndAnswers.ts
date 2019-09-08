import { Question } from '../api'
import { Continent } from './continent'

export interface QuestionAndAnswers extends Question {
  readonly answers: Array<Continent>
}

export type QuestionsAndAnswers = Array<QuestionAndAnswers>
