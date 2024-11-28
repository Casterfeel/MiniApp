import React from 'react';
import PopularGames from './PopularGames';
import NewGames from './NewGames';
import CasinoGames from './CasinoGames';
import SportsGames from './SportsGames';
import search from '../assets/ico-search.png'

const Main = () => {
  return (
    <div className="main">
      <div className="main__welcome-block">
        <div className="main__welcome-info">
          <h1>Welcome Bonus</h1>
          <p>100% up to 2 500 ₽ + 100 Free <br />Spins</p>
        </div>
        <button className="main__btn">Read More</button>
      </div>

      <div className="main__search-block">
        <div className="main__search">
          <img src={search} alt="search" />
        </div>
        <div className="main__pars">
          <p className="yellow_par">All Games</p>
          <p className="other_par">New Games</p>
          <p className="other_par">All slots</p>
        </div>
      </div>

      <PopularGames />
      <NewGames />
      <CasinoGames />
      <SportsGames />
    </div>
  );
};

export default Main;
