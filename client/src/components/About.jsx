import React from "react";
import logo from "../assets/ChatLogo.png";
import { MessageCircle, Sparkles, Send } from "lucide-react";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden px-4">

      {/* Floating Icons */}
      <MessageCircle className="absolute top-10 left-6 w-8 h-8 sm:w-10 sm:h-10 text-slate-600 animate-pulse" />
      <Sparkles className="absolute bottom-12 right-10 w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 animate-bounce" />
      <Send className="absolute top-32 right-10 w-8 h-8 sm:w-10 sm:h-10 text-purple-500 animate-spin-slow" />

      {/* Logo */}
      <div className="bg-white/10 backdrop-blur-xl p-4 sm:p-6 rounded-3xl shadow-2xl border border-white/10">
        <img src={logo} alt="Chat Logo" className="w-20 h-20 sm:w-28 sm:h-28 object-contain" />
      </div>

      {/* Title */}
      <h1 className="mt-5 sm:mt-6 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-center">
        Welcome to Chatzy 👋
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-base sm:text-lg mt-2 sm:mt-3 text-center">
        Select a chat to start messaging.
      </p>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-purple-500/30 blur-[110px] rounded-full"></div>
    </div>
  );
};

export default About;
