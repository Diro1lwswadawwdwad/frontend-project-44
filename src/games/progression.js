const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
    const length = 10;
    const start = getRandomInt(1, 50);
    const step = getRandomInt(2, 10);
    const hiddenIndex = getRandomInt(0, length - 1);
    
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(start + i * step);
    }
    
    const correctAnswer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    
    return [question, correctAnswer];
};

export default generateRound;
