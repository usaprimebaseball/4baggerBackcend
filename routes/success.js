import express from "express";
import { createSuccess } from "../controllers/success.js";

const router = express.Router();

router.post('/success', createSuccess);

export default router;