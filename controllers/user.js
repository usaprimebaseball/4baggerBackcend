import mongoose from 'mongoose';
import { Director, Admin, Team, Player, Other } from "../models/users.js";

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
    const role = info.role;
    var updatedUser;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');

    if ( role === "director" ) {
        updatedUser = await Director.findByIdAndUpdate(_id, info, { new: true });
    } else if ( role === "team" ) {
        updatedUser = await Team.findByIdAndUpdate(_id, info, { new: true });
    } else if ( role === "player" ) {
        updatedUser = await Player.findByIdAndUpdate(_id, info, { new: true });
    } else if ( role === "other" ) {
        updatedUser = await Other.findByIdAndUpdate(_id, info, { new: true });
    } else {
        updatedUser = await Admin.findByIdAndUpdate(_id, info, { new: true });
    }
    
    res.status(200).json({ result: updatedUser });

};

