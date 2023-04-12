class Pessoa1 {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} de idade.`);
    }
}

const calebe = new Pessoa1('Calebe A. Melo', 19);

const hugo = new Pessoa1('Hugo Rafael', 18);

calebe.descrever();
hugo.descrever();

console.log(hugo);

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

compararPessoas(calebe, hugo);