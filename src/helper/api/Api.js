import { v4 as uuid } from 'uuid';

export default async function GetPokemon() {
    try {
        const url = 'https://pokeapi.co/api/v2/generation/4';
        const response = await fetch(url, {
            mode: 'cors'
        });

        if(response.status === 200) {
            const result = await response.json();
            const urlArray = await result['pokemon_species'].slice(0, 20);

            const fetchNamesAndImages = await urlArray.map((pokemon) => GetNameAndImage(pokemon.name));
            const promiseAll = await Promise.all(fetchNamesAndImages); 
           
            const pokemonTeam = await promiseAll.map((pokemon) => {
                const uniqueId = uuid();

                const {name, sprites: {
                    'front_default': imageUrl,
                }} = pokemon;


                return {name, imageUrl, id: uniqueId, isClicked: false};
            });

            return pokemonTeam
        }
    } catch (error) {
        console.log(error)
    }
}


async function GetNameAndImage(name) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url, {
        mode: 'cors',
    });

    if(response.status === 200) {
        const result = await response.json();

        return result;
    }

  } catch (error) {
        console.log(error)
  }
}