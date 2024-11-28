import React from 'react';
import icoPremium from '../assets/ico-premium.png';
import gameCard from '../assets/game-card.png';
import image21 from '../assets/21.png';
import image311 from '../assets/311.png';
import bot1 from '../assets/bot1.png';
import bot2 from '../assets/bot2.png';
import bot3 from '../assets/bot3.png';

const NewGames = () => {
  return (
    <div className="new__games-block">
      <div className="new__games-head">
        <div className="new__left">
          <img src={icoPremium} alt="diamond" />
          <h1>New games</h1>
        </div>
        <div className="new__right">
          <p className="view">View all</p>
        </div>
      </div>

      <div className="new__games-blocks">
        <div className="new__top">
          <img src={gameCard} alt="card1" />
          <img src={image21} alt="card2" />
          <img src={image311} alt="card3" />
        </div>
        <div className="new__bot">
          <img src={bot1} alt="card4" />
          <img src={bot2} alt="card5" />
          <img src={bot3} alt="card6" />
        </div>
      </div>
    </div>
  );
};

export default NewGames;
