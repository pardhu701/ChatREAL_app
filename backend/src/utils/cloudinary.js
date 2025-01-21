import cloudinary from 'cloudinary'
import { config } from 'dotenv'
config();

export default cloudinary.config({
    cloud_name_url:process.env.CLOUDINARY_URL,
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET

})

