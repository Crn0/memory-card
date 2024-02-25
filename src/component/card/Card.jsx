/* eslint-disable react/prop-types */
export default function Card({name, imageUrl, id, isClicked, handlePlay, type = 'button'}) {
    return (
        <button type={type} onClick={() =>  handlePlay(isClicked, id)}>
            <img src={imageUrl} alt={name}/>
            <p>{name}</p>
        </button>
    )
}