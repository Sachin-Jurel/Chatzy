import { useState } from "react";
import { Send, Smile, Paperclip } from "lucide-react";
import SendMessages from "../../context/SendMessage.js";

const ChatInput = () => {
    const {sendMessages, loading} = SendMessages();
  const [message, setMessage] = useState("");
    const handleSendMessage = async (e) => {
        if (message.trim() !== "") {
            e.preventDefault();
            await sendMessages(message);
            setMessage("");
        }
    };

  return (
    <div className="lg:w-full md:w-[70%] p-4 rounded-2xl bg-slate-800">
        <form action="" onSubmit={handleSendMessage}>
            <div className="flex items-center gap-3">
            <Smile className="w-6 hidden sm:block md:block text-gray-600 cursor-pointer hover:text-white" />
            <Paperclip className="w-6 hidden sm:block md:block text-gray-600 cursor-pointer hover:text-white" />
            <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}    
                placeholder="Type a message..."
                className="flex-1 px-4 sm:px-2 py-2 rounded-xl bg-slate-700 focus:outline-none "
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-slate-900 text-white p-2 rounded-full"
            >
                <Send className="w-5 h-5 " />
            </button>
        </div>
        </form>
    </div>
  );
}
export default ChatInput;

