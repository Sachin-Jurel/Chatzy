import React from 'react'
import Left from './left/left'
import Right from './right/right'

const ChatPage = () => {
  return (
    <div className='h-screen flex'>
      <Left />
      <Right />
    </div>
  )
}

export default ChatPage
