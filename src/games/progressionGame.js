import getRandomNumber from '../generateRandomNumber.js'
import gameEngine from '../index.js'

const objective = 'What number is missing in the progression?'

const progressionLogic = () => {
  const factor = getRandomNumber(1, 10)
  let start = getRandomNumber(1, 100)
  const length = getRandomNumber(5, 10)
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start)
    start += factor
  }

  const indexToPop = getRandomNumber(1, length)
  const target = progression.length - indexToPop
  const expectedAnswer = progression[target]
  progression[target] = '..'
  return [progression.join(' '), expectedAnswer.toString()]
}

export default () => gameEngine(objective, progressionLogic)
