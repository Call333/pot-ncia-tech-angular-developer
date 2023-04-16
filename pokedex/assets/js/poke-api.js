
const pokeApi = {};

const convertPokeApiDetailToPokemon = (pokeDetail) => {
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name;
    pokemon.number = pokeDetail.id;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)    ;
    const [type] = types

    pokemon.types = types;
    pokemon.type = type;

    pokemon.photoURL = pokeDetail.sprites.other.home.front_default;
    
    return pokemon
}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = ( limit = 21, offset = 0) => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => responseJson.results)
        .then((pokemons) => pokemons.map( pokeApi.getPokemonsDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error))
}
