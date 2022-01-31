import mongoose from "mongoose";

// Users schemas

const directorSchema = new mongoose.Schema({
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

const playerSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        required: true
    },
    role: {
        type: String,
        required: true
        },
    profileImage: {
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
    phoneNumber: {
        type: String,
        required: true
    },
    highSchoolName: {
        type: String,
        required: false
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
        type: String,
        required: true
    },
    dob: {
        type: Date
    },
    gradYear: {
        type: String,
        required: true
    },
    collegeCommitment: {
        type: String,
        required: false
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    pThrow: {
        type: String,
        required: true
    },
    bat: {
        type: String,
        required: true
    },
    primPosition: {
        type: String,
        required: true
    },
    seconPosition: {
        type: String,
        required: true
    },
    parentFirst: {
        type: String,
        required: true
    },
    parentLast: {
        type: String,
        required: true
    },
    parentEmail: {
        type: String,
        required: true
    },
    parentPhone: {
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

const teamSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        required: true
    },
    role: {
        type: String
    },
    profileImage: {
        type: String
    },
    teamName: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    ageGroup: {
        type: String
    },
    division: {
        type: String
    },
    password: {
        type: String
    },
    id: {
        type: String
    }
      
});

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

const adminSchema = new mongoose.Schema({
    role: {
       type: String,
        required: true,
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


export const Director = mongoose.model("Director", directorSchema, "users");
export const Player = mongoose.model("Player", playerSchema, "users");
export const Team = mongoose.model("Team", teamSchema, "users");
export const Other = mongoose.model("Other", otherSchema, "users");
export const Admin = mongoose.model("Admin", adminSchema, "users");


