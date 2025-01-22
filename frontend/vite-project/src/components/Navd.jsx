import { Link } from "react-router-dom"
import { useAuthStore } from "../lib/useAuthStore.js"
import { MessagesSquare } from 'lucide-react';


export const Navd = () => {
const {authuser,logout} = useAuthStore()
  
  //const {logout} = useAuthStore()
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <MessagesSquare className="h-8 w-8 text-purple-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
            </div>
            <div className="flex items-baseline">
              <span className="text-white text-xl font-bold">Texter</span>
              <span className="text-purple-500 text-xl font-bold">.cc</span>
            </div>
          </Link>
        </div>
        
        {!authuser ? (
          <div className="flex items-center space-x-4">
            <Link
              to="/LoginPage"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/SignupPage"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
        ):(
          <div className="flex items-center space-x-4">
           <Link
              onClick={() => {
                     logout();
                   }
                   }
              to="/LoginPage"
               className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Logout
            </Link>
        </div>

        )}
       
      </div>
    </div>
  </nav>
  //   <div className="navbar bg-trasparent p-5 ">
  //   <div className="flex-none">
  //     <button className="btn btn-square btn-ghost">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         className="inline-block h-5 w-5 stroke-current">
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="2"
  //           d="M4 6h16M4 12h16M4 18h16"></path>
  //       </svg>
  //     </button>
  //   </div>
  //   <div className="flex-1">
  //     <a className="btn btn-ghost text-3xl">TEXTER <sub>.cc</sub></a>
  //   </div>
  //   <div className="flex-none">
  //     <button onClick={() => {
  //       logout();
  //     }
  //     } className="btn btn-square btn-ghost">
  //      Logout
  //      <Link to="/LoginPage"></Link>
  //     </button>
  //   </div>
  //   <div className="flex-none">
  //     <button className="btn btn-square btn-ghost">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         className="inline-block h-5 w-5 stroke-current">
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="2"
  //           d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
  //       </svg>
  //     </button>
     
  //   </div>
  // </div>
  )
}
