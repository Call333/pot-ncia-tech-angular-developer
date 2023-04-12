/*Faça um programa que para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
1 - preço do combustível;
2 - gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/


let preçoCombustível = 5.79;

let distanciaKm = 100;

let KmPorLitros = 10;

const gastoCombustível = (distanciaKm / KmPorLitros) * preçoCombustível;

console.log("R$ " + gastoCombustível.toFixed(2) +" em combustível");