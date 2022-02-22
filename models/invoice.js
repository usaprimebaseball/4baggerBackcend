import mongoose from "mongoose";

// Users schemas

const teamInvoiceSchema = mongoose.Schema({
    tournamentName: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cardLastFour: {
        type: Number,
        required: true
    },
    cardName: {
       type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    billingSt: {
        type: String,
        required: true
    },
    billingCity: {
       type: String,
        required: true
    },
    billingState: {
       type: String,
        required: true
    },
    billingZipcode: {
        type: String,
         required: true
     },
     totalFee: {
        type: Number,
        required: true
     },
     entryFee: {
        type: Number,
        required: true
     },
     gateFee: {
        type: Number,
        required: true
     },
    id: {
        type: String
    }
});

export const TeamInvoice  = mongoose.model("TeamInvoice", teamInvoiceSchema, "invoices");




