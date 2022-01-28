import mongoose from "mongoose";

const otherSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        required: true
    },
    role: {
       type: String,
        required: true,
    },
    userName: {
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
    password: {
       type: String,
        required: true
    },
    id: {
        type: String
    }
});

export const Other = mongoose.model("Other", otherSchema);
