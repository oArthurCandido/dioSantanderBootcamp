var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
var R = Number(lines[0]);
const PI = 3.14159;
var volume = (4 / 3.0) * PI * R ** 3;

console.log(volume.toFixed(3));
