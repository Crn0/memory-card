/* eslint-disable react/prop-types */
export default function Card({name, imageUrl, id, isClicked, handlePlay, type = 'button'}) {
    return (
        <button className="hex-820347 transition-transform" type={type} onClick={() =>  handlePlay(isClicked, id)}>
            <img src={imageUrl} alt={name}/>
        </button>
    )
}