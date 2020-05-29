import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './Online.css';

const Online = ({ users }) => (
  <div className="Online">{
      users
        ? (
          <div>
            <h2> Online  </h2>

            <div className="activeContainer">
              <h3>
                {users.map(({name}) => (
                  <div key={name} className="activeUser">
                    <img alt="onlineIcon" className="onlineIcon" src={onlineIcon}/> {name} 

                  </div>
                ))}
              </h3>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default Online;

