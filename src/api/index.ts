import { Continent } from '../domains/continent'

export interface Question {
  readonly image: string
  readonly continent: Continent
}

export type Questions = Array<Question>

export const getQuestions = (): Promise<Questions> =>
  fetch('https://api.myjson.com/bins/a6da9')
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response
      }

      throw new Error(`Unexpected response status: ${response.status}`)
    })
    .then(response => response.json())
    .then(data => data)
    .catch(err => {
      throw err
    })

interface UserScore {
  score: number
  date: Date
}

export type UserScores = Array<UserScore>

export const getUserScores = (): UserScores => {
  const stringFromLocalStorage = localStorage.getItem('userScores')
  return stringFromLocalStorage != null ? (JSON.parse(stringFromLocalStorage) as UserScores) : []
}

export const setUserScore = (userScore: UserScore): void => {
  const oldUserScores = getUserScores()
  const newUserScores = [...oldUserScores, userScore]
  localStorage.setItem('userScores', JSON.stringify(newUserScores))
}
