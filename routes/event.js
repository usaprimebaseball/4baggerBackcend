import express from "express";

import { createEvent, getEvents, getEvent } from "../controllers/event.js";
const router = express.Router();

router.post('/', createEvent);

router.get('/', getEvents);

router.get('/:id', getEvent);

export default router;