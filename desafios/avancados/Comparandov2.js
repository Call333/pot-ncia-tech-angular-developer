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
  
  //TODO: Comparar os JSONs dos Clientes, verificando se todas as propriedades são iguais e imprimindo.
  if((cliente1.nome === cliente2.nome) && (cliente1.item === cliente2.item)&&(cliente1.preco === cliente2.preco)){
    console.log('Os pedidos são iguais');
  } else {
    console.log('Os pedidos são diferentes');
  }