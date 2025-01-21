//import React from 'react';
import { useState } from "react";
import { useAuthStore } from "../lib/useAuthStore.js";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";


const SignUpPage = () => {

const [form,setForm]=useState({
  email:'',
  password:'',
  fullName:''
})
const {isSigningUp,signup}=useAuthStore()
const validateForm=()=>{
  if(!form.fullName.trim()) return toast.error('Please enter your full name')
  if(!form.email.trim()) return toast.error('Please enter your email')
  if(!form.password.trim()) return toast.error('Please enter your password')
  return true
}
const handleSubmit=async(e)=>{
  e.preventDefault()
  const success=validateForm();
  if(success==true){
  await signup(form)}
}


  return (
    <>

      <div className="opacity-25  mt-8 py-2  w-2/4 grid-col-3 flex hover:flex-col items-center justify-center
      hover:opacity-100 hover:mt-8 hover:py-2  hover:w-2/4 hover:grid-col-3 hover:flex hover:flex-col hover:items-center hover:justify-center">
        <section className=" flex items-center justify-center ">
          <div className="flex flex-col  items-center justify-center px-6 py-8 mx-auto  lg:py-0">

            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}  action="#">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" value={form.email}  onChange={(e)=>setForm({...form,email:e.target.value})}  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" value={form.password}  onChange={(e)=>setForm({...form,password:e.target.value})}  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                    <input type="text"  id="fullname" placeholder="name" value={form.fullName}  onChange={(e)=>setForm({...form,fullName:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                    </div>
                  </div>
                  <button type="submit" disabled={isSigningUp} className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    {isSigningUp?(
                      <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing up...
                      </>
                    )
                   :( "Create an account")}</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>



    </>

  );
}

export default SignUpPage;
