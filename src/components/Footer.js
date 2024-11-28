import React from "react";
import mga from "../assets/mga.png";
import care from "../assets/care.png";
import care2 from "../assets/care2.png";

const Footer = () => {
  return (
    <>
    <div className="footer__info">
      <div className="footer__info-top">
        <div className="footer__info-left">
          <p>About</p>
          <p>Auction Terms</p>
          <p>Casino Bonus Terms</p>
          <p>Sportsbook Bonus Terms</p>
          <p>Terms & Conditions</p>
          <p>Security & Privacy</p>
        </div>
        <div className="footer__info-right">
          <p>Payments</p>
          <p>Certificates</p>
          <p>Game Explanations</p>
          <p>Responsible Gaming</p>
          <p>Condor-Affiliates</p>
        </div>
      </div>
      <div className="footer__info-bot">
        <div className="footer__left">
          <p>
            "GAMBLING CAN BE <br /> ADDICTIVE, PLEASE PLAY <br /> RESPONSIBLY."
          </p>
        </div>
        <div className="footer__right">
          <img src={mga} alt="mga" />
          <img src={care2} alt="care2" />
          <img src={care} alt="" />
        </div>
      </div>
    </div>
    <div className="footer__copyright">
        <p>Copyright© 2024</p>
    </div>
    </>

  );
};

export default Footer;
