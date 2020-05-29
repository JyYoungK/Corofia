import React from "react";

function Lobby(){
  const [ count, setCount ] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p> Clicked {count} times </p>
      <button onClick={increment}> Click Me</button>
    </div>
  );
}

export default Lobby;

// import React, { useState, useEffect } from "react";
// import queryString from 'query-string';
// import io from "socket.io-client";
// import Online from '../Online/Online';
// import Messages from '../Messages/Messages';
// import ChatBar from '../ChatBar/ChatBar';
// import Input from '../Input/Input';
// import './Lobby.css';
// import Game from '../Game/Game';
// let socket;
// const Lobby = ({ location }) => {
//   const [name, setName] = useState([]);
//   const [room, setRoom] = useState('');
//   const [users, setUsers] = useState([]);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [night, setNight] = useState(false);
//   const [nightCounter, setNightCounter] = React.useState(10);
//   const [showText, setShowText] = useState(true);
//   const [round, setRound] = React.useState(0);
//   let host;
//   const ENDPOINT = 'localhost:5000';
//   // const ENDPOINT = 'https://corofia.herokuapp.com/'; //Deploying Front End using heroku

//   useEffect(() => {
//     const { name, room } = queryString.parse(location.search);
//     socket = io(ENDPOINT);
//     setRoom(room);
//     setName(name);

//     socket.emit('join', { name, room }, (error) => {
//       if(error) {
//         alert(error);
//       }
//     });
//   }, [ENDPOINT, location.search]);
  
//   useEffect(() => {
//     socket.on('message', message => {
//       setMessages(messages => [ ...messages, message ]);
//     });
    
//     socket.on("roomData", ({ users }) => {
//       setUsers(users);
//     });

// }, []);

//   useEffect(() => { //changes to day
//     if (night) {
//       const timer = nightCounter > 0 && setInterval(() => setNightCounter(nightCounter - 1), 1000);
//       if (nightCounter === 0) {
//         setRound(round+1)
//         setShowText(!showText);
//         setNight(false);
//         setNightCounter(10);
//       }
//       return () => clearInterval(timer);
//     }
//   }, [night, nightCounter])

//   const sendMessage = (event) => {
//     event.preventDefault(); // prevents page reloading

//     if(message) {
//       socket.emit('sendMessage', message, () => setMessage(''));
//       socket.emit("subscribeToTimer", 6000);
//     }
//   }

//   const gameStart = () => {
//     socket.emit("gameStart");
//   };

//   users.map((user, i) => {
//     if (i === 0) {
//       host = user.name;
//       return host;
//     }
//     else{
//         return null;
//     }
//   })

//   return (
//         <div>
//               <div className="lobbyContainer">
//                 <Online users={users}/>
//                   {showText 
//                     ? <div className="chatLobby">
//                         <ChatBar room={room} night={night} setShowText={setShowText} />
//                         <Messages messages={messages} name={name} />
//                         <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
//                       </div>
//                     : <div className="chatLobby">
//                         <ChatBar room={room} showText={showText} setShowText={setShowText} />
//                         <Game />
//                       </div> 
//                   }
//               </div>
//               <div className="buttonContainer">
//                 <div className = "leaveContainer"> 
//                     <a href="/"><button className="leaveButton" >LEAVE </button></a>
//                 </div>
//                 <div className = "startContainer">
//                       {/* <Link onClick ={event => (users.length < 2 || name !== host) ? event.preventDefault() : null} to = {window.location.replace("https://www.w3schools.com")}> */}
//                     {round === 0 
//                       ? <button className="startButton" onClick={event => (name !== host) ? event.preventDefault() : gameStart() + setRound(round+1) + setNight(true)}>GAME START ({users.length})</button>
//                       : <button className="startButton" > Day {round} START </button>
//                     }
//                 </div>
//               </div>
//         </div>
//   );
// }
// export default Lobby;