import express from "express";

import { updateUser, getUsers, getUser } from "../controllers/user.js";
const router = express.Router();

router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.patch('/:id', updateUser);

export default router;