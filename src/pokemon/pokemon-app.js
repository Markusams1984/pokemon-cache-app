import { getPokemonById } from "./actions/get-pokemon-by-id.action";

/**
 * Esta funcion crea ka aplicacin en el div enviado como parametro
 * @param {HTMLDivElement} element 
 */
export const PokemonApp = async( element ) => {

    let pokemonId = 1;

    document.title = 'Pokemon App';
    const appTitle = document.querySelector('#app-title');
    appTitle && (appTitle.innerHTML = 'Pokemon App');

    // Crear elementos HTML
    const loadingParagraph = document.createElement('p');
    const pokemonImage = document.createElement('img');
    const nextPokemonButton = document.createElement('button');
    const previousPokemonButton = document.createElement('button');
    
    // Configuraciones de los elementos
    loadingParagraph.textContent = 'Loading...';
    nextPokemonButton.textContent = 'Next Pokemon';
    previousPokemonButton.textContent = 'Previous Pokemon';
    
    // Agregar elementos al DOM
    element.appendChild( loadingParagraph );
    element.appendChild( pokemonImage );
    element.appendChild( nextPokemonButton );
    element.appendChild( previousPokemonButton );
    

    // Listener eventos
    nextPokemonButton.addEventListener( 'click', async() => {
        loadingParagraph.textContent = 'Loading next pokemmon...'; 
        pokemonId++;
        renderPokemon( await getPokemonById( pokemonId ) );
     } );
    
     previousPokemonButton.addEventListener( 'click', async() => {
        if ( pokemonId === 1 ) return;
        loadingParagraph.textContent = 'Loading previous pokemmon...'; 
        pokemonId--;
        renderPokemon( await getPokemonById( pokemonId ) );
     } );

    // Renderizar el pokemon
    const renderPokemon = ( pokemon ) => {
        pokemonImage.src = pokemon.image;
        loadingParagraph.textContent = `Pokemon #${ pokemon.id } ${ pokemon.name }`;

    };
    // Hacer la peticion HTTP para obtener el pokemon
    

renderPokemon( await getPokemonById( pokemonId ) )  ;

}