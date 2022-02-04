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

export const updateUser = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');

    const updatedUser = await Director.findByIdAndUpdate(_id, info, { new: true });

    res.status(200).json({ result: updatedUser });

};

export const updateAdmin = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedAdmin = await Admin.findByIdAndUpdate(_id, info, { new: true });

    res.status(200).json({ result: updatedAdmin });
};
