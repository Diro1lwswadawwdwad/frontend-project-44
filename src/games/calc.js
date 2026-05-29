const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (a, b, op) => {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        default: return null;
    }
};

const generateRound = () => {
    const a = getRandomInt(1, 20);
    const b = getRandomInt(1, 20);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(0, operators.length - 1)];
    
    const question = `${a} ${operator} ${b}`;
    const correctAnswer = String(calculate(a, b, operator));
    
    return [question, correctAnswer];
};

export default generateRound;
