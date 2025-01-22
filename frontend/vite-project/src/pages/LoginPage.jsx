import {useState} from 'react'
import {useAuthStore} from '../lib/useAuthStore.js'
import { Loader2 } from 'lucide-react'

import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';

const LoginPage = () => {
  const [form,setForm] = useState({
    email: '',
    password: ''
  })
const {login ,isLoggingIn} = useAuthStore()
  const handleform = (e) => {
    e.preventDefault()
    setTimeout(() => {
      login(form)
    },300)
    
  }

  return (
    <>
    <div className="min-h-[calc(100vh-64px)] bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <LogIn className="mx-auto h-12 w-12 text-purple-500" />
          <h2 className="mt-6 text-3xl font-bold text-white">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-400">
            Dont have an account?{' '}
            <Link to="/SignUpPage" className="text-purple-500 hover:text-purple-400">
              Sign up
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleform}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}  onChange={(e)=>setForm({...form,email:e.target.value})} 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={form.password}  onChange={(e)=>setForm({...form,password:e.target.value})}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-700 rounded bg-gray-700"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-purple-500 hover:text-purple-400">
                Forgot password?
              </a>
            </div>
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors" disabled={isLoggingIn}>{isLoggingIn?( 
          <>
          <Loader2 className="animate-spin h-5 w-5 mr-3" />
          <span>Logging in...</span>
          </>
        ):("Submit")}</button>
          
        </form>
      </div>
    </div>
 

     {/* <div className="flex flex-col   w-2/4 h-3/4 items-center justify-center bg-red-100"> 

      <div className="w-2/4 h-2/4 ">
     <h1 className=" felx text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Login
      </h1>

      <form onSubmit={handleform} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email"  value={form.email}  onChange={(e)=>setForm({...form,email:e.target.value})}   id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" value={form.password}  onChange={(e)=>setForm({...form,password:e.target.value})}  id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={isLoggingIn}>{isLoggingIn?( 
          <>
          <Loader2 className="animate-spin h-5 w-5 mr-3" />
          <span>Logging in...</span>
          </>
        ):("Submit")}</button>
      </form>
      </div>
     </div> */}


    </>
  )
}

export default LoginPage