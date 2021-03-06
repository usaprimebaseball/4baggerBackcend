import mongoose from "mongoose";

// Users schemas

const eventSchema = mongoose.Schema({
    createdBy: {
        type: String,
        required: true
    },
    live: {
        type: Boolean,
        required: true
    },
    eventName: {
       type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    costPerTeam: {
        type: Number,
        required: true
    },
    ageGroup: {
        type: String,
        required: true
    },
    maxTeamsNum: {
        type: Number,
        required: true
    },
    fieldComplexName: {
       type: String,
        required: true
    },
    fieldComplexStreet: {
        type: String,
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
    fieldComplexZipcode: {
        type: String,
         required: true
     },
     gameFormat: {
        type: String,
        required: true
     },
     gateFee: {
        type: Number,
        required: true
     },
     entryFee: {
        type: Number,
        required: true
     },
     createdAt: {
        type: Date,
        default: new Date(),
    },
    eventImage: {
        type : String,
        required: true
    },
    teamsCount: {
        type: Number,
        required: true
    },
    teams: {
        type: [Object]
    },
    id: {
        type: String
    }
});

var Event = mongoose.model("Event", eventSchema, "events");

export default Event;


