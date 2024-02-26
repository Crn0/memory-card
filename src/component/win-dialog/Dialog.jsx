/* eslint-disable react/prop-types */
export default function Dialog({score, handleWin}) {
    return (
        <div className='grid place-center-center pad1rem font-white hex-820347'>
          <h1>YOU WIN</h1>
          <p className='.font2rem bold'>Score: {score.best}</p>
          <button onClick={() => handleWin()}>Restart</button>
        </div>
    )
}