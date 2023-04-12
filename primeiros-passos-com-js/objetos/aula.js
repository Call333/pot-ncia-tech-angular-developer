
const pessoa = {
    nome: 'pessoa A. Melo',
    idade: 19,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.altura} de altura.`);
    }
}

console.log(pessoa.nome);

// add atributos no objeto
pessoa.altura = 1.79;

console.log(pessoa);

delete pessoa.idade;

pessoa.descrever()

// acessando por meio de uma string
const atributo = 'altura';
console.log(pessoa[atributo]);

pessoa['nome'] = 'teste';
pessoa.nome = 'teste';