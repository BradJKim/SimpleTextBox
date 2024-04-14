import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import MessageBox from './components/messageBox';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello there!' },
    { id: 2, text: 'How are you?' }
  ]);
  const [inputMessage, setInputMessage] = useState('')
  const [isRight, setIsRight] = useState(true)
  
  useEffect(() => { // updates the textbox container with current messages
    console.log("Messages Updated")  
  }, [messages]); 

  const addMessage = () => {
    const newMessage = {
      id: Math.random(), 
      text: inputMessage,
      isRight: isRight
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputMessage('');
    if(isRight) setIsRight(false)
    else setIsRight(true)
  }

  return (
    <div className="App">
      <div className="TextboxContainer">
        {messages.map(message => (
          <MessageBox key={message.id} text={message.text} isRight={message.isRight}/>
        ))}
      </div>
      <div className="InputBox">
        <label>Enter Text: </label>
        <input type="text" value={inputMessage} onChange={e => setInputMessage(e.target.value)}/>
        <button 
          onClick={addMessage} 
          title="Submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
