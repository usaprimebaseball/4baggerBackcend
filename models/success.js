import mongoose from "mongoose";

// Users schemas

const successSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
     createdAt: {
        type: Date,
        default: new Date(),
    },
    id: {
        type: String
    }
});

var Success = mongoose.model("Success", successSchema, "success");

export default Success;


