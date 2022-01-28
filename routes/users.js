import express from "express";

import { signin, directorSignUp, playerSignUp, teamSignUp, otherSignUp } from "../controllers/user.js"
const router = express.Router();

router.post('/signin', signin);
router.post('/dir_signup', directorSignUp);
router.post('/team_signup', teamSignUp);
router.post('/player_signup', playerSignUp);
router.post('/other_signup', otherSignUp);

export default router;