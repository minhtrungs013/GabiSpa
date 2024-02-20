import React, { createContext, useContext, useState } from 'react';
import Message from '../UI/Message'; 


const MessageContext = createContext();

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};

export const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
  
    const showMessage = (type, content) => {
      const newMessage = { id: Date.now(), type, content };
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
    };
  
    const hideMessage = (id) => {
        console.log(id);
      setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
    };
  
    return (
      <MessageContext.Provider value={{ messages, showMessage, hideMessage }}>
        <div className="messages-container">
          {messages.map((msg) => (
            <Message
              key={msg.id}
              id={msg.id}
              type={msg.type}
              message={msg.content}
              onHide={() => hideMessage(msg.id)}
            />
          ))}
        </div>
        {children}
      </MessageContext.Provider>
    );
  };