/* eslint-disable react/prop-types */
export default function Dialog({score, handleWin,handleRestart}) {
    return (
        <div className='grid place-center-center margin-auto pad1rem font-white hex-820347'>
          <h1>YOU WIN</h1>
          <p className='font2rem bold'>Score: {score.best}</p>
          <div className="flex gap">
            <button className="pad1rem btn-hover" onClick={() => handleWin()}>Play Again</button>
            <button className="pad1rem btn-hover" onClick={() => handleRestart()}>Restart</button>
          </div>
        </div>
    )
}