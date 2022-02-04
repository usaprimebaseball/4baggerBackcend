import mongoose from "mongoose";

// Users schemas

const tournamentSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        required: true
    },
    role: {
       type: String,
        required: true
    },
    firstName: {
       type: String,
        required: true,
    },
    lastName: {
       type: String,
        required: true,
    },
    email: {
       type: String,
        required: true
    },
    phoneNumber: {
       type: Number,
        required: true
    },
    companyName: {
       type: String,
        required: true
    },
    taxId: {
       type: Number,
        required: true
    },
    street: {
       type: String,
        required: true
    },
    city: {
       type: String,
        required: true
    },
    state: {
       type: String,
        required: true
    },
    zipcode: {
       type: Number,
        required: true
    },
    checkingName: {
       type: String,
        required: true
    },
    checkingNum: {
       type: Number,
        required: true
    },
    routingNum: {
       type: Number,
        required: true
    },
    fieldComplexName: {
       type: String,
        required: true
    },
    numOfFields: {
       type: Number,
        required: true
    },
    fieldComplexCity: {
       type: String,
        required: true
    },
    fieldComplexState: {
       type: String,
        required: true
    },
    password: {
       type: String,
        required: true
    },
    id: {
        type: String
    }
});

export const Admin = mongoose.model("Tournament", tournamentSchema, "Tournaments");


