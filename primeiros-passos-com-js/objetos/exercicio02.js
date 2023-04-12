/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura 
    e peça ao José para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(imc){
        imc = this.calcularImc();
        if (imc < 18.5) {
            console.log('Abaixo do peso: ' + imc.toFixed(2));
        } else if (imc >= 18.5 && imc < 25) {
            console.log('peso normal: ' + imc.toFixed(2));
        } else if (imc >= 25 && imc < 30) {
            console.log('acima do peso: ' + imc.toFixed(2));
        } else if (imc >= 30 && imc <= 40) {
            console.log('obeso: ' + imc.toFixed(2));
        } else {
            console.log('obesidade grave: ' + imc.toFixed(2));
        }
    }
}

const jose = new Pessoa('José', 76, 1.78);
jose.classificarImc();

const calebe = new Pessoa('Calebe', 70, 1.79);
calebe.classificarImc();

const alexandre = new Pessoa('Alexandre o Bigger', 106, 1.78);
alexandre.classificarImc();