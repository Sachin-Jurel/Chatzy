import { useState } from "react";
import { Send, Smile, Paperclip } from "lucide-react";

const ChatInput = () => {
  const [message, setMessage] = useState("");
    const handleSendMessage = () => {
        if (message.trim() !== "") {
            console.log("Sending message:", message);
            setMessage("");
        }
    };

  return (
    <div className="w-full p-4 rounded-2xl bg-slate-200">
        <div className="flex items-center gap-3">
            <Smile className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
            <Paperclip className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
            <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}    
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSendMessage}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
            >
                <Send className="w-5 h-5" />
            </button>
        </div>
    </div>
  );
}
export default ChatInput;

