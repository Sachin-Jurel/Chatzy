import React, { useEffect, useContext } from 'react';
import { SocketContext } from './SocketContext.jsx';
import UseConversation from '../Manage/UseConversation.js';

const GetSocketMessage = () => {
  const { socket } = SocketContext();
  const { setMessages } = UseConversation();

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (message) => {
      setMessages(prev => [...prev, message]);
    };

    socket.on("getMessage", handleMessage);

    return () => {
      socket.off("getMessage", handleMessage);
    };
  }, [socket]); 

  return null; 
};

export default GetSocketMessage;
