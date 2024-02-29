import React from 'react'
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (userProps) => {
  return (
    <div className='bg-gradient-to-br from-gray-800 to-transparent w-screen h-screen flex flex-col items-center justify-center'>
        <div className='h-[80vh] w-[80%] ml-[10%] text-white bg-[rgba(43,47,60)]'>
            <PrettyChatWindow
                username={userProps.user.username}
                secret={userProps.user.secret}
            />
        </div>
    </div>
  )
}

export default ChatsPage