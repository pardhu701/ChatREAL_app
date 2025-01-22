import {create} from 'zustand';
import { axiosInstance } from './axios.js';
import toast from 'react-hot-toast';
import { io } from 'socket.io-client';
export const useAuthStore = create((set,get) => ({
 authuser:null,
 isSigningUp:false,
 isLoggingIn:false,
 isUpdatingProfile:false,
 onlineUsers:[],
 socket:null,
 check:null,
 
 isCheckingAuth: true,

 updateprofile: async (Data) => {
    set({isUpdatingProfile:true})
    console.log(Data)
     try{
      const res =await axiosInstance.put('/auth/updateprofile',Data);
      
      set({authuser:res.data});
      toast.success('Profile updated successfully');
     } catch(error){
        console.log(error)
        toast.error('Profile update failed');
     }
 },
 
 login: async (Data) => {
     try{
         const res = await axiosInstance.post('/auth/login',Data);
         set({authuser:res.data});
         
         toast.success('Login successful');
         get().connectSocket();
     } catch(error){
        console.log(error)
        toast.error('Login failed');
     }
     finally{
        set({isLoggingIn:false})
     }
 },

 logout: async () => {
     try{
         await axiosInstance.post('/auth/logout');
        set({authuser:null})
        toast.success('Logout successful');
        get().disconnectSocket();
     } catch(error){
        console.log(error)
        toast.error('Logout failed');
     }
 }
,
 signup: async(Data)=>{
   set({isSigningUp:true})
     try{
      const res =await axiosInstance.post('/auth/signup',Data);
      
      set({authuser:res.data});
      toast.success('Signup successful');
      get().connectSocket();
        
     } catch(error){
        console.log(error)
        toast.error('Signup failed');
      
     }
     finally{
        set({isSigningUp:false})
     }
 },

 checkauth: async () => {
     try{
        const res= await axiosInstance.get('/auth/checkauth');
       
        set({authuser:res.data})
        get().connectSocket();
      
     } catch(error){
        console.log(error)
        set({authuser:null})
     } finally{
        set({isCheckingAuth:false})
     }
 },

 connectSocket: async () => {
   const {authuser}=get();
   
   if(!authuser || get().socket?.connected) return;
    const socket = io(`http://localhost:5001?userId=${authuser._id}`);
   
    socket.connect();
     console.log(socket)
    set({socket:socket});
    socket.on('welcome',(userIds)=>{
      
        set({onlineUsers:userIds})
      
       
    })
  
 },
 disconnectSocket: async () => {
    if(get().socket?.connected) get().socket.disconnect();
 }

}))