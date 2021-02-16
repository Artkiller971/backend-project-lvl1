import random from '../random.js';
import gameEngine from '../index.js';

const operators = ['+', '-', '*'];

const gameObjective = 'What is the result of the expression?';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator ${operator}`);
  }
};

const getQuestionAndAnswer = () => {
  const a = random();
  const operator = operators[operators.length - random(1, 3)];
  const b = operator === '*' ? random(0, 11) : random();
  const question = `${a} ${operator} ${b}`;
  const answer = calculate(a, b, operator).toString();
  return [question, answer];
};

export default () => gameEngine(gameObjective, getQuestionAndAnswer);
