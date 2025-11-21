import React, { useEffect } from 'react'
import { LogOut } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LeftTools = () => {
  const navigate = useNavigate();
  const Logout = () => {
    try{
      const response = axios.post("http://localhost:5000/logout", {}, {
        withCredentials: true,
      }
      );
    localStorage.removeItem('chat-app-user');
    navigate('/');
    } catch (error) {
      console.error("Error during logout:", error);
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <div className=''>
      <div>
        <LogOut onClick={Logout} className='mb-10 ml-2 h-8 w-8 text-slate-400 rotate-180 hover:text-slate-200 cursor-pointer bottom-0 fixed'/>
      </div>
    </div>
  )
}

export default LeftTools
