
const pokemonCache = new Map();

/**
 * Fetch a pokemon by its id
 * @param {number} id
 * @return {Promise<Object>} Pokemon data
 */
export const getPokemonById = async( id ) => {

    if( pokemonCache.has( id ) ) {
        console.log( 'Fetching from cache' );
        return pokemonCache.get( id );
    }

    const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${ id }` );
    const data = await response.json();
    const pokemonData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,

    }
    
pokemonCache.set( id, pokemonData );

return pokemonData;
}
