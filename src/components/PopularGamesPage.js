import React from 'react';
import chev from '../assets/chev.png';
import search from '../assets/ico-search.png';
import arrow from '../assets/arrow.png';
import game1 from '../assets/game1.png';
import game2 from '../assets/game2.png';
import game3 from '../assets/game3.png';
import game4 from '../assets/game4.png';
import game5 from '../assets/game5.png';
import game6 from '../assets/game6.png';
import game7 from '../assets/game7.png';
import game8 from '../assets/game8.png';
import game9 from '../assets/game9.png';
import game10 from '../assets/game10.png';
import game11 from '../assets/game11.png';
import { useNavigate } from 'react-router-dom'

const PopularGamesPage = () => {

    const navigate = useNavigate();
    const handleChevClick = () => {
      navigate('/');
    }

  return (
    <div className='popularGames'>
      <div className="popular__header">
        <img 
        src= {chev} 
        alt="chevron" 
        onClick={handleChevClick}
        />
        <h1>Popular Games</h1>
      </div>
      <div className="popular__fields">
        <div className="popular__fields-top">
            <div className="search__block">
                <img src={search} alt="" />
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
        <div className="game__1">
            <img src={game1} alt="game1" />
            <img src={game2} alt="game2" />
            <img src={game3} alt="game3" />
        </div>
        <div className="game__2">
            <img src={game4} alt="game4" />
            <img src={game5} alt="game5" />
            <img src={game6} alt="game6" />
        </div>
        <div className="game__3">
            <img src={game6} alt="game6" />
            <img src={game7} alt="game7" />
            <img src={game8} alt="game8" />
        </div>
        <div className="game__4">
            <img src={game9} alt="game9" />
            <img src={game10} alt="game10" />
            <img src={game11} alt="game11" />
        </div>
      </div>
      <div className="games__button-block">
        <button>Load More</button>
        <p>Displaying 12 of 30 games</p>
      </div>
    </div>
  );
};

export default PopularGamesPage;