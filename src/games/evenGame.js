import  getRandomNumber  from '../generateRandomNumber.js';
import gameEngine from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } else {
    return 'no';
  }
};


const objective = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenLogic = () => {
  const number = getRandomNumber(1, 1000);
  const question = number;
  const expectedAnswer = isEven(question).toString();
  return [question, expectedAnswer];
};

export default () => gameEngine(objective, isEvenLogic);