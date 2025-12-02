import React, { useContext } from "react";
import RightPanelHeader from "./RightHeader";
import ChatInput from "./chatInput";
import Messages from "./messages";
import UseConversation from "../../Manage/UseConversation.js";
import About from "../../components/About.jsx";
import { UserContext } from "../../context/userContext.jsx";

const Right = () => {
  const { selectedConversation } = UseConversation();
  const { user } = useContext(UserContext);

  return (
    <>
      {!selectedConversation ? (
        <div className="hidden lg:w-[70%] md:w-[50%] sm:block"><About user={user} /></div>
      ) : (
        <div className="relative bg-slate-100 text-white w-full md:w-[70%]">

          <div className="fixed w-full  top-0 z-10">
            <RightPanelHeader />
          </div>

          <div className="pt-20 pb-20 h-screen overflow-y-scroll hide-scrollbar bg-slate-400 p-5 w-full">
            <Messages />
          </div>

          <div className="fixed w-full md:w-[70%] bottom-0 bg-slate-900 border-t border-slate-700 p-3">
            <ChatInput />
          </div>

        </div>
      )}
    </>
  );
};

export default Right;
