import {useState} from 'react'
import {useAuthStore} from '../lib/useAuthStore.js'
import { Loader2 } from 'lucide-react'


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
    },3000)
    
  }

  return (
    <>
 

     <div className="flex flex-col   w-2/4 h-3/4 items-center justify-center bg-red-100"> 

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
     </div>


    </>
  )
}

export default LoginPage