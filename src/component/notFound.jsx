import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='p-14 bg-slate-700 min-h-screen flex flex-col items-center'>
      <h1 className='text-center text-white mb-2 text-lg'>404 - Page Not Found</h1>
      <Link className='bg-blue-600 p-2 px-4 rounded border-2 border-blue-500 text-white' to='/'>Home</Link>
    </div>
  )
}

export default NotFound
