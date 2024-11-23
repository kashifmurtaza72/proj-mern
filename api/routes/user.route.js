import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js'; //remember to put.js at end
import { verifyToken } from '../utils/verifiyUser.js';
const router = express.Router();


router.get('/test', test);
router.put('/update/:userId', verifyToken, updateUser);



export default router; // as we are exporting default we can change its name, here we say router but in index.js we can say userRoutes 