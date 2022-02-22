import express from "express";

import { createTeamInvoice, getInvoice, getInvoices } from "../controllers/invoice.js";
const router = express.Router();

router.post('/invoices', createTeamInvoice);

router.get('/invoices', getInvoices);

router.get('/invoices/:id', getInvoice);


export default router;