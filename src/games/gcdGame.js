import getRandomNumber from '../generateRandomNumber.js';
import gameEngine from '../index.js';

const getGCD = (num1, num2) => {
  let result = 1;
  const maxSteps = num1 > num2 ? num1 : num2;
  for (let i = 0; i < maxSteps; i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      result = i;
    }
  }

  return result;
};

const objective = 'Find the greatest common divisor of given numbers.';

const gcdLogic = () => {
  const number1 = getRandomNumber(1,100);
  const number2 = getRandomNumber(1,100);
  const question = `${number1} ${number2}`;
  const expectedAnswer = getGCD(number1, number2).toString();
  return [question, expectedAnswer];
};

export default () => gameEngine(objective, gcdLogic);
