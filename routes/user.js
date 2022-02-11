import express from "express";

import { updateUser, getUsers, getUser, updateAdmin } from "../controllers/user.js";
const router = express.Router();

router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.patch('/:id', updateUser);

router.patch('/admin/:id', updateAdmin);

export default router;