import readLineSync from 'readline-sync';

export default () => {
  console.log("Welcome to the Brain Games!");
  const name = readLineSync.question('What is your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};