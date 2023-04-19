"use strict";
// Tipos primitivos: boolean, string, number:
let ligado = false;
let comFome = true;
let nome = "Calebe";
let idade = 19;
let altura = 1.79;
// Tipos especiais: Aceitam apenas null & undefined:
let nulo = null;
let indefinido = undefined;
// Tipos abrangentes: any & void:
// Aceita apenas void, usado em funções para retornar nada
let retorno;
const executaQuery = () => { };
// Aceita tudo, qualquer tipo de valor
let retornoView = "   "; // false, true, 1, 1.89
// Object -> Aceita apenas objetos não definidos - sem previsibilidade:
let produto = {
    nome: "Calebe",
    cidade: "Mcz",
    idade: 19,
};
let meuProduto = {
    nome: "Tênis",
    preco: 79.99,
    unidades: 60,
    emEstoque: true,
};
const printaObjetos = (pessoa) => {
    console.log(pessoa);
};
// isso printa um objeto:
printaObjetos({
    name: "Bruce Wayne",
    vulgo: "batman",
});
console.log("alabarda de cavaleiro negro");
console.log("abobora");
// Maneiras de se declarar Array no TS.
let dados = ["Calebe", "Gabriel", "Cauã"];
let dados2 = ["Anne", "Hugo", "Gabriel", "Paulo"];
// array multi tipos
let infos = ['Breno', 108, 'Antony'];
// Tuplas: 
let boleto = ['calebe', 1234, true];
/*
    Todos os metódos que já existem no JS, valem para o TS
*/
// Datas
let aniversario = new Date('2023-09-26 17:44:00');
console.log(aniversario.toString);
