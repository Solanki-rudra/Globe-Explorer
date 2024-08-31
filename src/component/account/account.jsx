import React from 'react'
import { useAuth } from '../auth/auth'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const { user,logout } = useAuth()
  const navigate = useNavigate()
  function handleLogout() {
    logout()
    navigate('/')
  }
  return (
    <div className='pt-14 p-4 bg-slate-700 min-h-screen'>
      <div className='mt-14 lg:m-14 p-10 rounded flex flex-col gap-3 bg-slate-800'>
        <h1 className='text-white'>Hello 👋, Dear {user ? user : 'user'}.</h1>
        <h1 className='text-white'>Your details are personal, keep them personal.</h1>
        {
          user && 
          <button onClick={handleLogout} className='bg-blue-800 w-fit px-5 rounded text-white py-2 my-2'>Logout</button>
        }
      </div>
    </div>
  )
}

export default Account
