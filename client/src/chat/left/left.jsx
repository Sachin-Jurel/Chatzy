import React from 'react'
import LeftTools from './LeftTools'
import SearchBox from '../../components/Search'
import ChatUsers from '../../components/ChatUsers'
import UseConversation from '../../Manage/UseConversation'

const Left = () => {
  
  const { selectedConversation } = UseConversation();
  return (
    <div className={`w-full sm:w-[50%] lg:w-[30%] ${selectedConversation ? "hidden sm:block" : ""} bg-slate-950 text-white `}>
      <div>
        <LeftTools />
      </div>

      <div className='w-full flex flex-col'>
        <div className='p-2'>
          <SearchBox />
        </div>

        <div className='flex-1 overflow-y-auto overflow-x-hidden'>
          <ChatUsers />
        </div>
      </div>
    </div>
  )
}

export default Left
