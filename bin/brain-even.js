#!/usr/bin/env node

import { runGame } from '../src/index.js';

// Функция проверки чётности
const isEven = (num) => num % 2 === 0;

// Функция генерации вопроса и ответа
const generateRound = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const question = String(number);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    
    return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(gameDescription, generateRound);
