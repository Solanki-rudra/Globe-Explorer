import React, { useState } from 'react'
import { useAuth } from './auth'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const {user,login} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state || '/'
  function handleSubmit(e) {
    e.preventDefault()
    if(username.trim()){
      login(username)
      navigate(redirectPath,{replace: true})
    }
  }
  return (
    <div className='pt-14 p-4 bg-slate-700 min-h-screen'>
          <div className="w-full mx-auto bg-white rounded-lg shadow dark:border md:mt-10 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="abc"
                    required
                  />
                </div>
                <button  className='bg-blue-800 w-fit px-5 rounded text-white py-2 my-2'>Login</button>
              </form>
            </div>
            
          </div>
        </div>
  )
}

export default Login
