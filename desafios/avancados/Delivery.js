
//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
  cliente: 'João',
  endereco: 'Rua B, 456',
  itens: [],
  taxaEntrega: 5.0
};
pedido.itens.push({ nome: 'Hamburguer', preco: 15 });
pedido.itens.push({ nome: 'Batata frita', preco: 8 });
//TODO: Percorra o array de itens do pedido e calcule o seu valor total.
let valorTotal = pedido.taxaEntrega;

pedido.itens.forEach(e => {
    console.log(e);
    valorTotal+=e.preco;
})
// TODO: Imprima a saída:
let saida = `Pedido: ${pedido.cliente}\nEndereco de entrega: ${pedido.endereco}\nTotal: R$ ${valorTotal.toFixed(2)}`

console.log(saida)