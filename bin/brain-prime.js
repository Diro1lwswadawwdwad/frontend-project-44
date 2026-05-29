#!/usr/bin/env node

import readlineSync from 'readline-sync';
import playPrimeGame from '../src/games/prime.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

playPrimeGame(name);