var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines.shift());
//TODO: Complete os espaços em branco com uma possível solução para o desafio
let resposta = ((N - 3) * N) / 2;
console.log(resposta);
