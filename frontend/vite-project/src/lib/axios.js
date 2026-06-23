import axios from 'axios';

export const axiosInstance = axios.create({
   
    baseURL: 'https://34.228.80.120:5001/api',
    withCredentials:true
   
   


})
