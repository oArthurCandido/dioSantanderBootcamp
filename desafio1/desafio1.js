// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
var N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) {
  //TODO: Complete os espaços em branco com uma possível solução para o desafio

  if (i % 2 === 0) console.log(`${i}^2 = ${i ** 2}`);
}
