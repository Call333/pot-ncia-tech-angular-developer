/*
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno
    em um semestre da faculdade, calcule e imprima a sua média
    e a sua classificação conforme a tabela abaixo:

    Média = (nota1 + nota2 + nota3) / 3;

    Classificação:
     - Média menor que 5, reprovado;
     - Média entre 5 e 7, recuperação;
     - Média acima de 7, passou de semestre;
*/

let nota_1 = 6;
let nota_2 = 7;
let nota_3 = 8;

const media = (nota_1 + nota_2 + nota_3) / 3;

if(media < 5){
    console.log('Reprovado');
}else if(media >= 5 && media <= 7){
    console.log('Recuperação');
}else if(media > 7){
    console.log('Aprovado');
}