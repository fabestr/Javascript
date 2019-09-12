'use strict';

var inputs = process.argv.slice(2);
var result = inputs
    .map(x => x.charAt(0))
    .reduce((total, x) => total+x)

var sentence = `[${inputs}] devient "${result}"`;
console.log(sentence);