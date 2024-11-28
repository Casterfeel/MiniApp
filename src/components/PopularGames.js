import React from 'react';
import icoFire from '../assets/ico-fire.png';
import gameCard from '../assets/game-card.png';
import image21 from '../assets/21.png';
import image311 from '../assets/311.png';
import bot1 from '../assets/bot1.png';
import bot2 from '../assets/bot2.png';
import bot3 from '../assets/bot3.png';
import { Link } from 'react-router-dom';

const PopularGames = () => {
  return (
    <div className="popular__games">
      <div className="popular__games-head">
        <div className="popular__left">
          <img src={icoFire} alt="fire" />
          <h1>Popular Games</h1>
        </div>
        <div className="popular__right">
        <Link to="/popular-games" className="view">
            <p className='view_par'>View All</p>
          </Link>
        </div>
      </div>

      <div className="popular__games-blocks">
        <div className="popular__top">
          <img src={gameCard} alt="card1" />
          <img src={image21} alt="card2" />
          <img src={image311} alt="card3" />
        </div>
        <div className="popular__bot">
          <img src={bot1} alt="card4" />
          <img src={bot2} alt="card5" />
          <img src={bot3} alt="card6" />
        </div>
      </div>
    </div>
  );
};


export default PopularGames;
