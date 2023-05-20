/**
 * O objetivo deste programa é ajudar a equipe do Restaurante Veggieworld 
 * a identificar rapidamente os pedidos veganos e não veganos e informar 
 * as calorias de cada prato definido pelo cliente. O programa deve solicitar 
 * ao usuário o número de pedidos que serão feitos e, em seguida, 
 * pedir informações sobre cada pedido, incluindo se o prato é vegano 
 * ou não (usando as opções "s" para sim e "n" para não) e a quantidade de calorias. 
 * Ao final, o programa deve exibir uma lista de todos os pedidos com suas informações 
 * correspondentes.
 */

const numPedidos = parseInt("2");

// Aqui em teoria era pra repetir duas vezes o trecho de código pra peguntar ao usuário, 
// mas como eles usam funções especificas vou deixar que vai rodar também   

for (let i = 1; i <= numPedidos; i++) {
  const prato = "Hamburguer de lentilha";
  const calorias = parseInt("300");
  const ehVegano = "S".toLowerCase() === 's';

  //TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.
  if (ehVegano) {
    console.log(`Pedido ${i}: ${prato} (Vegano) - ${calorias} calorias`)
  } else {
    console.log(`Pedido ${i}: ${prato} (Nao-vegano) - ${calorias} calorias`)
  }
}