#!/usr/bin/env node

import { runGame } from '../src/index.js';

// Функция генерации случайного числа в диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция генерации арифметической прогрессии
const generateRound = () => {
    const length = 10; // Длина прогрессии
    const start = getRandomNumber(1, 20); // Начальное число от 1 до 20
    const step = getRandomNumber(1, 10); // Шаг прогрессии от 1 до 10
    const hiddenIndex = getRandomNumber(0, length - 1); // Индекс скрытого элемента
    
    // Создаём массив прогрессии
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }
    
    // Сохраняем правильный ответ
    const correctAnswer = String(progression[hiddenIndex]);
    
    // Заменяем скрытый элемент на '..'
    progression[hiddenIndex] = '..';
    
    // Формируем вопрос
    const question = progression.join(' ');
    
    return { question, correctAnswer };
};

const gameDescription = 'What number is missing in the progression?';

runGame(gameDescription, generateRound);
