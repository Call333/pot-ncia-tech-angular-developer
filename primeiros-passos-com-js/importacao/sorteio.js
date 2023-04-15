/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
    Faça um programa que receba os 5 numeros sorteados para os alunos e mostre
    o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const { gets, print } = require('./funcoes-auxiliares');

const nuerosSorteados = []

for (let i = 0; i < 5; i++) {
    nuerosSorteados.push(gets());
}

let maiorNumero = 0;

for (let i = 0; i < nuerosSorteados.length; i++) {
    if(nuerosSorteados[i] >  maiorNumero){
        maiorNumero = nuerosSorteados[i];
    }
}
console.log(maiorNumero);