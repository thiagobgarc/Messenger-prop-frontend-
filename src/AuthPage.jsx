import React from 'react'
import axios from 'axios'

const AuthPage = (auth) => {

    const onSubmit = (e) => {
        e.preventDefault()
        const { value } = e.target[0]
        axios.post(
            'http://localhost:3001/auth',
            { username: value },
        )
        auth.onAuth({ username: value, secret: value })
    }

  return (
    <div className='bg-gradient-to-br from-gray-800 to-transparent w-screen h-screen flex flex-col items-center justify-center'>
        <form onSubmit={onSubmit} className='w-[50%] max-w-[350px] p-8 bg-gradient-to-br from-gray-900 to-transparent rounded-lg shadow-md'>
            <h1 className='text-3xl font-sans font-semibold text-[#e8e8e8] pb-4'>
                ChatApp
            </h1>

            <h3 className='text-xl font-sans text-gray-400 pb-5'>
                Sign in to your account
            </h3>

            <div className='relative w-full pb-2'>
                <input type="text" placeholder="Enter username" className='bg-gray-300 text-[#000000] font-sans outline-none border-none rounded-lg px-4 py-3 w-full mb-3'/>
                <button type="submit" className='w-full h-14 text-white bg-purple-500 rounded-lg font-sans border-none outline-none cursor-pointer transition-all duration-300 hover:brightness-[90%]'>Sign in</button>
            </div>
        </form>
    </div>
  )
}

export default AuthPage