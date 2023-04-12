
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

function main(){
    let peso = 70;
    let altura = 1.79;
    
    let imc = calcularImc(peso, altura)
    
    console.log(classificarImc(imc));
}

main();