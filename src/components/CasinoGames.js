import React from 'react';
import icoCasino from '../assets/ico-casino.png';
import gameCard from '../assets/game-card.png';
import image21 from '../assets/21.png';
import image311 from '../assets/311.png';
import bot1 from '../assets/bot1.png';
import bot2 from '../assets/bot2.png';
import bot3 from '../assets/bot3.png';

const CasinoGames = () => {
  return (
    <div className="casino__games-block">
      <div className="casino__games-head">
        <div className="casino__left">
          <img src={icoCasino} alt="casino" />
          <h1>Casino games</h1>
        </div>
        <div className="casino__right">
          <p className="view">View all</p>
        </div>
      </div>

      <div className="casino__games-blocks">
        <div className="casino__top">
          <img src={gameCard} alt="card1" />
          <img src={image21} alt="card2" />
          <img src={image311} alt="card3" />
        </div>
        <div className="casino__bot">
          <img src={bot1} alt="card4" />
          <img src={bot2} alt="card5" />
          <img src={bot3} alt="card6" />
        </div>
      </div>
    </div>
  );
};

export default CasinoGames;
