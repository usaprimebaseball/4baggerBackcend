import express from "express";

import { createTeamInvoice, getInvoice, getInvoices } from "../controllers/invoice.js";
const router = express.Router();

router.get('/invoices', getInvoices);

router.get('/invoices/:id', getInvoice);

router.post('/invoices', createTeamInvoice);




export default router;