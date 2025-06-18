import readlineSync from 'readline-sync'

export default (objective, gameLogic) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May i have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(objective)

  for (let turns = 0; turns < 3; turns += 1) {
    const [question, expectedAnswer] = gameLogic()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (!(userAnswer === expectedAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}
