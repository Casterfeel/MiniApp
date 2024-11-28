import React from "react";
import slot1 from '../assets/slot1.png';
import slot2 from '../assets/slot2.png';
import slot3 from '../assets/slot3.png';
import slot4 from '../assets/slot4.png';
import slot5 from '../assets/slot5.png'

const FooterNav = () => {
    return (
        <div className="blocks">
            <div className="block1">
                <img src= {slot1} alt="slot1" />
                <p>Slots</p>
            </div>
            <div className="block2">
                <img src= {slot2} alt="slot2" />
                <p>Casino</p>
            </div>
            <div className="block3">
                <img src={slot3} alt="slot3" />
                <p>Promo</p>
            </div>
            <div className="block4">
                <img src= {slot4} alt="slot4" />
                <p>Sport </p>
            </div>
            <div className="block5">
                <img src= {slot5} alt="slot5" />
                <p>Profile</p>
            </div>
        </div>
    )
}

export default FooterNav;