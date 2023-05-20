const restaurantes = [
    {
      nome: 'Bar do Zé', 
      avaliacao: parseFloat('3.5')
    },
    {
      nome: 'Pizza Boa', 
      avaliacao: parseFloat('4.2')
    }
  ];

  if(restaurantes[0].avaliacao > restaurantes[1].avaliacao) {
    console.log(`Restaurante: ${restaurantes[0].nome}, Avaliação: ${restaurantes[0].avaliacao.toFixed(1)}`);
  } else {
    console.log(`Restaurante: ${restaurantes[1].nome}, Avaliação: ${restaurantes[1].avaliacao.toFixed(1)}`);
  }