const pedidos = [
    { 
      nome: 'Rafael', 
      tipo: 'Massa', 
      distancia: parseFloat('2.8')
    },
    { 
      nome: 'Júlia', 
      tipo: 'Árabe', 
      distancia: parseFloat('1.2')
    },
    { 
      nome: 'Carla', 
      tipo: 'Hamburguer', 
      distancia: parseFloat('4.9')
    }
  ];

const pedidoMaisProximo = pedidos.reduce((pedidoAtual, outroPedido) => {
    if(pedidoAtual.distancia < outroPedido.distancia){
        return pedidoAtual;
    } else {
        return outroPedido;
    }
})

console.log(`O pedido mais próximo é o de ${pedidoMaisProximo.nome}, do tipo ${pedidoMaisProximo.tipo}`);