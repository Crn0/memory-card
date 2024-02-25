/* eslint-disable react/prop-types */
import Card from "../card/Card";

export default function RenderCards({pokemonList, handlePlay}) {
   
    return (
      <>
       {pokemonList.map(pokemon => 
            <Card 
                key={pokemon.id}
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
                id={pokemon.id}
                isClicked={pokemon.isClicked}
                handlePlay={handlePlay}
            />
        )}
      </>
    )
  }
  