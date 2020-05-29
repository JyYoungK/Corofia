import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {

    const [name, setName] = useState(''); //Initial Value
    const [room, setRoom] = useState(''); 

    return (
                <div>

                    <h1 className="heading"> Corofia </h1>

                    <div> 
                        {/* event.target.value holds the data */}
                        <input placeholder = "Name" className= "joinInput" maxLength="10" type="text" onChange={(event) => setName(event.target.value)} /> 
                    </div> 

                    <div> 
                        <input placeholder = "Room" className= "joinInput mt-20" maxLength="10" type="text" onChange={(event) => setRoom(event.target.value)} /> 
                    </div>
                    
                    {/* If there are no name or room, prevent from clicking join, else transfer to chat site */}
                    <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to = {`/lobby?name=${name}&room=${room}`}>
                        <button className="button mt-20" type="submit"> Create/Join</button>
                    </Link>

                </div>
    )
    
}



export default Join;
