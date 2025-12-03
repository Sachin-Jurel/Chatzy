import React, { useContext } from "react";
import UseConversation from "../../Manage/UseConversation";
import {SocketContext} from "../../context/SocketContext.jsx";

const RightPanelHeader = () => {
  const {selectedConversation} = UseConversation();
  const {socket, onlineUsers} = SocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);
  return (
    <div
      className="
        w-full px-4 py-3 border-b fixed flex items-center justify-between
        bg-white border-gray-200
        dark:bg-slate-900 dark:border-slate-800
      "
    >
      {/* Left: Avatar + Name */}
      <div className="flex items-center gap-3">
        <div className={`avatar ${isOnline? "avatar-online" : ""}`}>
          <img
          src={ selectedConversation?.avatar || "https://i.pravatar.cc/150?img=3"}
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            { selectedConversation?.name || "Loading..." }
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            { isOnline ? "Online" : "Offline" }
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightPanelHeader;
