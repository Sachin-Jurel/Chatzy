import React from "react";
import logo from "../assets/ChatLogo.png";
import { MessageCircle, Sparkles, Send } from "lucide-react";

const About = () => {
  return (
    <div className="w-[70%] h-full flex flex-col items-center justify-center text-white bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">

      {/* Floating Icons */}
      <MessageCircle className="absolute top-12 left-16 w-10 h-10 text-slate-600 animate-pulse drop-shadow-lg" />
      <Sparkles className="absolute bottom-16 right-20 w-8 h-8 text-yellow-400 animate-bounce" />
      <Send className="absolute top-32 right-24 w-10 h-10 text-purple-500 animate-spin-slow" />

      {/* Logo */}
      <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 animate-fade-in">
        <img src={logo} alt="Chat Logo" className="w-28 h-28 object-contain" />
      </div>

      {/* Title */}
      <h1 className="mt-6 text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-slide-down">
        Welcome to Chatzy 👋
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg mt-3 animate-fade-in-delayed">
        Select a chat to start messaging.
      </p>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 w-[300px] h-[300px] bg-purple-500/30 blur-[130px] rounded-full"></div>
    </div>
  );
};

export default About;
