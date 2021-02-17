import random from '../random.js';
import gameEngine from '../index.js';

const gameObjective = 'What number is missing in the progression?';

const makeProgression = () => {
  const progressionLength = random(5, 12);
  const increment = random(1, 9);
  let acc = 1;
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(acc + increment);
    acc += increment;
  }

  return result;
};

const getQuestionAndAnswer = () => {
  const progression = makeProgression();
  const missingIndex = random(1, progression.length - 1);
  const answer = progression[missingIndex].toString();
  progression[missingIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => gameEngine(gameObjective, getQuestionAndAnswer);
