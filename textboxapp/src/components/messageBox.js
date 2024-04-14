import React from 'react';
import './messageBox.css'

const MessageBox = ({ text, isRight }) => {
  console.log(isRight)
  if (isRight){
    return (
      <div className='wrapper-div-right'>
        <div className="message-box">
          <p>{text}</p>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className='wrapper-div-left'>
        <div className="message-box">
          <p>{text}</p>
        </div>
      </div>
    );
  }
};

export default MessageBox