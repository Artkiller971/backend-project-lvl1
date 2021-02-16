import random from '../random.js';
import gameEngine from '../index.js';

const gameObjective = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  const remainder = a % b;
  if (remainder === 0) {
    return b;
  }

  return findGCD(b, remainder);
};

const getQuestionAndAnswer = () => {
  const a = random(10);
  const b = random(10);
  const question = `${a} ${b}`;
  const answer = findGCD(a, b).toString();

  return [question, answer];
};

export default () => gameEngine(gameObjective, getQuestionAndAnswer);
