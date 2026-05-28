#!/usr/bin/env node

import { runGame } from '../src/index.js';

// Функция проверки простоты числа
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Функция генерации случайного числа
const getRandomNumber = () => Math.floor(Math.random() * 99) + 2; // числа от 2 до 100

// Функция генерации вопроса и ответа
const generateRound = () => {
    const number = getRandomNumber();
    const question = String(number);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    
    return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

runGame(gameDescription, generateRound);
