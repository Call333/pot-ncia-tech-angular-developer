// Tipos primitivos: boolean, string, number:
let ligado: boolean = false;
let comFome = true;
let nome: string = "Calebe";
let idade: number = 19;
let altura: number = 1.79;

// Tipos especiais: Aceitam apenas null & undefined:
let nulo: null = null;
let indefinido: undefined = undefined;

// Tipos abrangentes: any & void:

// Aceita apenas void, usado em funções para retornar nada
let retorno: void;
const executaQuery = (): void => {};
// Aceita tudo, qualquer tipo de valor
let retornoView: any = "   "; // false, true, 1, 1.89

// Object -> Aceita apenas objetos não definidos - sem previsibilidade:
let produto: object = {
  nome: "Calebe",
  cidade: "Mcz",
  idade: 19,
};
// Objeto definido - com previsibilidade:
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
  emEstoque: boolean;
};

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 79.99,
  unidades: 60,
  emEstoque: true,
};

type heroi = {
  name: string;
  vulgo: string;
};

const printaObjetos = (pessoa: heroi) => {
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
let dados: string[] = ["Calebe", "Gabriel", "Cauã"];
let dados2: Array<string> = ["Anne", "Hugo", "Gabriel", "Paulo"];
// array multi tipos
let infos: (string | number)[] = ['Breno', 108, 'Antony'];

// Tuplas: 
let boleto: [string, number, boolean] = ['calebe', 1234, true];

/*
    Todos os metódos que já existem no JS, valem para o TS
*/

// Datas
let aniversario: Date = new Date('2023-09-26 17:44:00');
console.log(aniversario.toString);
