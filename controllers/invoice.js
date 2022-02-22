import { TeamInvoice } from "../models/invoice.js";

export const createTeamInvoice = async (req, res) => {
    const invoice = req.body;
    const newInvoice = new TeamInvoice({ ...invoice, createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') })

    try {
        await newInvoice.save();

        res.status(201).json(newInvoice);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getInvoices = async (req, res) => { 
    try {
        const invoices = await TeamInvoice.find();
                
        res.status(200).json(invoices);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getInvoice = async (req, res) => { 
    const { id } = req.params;

    try {
        const invoice = await TeamInvoice.findById(id);
        
        res.status(200).json(invoice);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};