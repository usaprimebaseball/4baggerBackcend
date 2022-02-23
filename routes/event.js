import express from "express";

import { createEvent, getEvents, getEvent, updateEvent } from "../controllers/event.js";
const router = express.Router();

router.post('/', createEvent);

router.get('/', getEvents);

router.get('/:id', getEvent);

router.patch('/:id', updateEvent);

export default router;