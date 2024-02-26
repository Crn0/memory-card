import { useEffect, useState } from 'react'
import Pokeball from './assets/pokeball.jpg'
import Header from './component/header/Header';
import Main from './component/main/Main';
import ScoreBoard from './component/score-board/Score-board';
import GetPokemon from './helper/api/Api'
import RenderCards from './component/render-cards/Render-cards';
import Shuffle from './helper/shuffle/shuffle';
import Dialog from './component/win-dialog/Dialog';
import Footer from './component/footer/Footer';
import './style/App.css'

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [score, setScore] = useState({current: 0, best: 0,});
  const isWin = score.current === pokemonList.length;
  
  useEffect(() => {
    const control = new AbortController();

    GetPokemon().then((data) => {
      if(!control.signal.aborted) {
        
        setPokemonList(data);
      }
    });

    return () => control.abort();
  }, []);

  if(pokemonList.length === 0) {
    return (
      <>
        <div className='grid height-100vh place-center-center position-relative'>
          <img className='animation' src={Pokeball} height={"150px"} alt="pokeball" />
        </div>
      </>
    )
  }

  const handlePlay = (isClicked, id) => {
    const newPokemon = [...pokemonList].map((pokemon) => {
      // check for the clicked cards id
      // if equal set the isClicked property to true
      // then return it as a new object
      if(pokemon.id === id) {
    
        return {...pokemon, isClicked: pokemon.isClicked = true}
      }

      return pokemon;
    })
    const randomPokemon = Shuffle(newPokemon)
  
    if(isClicked) {
      // If the card has been clicked twice
      // Init a new array of cards
      // MAP through the cards 
      // SET the card's isClicked property to false RETURNING a new object
      const newPokemonList = pokemonList.map((pokemon) => {
        return {...pokemon, isClicked: false};
      });
      // SET pokemon lists to new object
      setPokemonList(newPokemonList);
      // reset current score
      return setScore({...score, current: 0});
    }

    score.current === score.best && setScore({...score, current: score.current + 1, best: score.best + 1});
    score.current > score.best && setScore({...score, current: score.current + 1, best: score.best + 1});
    score.current < score.best && setScore({...score, current: score.current + 1})
    setPokemonList(randomPokemon);
  };

  const handleWin = () => {
    const newPokemonList = pokemonList.map((pokemon) => {
      return {...pokemon, isClicked: false};
    });
    // SET pokemon lists to new object
    setPokemonList(newPokemonList);
    // reset current score
    setScore({...score, current: 0});
  }

  return (
    <>
      <Header />

      {!isWin ?
        <Main >
          <ScoreBoard 
            score={score}
            pokemonList={pokemonList}
          />

          <RenderCards 
            pokemonList={pokemonList}
            handlePlay={handlePlay}
          />
        </Main>
        :
        <Dialog 
          score={score}
          handleWin={handleWin}
        />
      }
    
      <Footer />
    </>
  )
}

export default App
