import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import style from '../src/App.css'
import FooterNav from './components/FooterNav';
import {HashRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import PopularGamesPage from './components/PopularGamesPage';


function App() {

  const location = useLocation();
  const hideHeader = location.pathname === '/popular-games'

  return (
      <div className="App">
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/popular-games" element={<PopularGamesPage />} />
        </Routes>
        <Footer />
        <FooterNav />
      </div>
  );
}

export default App;
