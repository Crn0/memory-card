/* eslint-disable react/prop-types */
export default function ScoreBoard({score, pokemonList}) {
    return (
        <>
            <p className="font2rem bold">Score: {score.current}/{pokemonList.length}</p>
            <p className="font2rem bold">Best Score: {score.best}</p>
        </>
    )
}