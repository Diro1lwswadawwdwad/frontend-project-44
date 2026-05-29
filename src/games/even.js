const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
    const number = getRandomInt(1, 100);
    const question = String(number);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    
    return [question, correctAnswer];
};

export default generateRound;