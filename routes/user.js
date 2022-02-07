import express from "express";

import { updateUser, getUsers, getUser, updateAdmin } from "../controllers/user.js";
const router = express.Router();

router.get('/admin/users', getUsers);

router.get('/admin/users/:id', getUser);

router.patch('/:role/:id', updateUser);

router.patch('/admin/:id', updateAdmin);


export default router;