#!/usr/bin/env node

import { runGame } from '../src/index.js';

// Алгоритм Евклида для вычисления НОД
const gcd = (a, b) => {
    let first = Math.abs(a);
    let second = Math.abs(b);
    
    while (second !== 0) {
        const temp = second;
        second = first % second;
        first = temp;
    }
    return first;
};

// Функция генерации случайного числа
const getRandomNumber = () => Math.floor(Math.random() * 50) + 1;

// Функция генерации вопроса и ответа
const generateRound = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const question = `${num1} ${num2}`;
    const correctAnswer = String(gcd(num1, num2));
    
    return { question, correctAnswer };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

runGame(gameDescription, generateRound);
