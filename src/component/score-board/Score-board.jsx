/* eslint-disable react/prop-types */
export default function ScoreBoard({score, pokemonList}) {
    return (
        <div className="flex align-items-center space-around">
            <p className="font2rem bold btn-hover">Score: {score.current}/{pokemonList.length}</p>
            <p className="font2rem bold">Best Score: {score.best}</p>
        </div>
    )
}