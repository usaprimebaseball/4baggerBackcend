import express from "express";

import { updateDirector, updatePlayer, updateTeam, updateOther, updateAdmin } from "../controllers/user.js";
const router = express.Router();

router.patch('/director/:id', updateDirector);

router.patch('/player/:id', updatePlayer);

router.patch('/team/:id', updateTeam);

router.patch('/user/:id', updateOther);

router.patch('/admin/:id', updateAdmin);

export default router;