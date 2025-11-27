import React from "react";
import GetMessages from "../../context/GetMessages.js";
import Loading from "../../components/Loading.jsx";
import { useContext } from "react";
import { UserContext } from "../../context/userContext.jsx";

const Messages = () => {
  const { messages, loading } = GetMessages();
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {messages.map((message) => (
            <div
              className={`chat ${
                message.senderId === user._id ? "chat-end" : "chat-start"
              }`}
            >
              <div className={`chat-bubble ${message.senderId === user._id ? "chat-bubble-primary" : "chat-bubble-secondary"}`}>
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
