import mongoose from "mongoose";

// Users schemas

const errorSchema = mongoose.Schema({
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

var Error = mongoose.model("Error", errorSchema, "errors");

export default Error;


