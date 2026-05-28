#!/usr/bin/env node

import { runGame } from '../src/index.js';

// Функция генерации случайного числа
const getRandomNumber = () => Math.floor(Math.random() * 20) + 1;

// Функция вычисления результата
const calculate = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            throw new Error(`Unknown operation: ${operation}`);
    }
};

// Функция генерации вопроса и ответа
const generateRound = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = String(calculate(num1, num2, operation));
    
    return { question, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

runGame(gameDescription, generateRound);
