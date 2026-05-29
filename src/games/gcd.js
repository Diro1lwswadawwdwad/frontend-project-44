const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const generateRound = () => {
    const a = getRandomInt(1, 50);
    const b = getRandomInt(1, 50);
    const question = `${a} ${b}`;
    const correctAnswer = String(gcd(a, b));
    
    return [question, correctAnswer];
};

export default generateRound;
