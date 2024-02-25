/* eslint-disable react/prop-types */
export default function ScoreBoard({score}) {
    return (
        <>
            <p>Score: {score.current}</p>
            <p>Best Score: {score.best}</p>
        </>
    )
}