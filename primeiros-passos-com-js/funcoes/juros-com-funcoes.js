var produto = 2350;
var pagamento

function aplicarDescontos(valor){
    if(valor === 1){
        pagamento = (produto * (1 - 0.1));
        return 1
    }else if(valor === 2){
        pagamento = (produto * (1 - 0.15));
        return 2
    }else if(valor === 3){
        pagamento = produto;
        return 3;
    }else {
        pagamento = (produto * (1 + 0.1)); 
        return 0;
    }
}

function notaFiscal(retorno){
    if (retorno === 1){
        console.log('Preço antes do desconto: R$ ' + produto + '\nPreço total após deduções: R$ ' + pagamento);
    } else if (retorno === 2){
        console.log('Preço antes do desconto: R$ ' + produto + '\nPreço total após deduções: R$ ' + pagamento);
    } else if (retorno === 3){
        console.log('Preço antes do desconto: R$ ' + produto + 
        '\nPreço total em duas parcelas: R$ ' + pagamento + 
        '\nPreço de cada parcela: ' + (pagamento / 2));
    } else {
        console.log('Preço antes do desconto: R$ ' + produto + 
        '\nPreço total parcelado em mais vezes: R$ ' + pagamento);
    }
}

(function (){
    let retorno = aplicarDescontos(3)
    console.log(retorno);

    notaFiscal(retorno);
})();

