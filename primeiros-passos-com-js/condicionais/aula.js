
let numero = 0;

const isNumeroPar = (numero % 2) === 0;

if (isNumeroPar) {
    console.log("é par");
} else {
    console.log("é impar");
}

// if(eNumeroPar){
//     console.log("é par");
// }

// if(!eNumeroPar){ 
//     console.log("é impar");
// }


numero = 5;

const isNumeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log("Número inválido");
    
}else if (numero === 5) {
    console.log("Número inválido")
} else if (NumeroDivisivelPor5) {
    console.log("SIM");
} else {
    console.log("NÃO");
}

// == ignora o tipo, conversão
// === mais rígido na comparação
// ! negação