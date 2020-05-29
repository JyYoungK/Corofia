import React from 'react';
import gameIcon from '../../icons/gameIcon.png';
import './ChatBar.css';

const chatBar = ({ room, night, setShowText }) => (
  <div className="chatBar">
    <div className="lobbyTitle">
      <h3 className = "lobby">Lobby {room}</h3>
    </div>
    <div className="lobbyToGame">
      {night
        ? <img onClick={() => setShowText(showText => !showText)} src={gameIcon} className="diceEnable" />
        : <img src={gameIcon} className="diceDisable" />
      }
    </div>
  </div>
); 

export default chatBar;