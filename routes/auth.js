import express from "express";

import { signin, adminSignin, userSignUp } from "../controllers/auth.js"
const router = express.Router();

router.post('/admin_signin', adminSignin);
router.post('/signin', signin);
router.post('/signup', userSignUp);

export default router;