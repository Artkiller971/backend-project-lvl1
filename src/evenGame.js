import getName from './greeting.js';
import readlineSync from 'readline-sync';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } else {
    return 'no';
  }
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * (1000 - 1 + 1) + 1);
};

export default () => {
  const gameStart = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = getName();
  console.log(gameStart);
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    const expectedAnswer = isEven(number);
    console.log(`Question; ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (!(answer === expectedAnswer)) {
      console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};