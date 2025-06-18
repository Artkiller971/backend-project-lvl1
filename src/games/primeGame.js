import getRandomNumber from '../generateRandomNumber.js'
import gameEngine from '../index.js'

const isPrime = (number) => {
  if (number === 1) {
    return 'no'
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no'
    }
  }
  return 'yes'
}

const objective = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrimeLogic = () => {
  const number = getRandomNumber(1, 1000)
  const question = number
  const expectedAnswer = isPrime(question).toString()
  return [question, expectedAnswer]
}

export default () => gameEngine(objective, isPrimeLogic)
