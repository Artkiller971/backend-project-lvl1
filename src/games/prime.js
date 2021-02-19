import random from '../random.js';
import gameEngine from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const gameObjective = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const num = random();
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameEngine(gameObjective, getQuestionAndAnswer);
