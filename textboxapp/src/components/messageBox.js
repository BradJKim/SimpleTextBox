import React from 'react';
import './messageBox.css'

const MessageBox = ({ text }) => {
  return (
    <div className="message-box">
      <p>{text}</p>
    </div>
  );
};

export default MessageBox;
