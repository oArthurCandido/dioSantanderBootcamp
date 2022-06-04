var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
let line = lines.shift().split(' ');

//TODO: Complete os espaços em branco com uma possível solução para o desafio

const a = line[0];
const b = line[1];
console.log(a * b);
