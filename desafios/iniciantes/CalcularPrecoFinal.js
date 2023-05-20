/**
 * Você está criando um aplicativo de entrega de comida e precisa calcular 
 * o preço final do pedido do usuário. O usuário escolheu alguns itens do 
 * cardápio e é preciso calcular o preço total do pedido.
 */

const valorHamburguer = parseFloat("8.0");
const quantidadeHamburguer = parseInt("1");
const valorBebida = parseFloat("4.0");
const quantidadeBebida = parseInt("4");
const valorPago = parseFloat("50.0");

//TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).
let valorTotal = ((valorHamburguer * quantidadeHamburguer) + (valorBebida*quantidadeBebida));
//TODO: Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.
let troco = (valorPago - valorTotal);
//TODO: Imprimir a saída no formato especificado neste desafio.
console.log(`O preço final do pedido é R$ ${valorTotal.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`)