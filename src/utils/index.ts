export const shuffleArray = <T>(x: Array<T>): Array<T> => x.sort(() => 0.5 - Math.random())

export const getRandomArrayElements = <T>(x: Array<T>, n: number): Array<T> => {
  if (n > x.length) return []
  return shuffleArray(x).slice(0, n)
}
