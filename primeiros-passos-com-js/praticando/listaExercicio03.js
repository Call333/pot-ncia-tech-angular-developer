/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, 
    considerando o preço normal de etiqueta e a escolha da condição de pagamento.

    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento 
    escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let produto = 2350;

let debito = (produto * (1 - 0.1));
let aVistaOuPix = (produto * (1 - 0.15));
let parceladoEmDuasVezes = produto;
let parceladoEmMaisVezes = (produto * (1 + 0.1)); 

let formaPagamento = parceladoEmMaisVezes;

if (formaPagamento === debito){
    console.log('Preço antes do desconto: R$ ' + produto + '\nPreço total após deduções: R$ ' + debito);
} else if (formaPagamento === aVistaOuPix){
    console.log('Preço antes do desconto: R$ ' + produto + '\nPreço total após deduções: R$ ' + aVistaOuPix);
} else if (formaPagamento === parceladoEmDuasVezes){
    console.log('Preço antes do desconto: R$ ' + produto + 
    '\nPreço total em duas parcelas: R$ ' + parceladoEmDuasVezes + 
    '\nPreço de cada parcela: ' + (parceladoEmDuasVezes / 2));
} else {
    console.log('Preço antes do desconto: R$ ' + produto + 
    '\nPreço total parcelado em mais vezez: R$ ' + parceladoEmMaisVezes);
}