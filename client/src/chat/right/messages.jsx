import React, { useEffect, useRef } from "react";
import GetMessages from "../../context/GetMessages.js";
import Loading from "../../components/Loading.jsx";
import { useContext } from "react";
import { UserContext } from "../../context/userContext.jsx";
import GetSocketMessage from "../../context/GetSocketMessage.jsx";

const Messages = () => {
  const { messages, loading } = GetMessages();
  const { user } = useContext(UserContext);
  const lastMessage = useRef();
  GetSocketMessage();

  useEffect(() => {
    if (lastMessage.current) {
      lastMessage.current.scrollIntoView();
    }
  }, [messages]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="pb-10">
          {messages.map((message) => (
            <div
              key={message._id}  
              ref={lastMessage}
              className={`chat ${
                message.senderId === user?._id ? "chat-end" : "chat-start"
              }`}
            >
              <div
                className={`chat-bubble ${
                  message.senderId === user?._id
                    ? "bg-blue-950 rounded-bl-xl text-md text-white "
                    : "bg-slate-600 text-md text-white rounded-br-xl"
                } rounded-t-xl`}
              >
                {message.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Messages;
