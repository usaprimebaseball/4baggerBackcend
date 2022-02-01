import express from "express";

import { updateDirector, updatePlayer, updateTeam, updateOther, updateAdmin, getUsers, getUser } from "../controllers/user.js";
const router = express.Router();

router.get('/admin/users', getUsers);

router.get('/admin/users/:id', getUser);

router.patch('/director/:id', updateDirector);

router.patch('/player/:id', updatePlayer);

router.patch('/team/:id', updateTeam);

router.patch('/user/:id', updateOther);

router.patch('/admin/:id', updateAdmin);

export default router;