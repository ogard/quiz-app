import { shuffleArray, getRandomArrayElements } from '../utils'

export type Continent = 'Europe' | 'Asia' | 'Oceania' | 'South America' | 'North America' | 'Antarctica' | 'Africa'

export const continents: Array<Continent> = [
  'Europe',
  'Asia',
  'Oceania',
  'South America',
  'North America',
  'Antarctica',
  'Africa',
]

export const getAnswers = (correctAnswer: Continent): Array<Continent> => {
  const twoWrongAnswers = getRandomArrayElements(continents.filter(x => x !== correctAnswer), 2)
  const offeredAnswers = [correctAnswer, ...twoWrongAnswers]
  return shuffleArray(offeredAnswers)
}
