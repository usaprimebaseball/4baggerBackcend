import express from "express";
import { createError } from "../controllers/errors.js";

const router = express.Router();

router.post('/errors', createError);

export default router;