import React, { useState } from "react";
import chev from "../assets/chev.png";
import search from "../assets/ico-search.png";
import arrow from "../assets/arrow.png";
import game1 from "../assets/game1.png";
import game2 from "../assets/game2.png";
import game3 from "../assets/game3.png";
import game4 from "../assets/game4.png";
import game5 from "../assets/game5.png";
import game6 from "../assets/game6.png";
import game7 from "../assets/game7.png";
import game8 from "../assets/game8.png";
import game9 from "../assets/game9.png";
import game10 from "../assets/game10.png";
import game11 from "../assets/game11.png";
import { useNavigate } from "react-router-dom";

const initialGames = [
  game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game1
];


const additionalGames = [
  game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game1, game2, game3, game4, game5, game6, game7, game8
];

const PopularGamesPage = () => {
  
  const [games, setGames] = useState(initialGames);
  
  const [gamesCount, setGamesCount] = useState('Displaying 12 of 30 games');
  const [isLoaded, setIsLoaded] = useState(false);

  
  const handleLoadMoreClick = () => {
    if (isLoaded) return;
    setGames(prevGames => {
      const newGames = [...prevGames, ...additionalGames]; 
      return newGames;
    });

    
    setGamesCount('Displaying 30 of 30 games');
    setIsLoaded(true)
  };

  const navigate = useNavigate();

  
  const handleChevClick = () => {
    navigate('/');
  }

  return (
    <div className='popularGames'>
      <div className="popular__header">
        <img 
          src={chev} 
          alt="chevron" 
          onClick={handleChevClick}
        />
        <h1>Popular Games</h1>
      </div>

      <div className="popular__fields">
        <div className="popular__fields-top">
          <div className="search__block">
            <img src={search} alt="search" />
            <p>Search Game</p>
          </div>
          <div className="green__block">
            <p>I’m Feeling Lucky</p>
          </div>
        </div>
        <div className="popular__fields-bot">
          <div className="field__left">
            <p>Providers</p>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="field__right">
            <p>A-Z</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>

      <div className="popular__games">
        
        {Array.from({ length: Math.ceil(games.length / 3) }).map((_, index) => (
          <div className={`game__row`} key={index}>
            {games.slice(index * 3, (index + 1) * 3).map((game, i) => (
              <img key={i} src={game} alt={`game${index * 3 + i + 1}`} />
            ))}
          </div>
        ))}
      </div>

      <div className="games__button-block">
        <button onClick={handleLoadMoreClick}>Load More</button>
        <p>{gamesCount}</p>
      </div>
    </div>
  );
};

export default PopularGamesPage;