//import React from 'react';

import { useAuthStore } from "../lib/useAuthStore.js";

const ProfilePage = () => {
   const {updateprofile} = useAuthStore();
    const handleImageUpload=async (e)=>{
        const file=e.target.files[0];
        if(!file){
            return;     
        }
        const reader =new FileReader();
        reader.readAsDataURL(file);
        reader.onload=async()=>{
            const base64Image=reader.result;
            await updateprofile({profilePic:base64Image});
        }
    }
    
    
    return (
     <>
     <h1>Profile Page</h1>
     <input type="file"  onChange={handleImageUpload} />
     </>
    );
}

export default ProfilePage;
