
const pokemonList = document.getElementById('pokemonsList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151;
const limit = 10;
let offset = 0;



const loadPokemonsItens = (limit, offset) => {

    pokeApi.getPokemons(limit, offset)
        .then((pokemons = []) => {
            const newHtml = pokemons.map(
                (pokemon) => `
            <li class="pokemon  ${pokemon.type}" >
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
    
    
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
    
                    <img 
                        src="${pokemon.photoURL}" 
                        alt=${pokemon.name}>
                </div>  
            </li>
        `).join('');    
        pokemonList.innerHTML += newHtml
        })
}

loadPokemonsItens(limit, offset);

loadMoreButton.addEventListener('click', () => {
    offset += limit;

    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonsItens(newLimit, offset)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonsItens(limit, offset);
    }
})