/* eslint-disable react/prop-types */

const buttons = [
    {
        mode: 'Easy',
        cards: 4,
    },
    {
        mode: 'Medium',
        cards: 15,
    },
    {
        mode: 'Hard',
        cards: 20,
    },
    {
        mode: 'Extreme',
        cards: 36,
    }
]

export default function Difficulty({setDifficulty}) {
    return (
        <div className="flex self-center pad1rem gap hex-820347">
            {buttons.map((button) => {
                return (
                    <button 
                        key={button.mode} 
                        className="btn-hover"
                        onClick={() => setDifficulty(button.cards)}
                    >
                        {button.mode}
                    </button>
                )
            })}
        </div>
    )
}