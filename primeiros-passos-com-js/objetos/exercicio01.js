/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômero rodado.
    Crie um metódo que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
    gasto em reais para realizar esse percurso. 
*/

class Carro {
    marca;
    cor;
    qtd_litros_medio_por_km;

    constructor(marca, cor, qtd_litros_medio_por_km){
        this.marca = marca;
        this.cor = cor;
        this.qtd_litros_medio_por_km = qtd_litros_medio_por_km;
    }

    calcularViagem(qtd_km, pc_combustivel) {
        return qtd_km * this.qtd_litros_medio_por_km * pc_combustivel ; // qtd_litros
    }
}

const fiesta = new Carro('Ford', 'Prata', 1/9); // 9 km com 1 litro
console.log(fiesta.calcularViagem(70, 5));

const uno = new Carro('Fiat', 'Vermelho', 1/12);
console.log(uno.calcularViagem(70, 5));

const palio = new Carro('Fiat', 'Verde', 1/10);
console.log(palio.calcularViagem(70, 5));
