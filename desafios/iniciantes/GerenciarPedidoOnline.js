/**
 * Você foi contratado para desenvolver um sistema que armazena 
 * informações dos pedidos de comida online realizados por um cliente. 
 * O sistema deve permitir ao cliente inserir novos pedidos, escolher 
 * um cupom de desconto (10% ou 20%) e exibir o valor total de todos 
 * os pedidos realizados até o momento, com o desconto aplicado.
 */

// DETALHE: Esse código não funcionará pois os valores não estão nas variaveis

function calcularValorTotal(n, pedidos, cupom) {
    let total = 0;
    for (let i = 0; i < n; i++) {
      let [nome, valor] = pedidos[i].split(' ');
      valor = parseFloat(valor);
      total += valor;
    }
    
    //TODO: Criar as condições para aplicar o cupom de desconto (10% ou 20%).
    if(cupom === '10%'){
      total = total - (total * 0.1);
    } else if (cupom === '20%'){
      total = total - (total * 0.2);
    }
    return total.toFixed(2);
  }
  
  //Recupera os valores de entrada, criando um array para os pedidos:
  const n = parseInt("4"); // qtd pedidos
  const pedidos = []; // guarda os pedidos
  for (let i = 0; i < n; i++) {
    pedidos.push('Pizza 19.99', 'Salada 29.99', 'Sushi 61.00', 'Pudim 10.00'); // insere pedidos
  }
  const cupom = "20%"; // aqui o client insere o cupon
  
  //TODO: Analisar e completar a função "calcularValorTotal", invocando-a para obtenção do total.
  let total = calcularValorTotal(n, pedidos, cupom);
  //TODO: Imprimir o valor total obtido de acordo com o padrão solicitado neste desafio.
  console.log(`Valor total: ${total}`)