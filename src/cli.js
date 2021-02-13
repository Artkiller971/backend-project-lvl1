import readlineSync from 'readline-sync';

export const userName = () => {
  const name = readlineSync.question('What is you name? ');
  console.log(`Hi, ${name}!`);
};



