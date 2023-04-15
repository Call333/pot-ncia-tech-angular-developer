
// Isso é de node
const funcoes = require('./funcoes-auxiliares');

console.log(funcoes.gets());

// Outra maneira de importar
const { gets, print } = require('./funcoes-auxiliares');

print(gets());