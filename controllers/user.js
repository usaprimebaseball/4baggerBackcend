import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import { secret } from "../secret.js";
import { Director, Player, Team, Other, Admin } from "../models/users.js";

export const getUsers = async (req, res) => { 
    try {
        const users = await Director.find();
                
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req, res) => { 
    const { id } = req.params;

    try {
        const user = await Director.findById(id);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateDirector = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');

    const updatedDirector = await Director.findByIdAndUpdate(_id, info, { new: true });

    const token = jwt.sign({ email: updatedDirector.email, id: updatedDirector._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: updatedDirector, token });

};

export const updatePlayer = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedPlayer = await Player.findByIdAndUpdate(_id, info, { new: true });

    const token = jwt.sign({ email: updatedPlayer.email, id: updatedPlayer._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: updatedPlayer, token });
};

export const updateTeam = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedTeam = await Team.findByIdAndUpdate(_id, info, { new: true });

    const token = jwt.sign({ email: updatedTeam.email, id: updatedTeam._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: updatedTeam, token });
};

export const updateOther = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedOther = await Other.findByIdAndUpdate(_id, info, { new: true });

    const token = jwt.sign({ email: updatedOther.email, id: updatedOther._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: updatedOther, token });
};

export const updateAdmin = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedOther = await Admin.findByIdAndUpdate(_id, info, { new: true });

    const token = jwt.sign({ email: updatedOther.email, id: updatedOther._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: updatedOther, token });
};