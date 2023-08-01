import express from 'express';
import { LoginPage, SingleComplain, registerUser, singleInfo } from "../Controller/authUser.js";

const router = express.Router();



//register

router.post('/register',registerUser)

//login

router.post('/login',LoginPage)

//singleuser

router.get('/singleInfo',singleInfo)

//singleComplain
router.get('/singlecomplain',SingleComplain)

export default router;