import  express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import {signup ,login,logout,updateProfile,checkauth} from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)
router.put('/updateprofile',protectRoute,updateProfile)
router.get('/checkauth',protectRoute,checkauth)
export default router;
