import readlineSync from 'readline-sync';

const turnsCount = 3;

export default (gameObjective, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameObjective}`);

  const game = (turnsLeft) => {
    if (turnsLeft === 0) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }

    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return game(turnsLeft - 1);
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  };

  return game(turnsCount);
};
