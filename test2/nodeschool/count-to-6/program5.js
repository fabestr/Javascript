'use strict';

let numbers = process.argv.slice(2);

var min = Math.min(...numbers);

var result = `Le minimum de [${numbers}] est ${min}`;

console.log(result);