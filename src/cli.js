import readLineSync from 'readline-sync';

export default()=> {
  const name = readLineSync.question('What is your name? ');
  console.log(`Hello, ${name}!`);
};