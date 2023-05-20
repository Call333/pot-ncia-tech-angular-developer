const restaurantes = [
    {
        nome: 'Bar do zé',
        avaliacao: parseFloat('3.5')
    },
    {
        nome: 'Pizza Boa',
        avaliacao: parseFloat('4.2')
    },
    {
        nome: 'Feijuca',
        avaliacao: parseFloat('4.5')
    }
];

const restauranteMelhorAvaliado = restaurantes.reduce(function (restauranteAtual, restauranteComMelhorAvaliacao) {
    if (restauranteAtual.avaliacao > restauranteComMelhorAvaliacao.avaliacao) {
        return restauranteAtual;
    } else {
        return restauranteComMelhorAvaliacao;
    }
});

console.log("Restaurante: " + restauranteMelhorAvaliado.nome 
+ ", Avaliação: " + restauranteMelhorAvaliado.avaliacao.toFixed(1));