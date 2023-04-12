

function sayMyName(name){
    console.log('Your name is ' + name);
}

function quadrado(valor){
    return valor * valor
}

const quadrado1 = quadrado(10)
console.log(quadrado1);

sayMyName('Calebe');

function incrementarJuros(valor, percentualJuros){
    const valorAcresimo = (percentualJuros / 100) * valor
    return valor + valorAcresimo
}

console.log(incrementarJuros(100, 30));
console.log(incrementarJuros(100, 9));

// padronizar
function main1() {
    sayMyName('Alexandre o Bigger')
}

main1();


function calcularImc(peso, altura) {
    const imc = peso / (altura * altura);
    // ou const imc = peso / Math.pow(altura, 2);
    return imc
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ('Abaixo do peso: ' + imc);
    } else if (imc >= 18.5 && imc < 25) {
        return ('peso normal: ' + imc);
    } else if (imc >= 25 && imc < 30) {
        return ('acima do peso: ' + imc);
    } else if (imc >= 30 && imc <= 40) {
        return ('obeso: ' + imc);
    } else {
        return ('obesidade grave:' + imc);
    }
}

(function (){
    let peso = 70;
    let altura = 1.79;
    
    let imc = calcularImc(peso, altura)
    
    console.log(classificarImc(imc));
})() // ->  crio uma função e chamo ela ao mesmo tempo, é o nosso antigo main que to imc-com-funcoes.js
