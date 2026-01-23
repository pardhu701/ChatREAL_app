import axios from 'axios';

export const axiosInstance = axios.create({
   
    baseURL: 'http://my-backend-app-env.eba-aswsdhm2.us-east-1.elasticbeanstalk.com/api',
    withCredentials:true
   
   


})
