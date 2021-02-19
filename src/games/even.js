import random from '../random.js';
import gameEngine from '../index.js';

const isEven = (num) => num % 2 === 0;

const gameObjective = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = random();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameEngine(gameObjective, getQuestionAndAnswer);
