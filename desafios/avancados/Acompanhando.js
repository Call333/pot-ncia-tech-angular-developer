// Criando um objeto chamado "pedido" as seguintes propriedades:
const pedido = {
    cliente: {
      nome: 'João',       // Lê a primeira linha da "Entrada": Nome do Cliente.
      endereco: 'Rua ABC, 9',   // Lê a segunda linha da "Entrada": Endereço do Cliente.
    },
    id: parseInt(99), // Lê a terceira linha da "Entrada": ID do Pedido.
  };
  
  //TODO: Leia a quarta linha da "Entrada": Telefone do Cliente.
  //TODO: Crie dinamicamente a propriedade "telefone" no objeto JSON "pedido.cliente".
  pedido.cliente.telefone = '5555-0000';
  //TODO: Imprima a saída formatada de acordo com este desafio.
  console.log(`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}`);
  console.log(`ID: ${pedido.id}`);
  console.log(`Tel: ${pedido.cliente.telefone}`);