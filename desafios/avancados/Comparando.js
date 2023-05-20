// JSON do Cliente 1
const cliente1 = { 
    nome: 'aline', 
    item: 'Hamburguer', 
    preco: parseFloat('15')
  };
  
  // JSON do Cliente 2
  const cliente2 = { 
    nome: 'Camilla', 
    item: 'Pizza', 
    preco: parseFloat('15') 
  };
  
  //TODO: Comparar os JSONs dos Clientes, verificando se todas as propriedades são iguais.
  let isEqual = JSON.stringify(cliente1) === JSON.stringify(cliente2);
  //TODO: Imprimir a saída conforme o enunciado deste desafio.
  if(isEqual){
    console.log('Os pedidos são iguais');
  }else{
    console.log('Os pedidos são diferentes');
  }