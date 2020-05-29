import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let sentByCurrentUser = false;
  let sentByAnnouncer = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    sentByCurrentUser = true;
  }

  if(user === "Announcer") {
    sentByAnnouncer = true;
  }

  if (sentByCurrentUser) return (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
    )

  else if (sentByAnnouncer) return (
    <div className="messageContainer justifyMiddle">
      <div className="messageBox backgroundRed">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
    )

    else return (
      <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10 ">{user}</p>
    </div>
    )

    
  // return (
  //   sentByCurrentUser? (
  //       <div className="messageContainer justifyEnd">
  //         <p className="sentText pr-10">{trimmedName}</p>
  //         <div className="messageBox backgroundBlue">
  //           <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
  //         </div>
  //       </div>
  //       )

  //       : (
  //         <div className="messageContainer justifyStart">
  //           <div className="messageBox backgroundLight">
  //             <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
  //           </div>
  //           <p className="sentText pl-10 ">{user}</p>
  //         </div>
  //       )
  // );
}

export default Message;