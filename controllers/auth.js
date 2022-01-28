import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { Director, Player, Team, Other } from "../models/users.js";
import { secret } from "../secret.js";

export const signin = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const existingDirector = await Director.findOne({ email });
        const existingPlayer = await Player.findOne({ email });
        const existingTeam = await Team.findOne({ email });
        const existingOther = await Other.findOne({ email });

        // Check for Existing Users
        if (!existingDirector) return res.status(404).json({ message: "User doesn't exist."})

        const isDirPasswordCorrect = await bcrypt.compare(password, existingDirector.password);

        if (!isDirPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials."})

        const dirToken = jwt.sign({ email: existingDirector.email, id: existingDirector._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result: existingDirector, dirToken });

        // Check for Existing Users
        if (!existingPlayer) return res.status(404).json({ message: "User doesn't exist."})

        const isPlPasswordCorrect = await bcrypt.compare(password, existingPlayer.password);

        if (!isPlPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials."})

        const playerToken = jwt.sign({ email: existingPlayer.email, id: existingPlayer._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result: existingPlayer, playerToken });

        // Check for Existing Users
        if (!existingTeam) return res.status(404).json({ message: "User doesn't exist."})

        const isTeamPasswordCorrect = await bcrypt.compare(password, existingTeam.password);

        if (!isTeamPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials."})

        const teamToken = jwt.sign({ email: existingTeam.email, id: existingTeam._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result: existingTeam, teamToken });

        // Check for Existing Users
        if (!existingOther) return res.status(404).json({ message: "User doesn't exist."})

        const isOtherPasswordCorrect = await bcrypt.compare(password, existingOther.password);

        if (!isOtherPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials."})

        const otherToken = jwt.sign({ email: existingOther.email, id: existingOther._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result: existingOther, otherToken });
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!"});
    }
};

export const directorSignUp = async (req, res) => {
    const {
        active, role, firstName, lastName, email, phoneNumber, companyName, taxId,
        street, city, state, zipcode, checkingName, checkingNum, confirmCheckingNum,
        routingNum, confirmRoutingNum,fieldComplexName, numOfFields, fieldComplexCity, fieldComplexState, password, passwordConfirm, agreeBtn
    } = req.body;

    try {
        const existingDirector = await Director.findOne({ email });

        if (existingDirector) return res.status(400).json({ message: "User already exists."});

        if (password !== passwordConfirm) return res.status(400).json({ message: "Passwords don't match" });

        if (checkingNum !== confirmCheckingNum) return res.status(400).json({ message: "Checking Numbers don't match" });

        if (routingNum !== confirmRoutingNum) return res.status(400).json({ message: "Routing Numbers don't match" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await Director.create({ active, role, firstName, lastName, email, phoneNumber, companyName, taxId,
            street, city, state, zipcode, checkingName, checkingNum,
            routingNum, fieldComplexName, numOfFields, fieldComplexCity, fieldComplexState, password: hashedPassword
        });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result, token });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong!"});
        }
};

export const playerSignUp = async (req, res) => {
    const {
        active, role, profileImage, firstName, lastName, email, phoneNumber, highSchoolName,
        street, city, state, zipcode, dob, gradYear, collegeCommitment,
        height, weight , pThrow, bat, primPosition, seconPosition, parentFirst, parentLast, 
        parentEmail, parentPhone, password, passwordConfirm, agreeBtn
    } = req.body;
    
    try {
        const existingPlayer = await Player.findOne({ email });

        if (existingPlayer) return res.status(400).json({ message: "User already exists."});

        if (password !== passwordConfirm) return res.status(400).json({ message: "Passwords don't match" });
        
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await Player.create({ active, role, profileImage, firstName, lastName, email, phoneNumber, highSchoolName,
            street, city, state, zipcode, dob, gradYear, collegeCommitment,
            height, weight , pThrow, bat, primPosition, seconPosition, parentFirst, parentLast, 
            parentEmail, parentPhone, password: hashedPassword
        });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!"});
    }
};

export const teamSignUp = async (req, res) => {
    const {
        
        active, role, profileImage, teamName, firstName, lastName, email, phoneNumber, city, state, ageGroup, 
        division, password, passwordConfirm, agreeBtn
        
    } = req.body;
    
    try {
        const existingTeam = await Team.findOne({ email });

        if (existingTeam) return res.status(400).json({ message: "User already exists."});

        if (password !== passwordConfirm) return res.status(400).json({ message: "Passwords don't match" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await Team.create({ active, role, profileImage, teamName, firstName, lastName, email, phoneNumber, city, state, ageGroup, division, password: hashedPassword });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!"});
    }
};

export const otherSignUp = async (req, res) => {
    const {
        active, role, userName, firstName, lastName, email, phoneNumber, password, passwordConfirm, agreeBtn
    } = req.body;
    console.log(req.body)
    try {
        const existingOther = await Other.findOne({ email });

        if (existingOther) return res.status(400).json({ message: "User already exists."});

        if (password !== passwordConfirm) return res.status(400).json({ message: "Passwords don't match" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await Other.create({ active, role, userName, firstName, lastName, email, phoneNumber, password: hashedPassword });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!"});
    }
};