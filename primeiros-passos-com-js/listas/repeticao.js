
const alunos = ['calebe', 'carlos', 'hagar', 'renan', 'vitor', 'gabriel'];

const notas = [5, 8, 7, 6, 6, 7];

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
console.log(soma);

let media = soma / notas.length
console.log(media);