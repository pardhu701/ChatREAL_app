//import React from 'react';
import { useState } from "react";
import { useAuthStore } from "../lib/useAuthStore.js";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';
import { Mail, Lock, User, UserPlus } from 'lucide-react';


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

<div className="min-h-[calc(100vh-64px)] bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <UserPlus className="mx-auto h-12 w-12 text-purple-500" />
          <h2 className="mt-6 text-3xl font-bold text-white">Create an account</h2>
          <p className="mt-2 text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/LoginPage" className="text-purple-500 hover:text-purple-400">
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.fullName}  onChange={(e)=>setForm({...form,fullName:e.target.value})}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Full name"
                />
              </div>
            </div>
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
                  autoComplete="new-password"
                  required
                  value={form.password}  onChange={(e)=>setForm({...form,password:e.target.value})}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-700 rounded bg-gray-700"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
              I agree to the{' '}
              <a href="#" className="text-purple-500 hover:text-purple-400">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-purple-500 hover:text-purple-400">
                Privacy Policy
              </a>
            </label>
          </div>

          <button type="submit" disabled={isSigningUp}  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors">
                    {isSigningUp?(
                      <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing up...
                      </>
                    )
                   :( "Create account")}</button>
        </form>
      </div>
    </div>

      {/* <div className="opacity-25  mt-8 py-2  w-2/4 grid-col-3 flex hover:flex-col items-center justify-center
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

      </div> */}



    </>

  );
}

export default SignUpPage;
