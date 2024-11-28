import React from "react";
import vector from "../assets/Vector.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={vector} alt="menu" />
        <h1 className="header__h">TEST</h1>
      </div>
      <div className="header__right">
        <div className="header__right-price">10,303.56 ₽</div>
        <div className="header__right-plus">+</div>
      </div>
    </div>
  );
};

export default Header;