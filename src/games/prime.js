import readlineSync from 'readline-sync';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const playPrimeGame = (playerName) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  
  let correctAnswersCount = 0;
  const requiredCorrectAnswers = 3;

  while (correctAnswersCount < requiredCorrectAnswers) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default playPrimeGame;