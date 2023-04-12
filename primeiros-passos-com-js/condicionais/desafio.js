/*Faça um programa que para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
1 - preço do etanol;
2 - preço da gasolina;
3 - o tipo de combustível que está no seu carro;
4 - gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/


let precoEtanol = 5.79;
let precoGasolina = 6.66;
let combustivelUsado = 'Etanol';
let distanciaKm = 100;
let KmPorLitros = 10;

if(combustivelUsado === 'Etanol'){
    var gastoCombustivel = (distanciaKm / KmPorLitros) * precoEtanol;
}else{
    gastoCombustivel = (distanciaKm / KmPorLitros) * precoGasolina;
}

console.log("R$ " + gastoCombustivel.toFixed(2) +" em combustível");