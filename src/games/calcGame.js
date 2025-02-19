import getRandomNumber from '../generateRandomNumber.js';
import gameEngine from '../index.js';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
  case '+':
    return num1 + num2;
  case '*':
    return num1 * num2;
  case '-':
    return num1 - num2;
  }
};

const objective = 'What is the result of the expression?';

const calcLogic = () => {
  const number1 = getRandomNumber(1, 100);
  const operation = operators[operators.length - getRandomNumber(1, 3)];
  const number2 = operation === '*' ? getRandomNumber(1, 10) : getRandomNumber(1, 100);
  const question = `${number1} ${operation} ${number2}`;
  const expectedAnswer = calculate(number1, number2, operation).toString();
  return [question, expectedAnswer];
};

export default () => gameEngine(objective, calcLogic);
